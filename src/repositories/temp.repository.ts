import { Observable } from "rxjs";
import HttpClient from "../services/http-client.service";

export default class TempRepository {
  static test(): Observable<any> {
    return HttpClient.get("/articles",{tuan:'dao'});
  }
}
