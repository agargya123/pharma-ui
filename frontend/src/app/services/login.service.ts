import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

const EXPRESS_API_END_POINT = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private _http: HttpClient) {}

  loginUser(body: any) {
    return this._http.post(EXPRESS_API_END_POINT + "/users/login", body, {
      observe: "body",
    });
  }

  registerUser(body: any) {
    return this._http.post(EXPRESS_API_END_POINT + "/users/register", body, {
      observe: "body",
    });
  }

  getUsername() {
    return this._http.get(EXPRESS_API_END_POINT + "/users/username", {
      observe: "body",
      params: new HttpParams().append("token", localStorage.getItem("token")),
    });
  }
}
