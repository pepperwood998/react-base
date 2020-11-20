import { Subscriber, Observer, Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";
import Axios, { CancelTokenSource } from "axios";
import {
  KeyValuePair,
  HttpHeader,
  HttpRequestOptions
} from "../interfaces/common.interface";
import ENV from "../utils/envinronment";

export default class HttpClient {
  private static readonly apiUrl = ENV.API_URL;

  static get(
    uri: string,
    queryParams?: KeyValuePair,
    headers?: HttpHeader
  ): Observable<any> {
    return this.request(uri, "GET", { queryParams, headers });

    // return Observable.create((observer: Observer<any>) => {
    //   return new AxiosSubscriber(observer).get(
    //     this.resolveUri(uri),
    //     queryParams,
    //     headers
    //   );
    // });
  }

  static request(
    uri: string,
    method = "GET",
    options?: HttpRequestOptions
  ): Observable<any> {
    const url = new URL(this.resolveUri(uri));
    if (options?.queryParams) {
      url.search = new URLSearchParams(options.queryParams).toString();
    }

    return ajax({
      url: url.toString(),
      method,
      headers: options?.headers,
      body: options?.body
    }).pipe(
      catchError((err) => {
        console.error(err);
        return of(null);
      }),
      map((ajaxResponse) => ajaxResponse?.response)
    );
  }

  private static resolveUri(uri: string): string {
    if (/^(http|https):\/\/.+$/.test(uri)) {
      return uri;
    }
    return `${this.apiUrl}${uri}`;
  }
}

/**
 * @deprecated
 * TODO: Wait for RxJS 'ajax' usability, then remove Axios
 *
 */
export class AxiosSubscriber extends Subscriber<any> {
  private isCompleted = false;
  private cancelTokenSource: CancelTokenSource;
  private observer: Observer<any>;

  constructor(observer: Observer<any>) {
    super(observer);
    this.observer = observer;
    this.cancelTokenSource = Axios.CancelToken.source();
  }

  get(
    uri: string,
    queryParams?: KeyValuePair,
    header?: HttpHeader
  ): AxiosSubscriber {
    Axios.get(uri, {
      cancelToken: this.cancelTokenSource.token,
      params: queryParams,
      headers: header
    })
      .then((response) => {
        this.observer.next(response.data);
        this.observer.complete();
      })
      .catch((error) => {
        this.observer.error(error);
      })
      .finally(() => {
        this.isCompleted = true;
      });
    return this;
  }

  unsubscribe() {
    super.unsubscribe();

    if (!this.isCompleted) {
      this.cancelTokenSource.cancel();
      this.isCompleted = true;
    }
  }
}
