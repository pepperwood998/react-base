import { Subscriber, Observer, Observable } from "rxjs";
import Axios, { CancelTokenSource } from "axios";
import { KeyValuePair, HttpHeader } from "../interfaces/common.interface";
import ENV from "../utils/envinronment";

export default class HttpClient {
  private static readonly apiUrl = ENV.API_URL;

  static get(
    uri: string,
    queryParams?: KeyValuePair,
    headers?: HttpHeader
  ): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      return new AxiosSubscriber(observer).get(
        this.resolveUri(uri),
        queryParams,
        headers
      );
    });
  }

  private static resolveUri(uri: string): string {
    if (/^(http|https):\/\/.+$/.test(uri)) {
      return uri;
    }
    return `${this.apiUrl}${uri}`;
  }
}

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
