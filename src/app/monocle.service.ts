import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Auth } from './login/login.component';

// import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = environment.apiUrl;
@Injectable()
export class MonocleService {
  constructor(private http: HttpClient, /*private cookies: CookieService*/) { }

  InitPassword(userData) {
    return this.http.post( API_URL + '/initPassword/', userData, httpOptions);
  }

  ForgetPassword(userData) {
    return this.http.post( API_URL + '/forgetPasscode', userData, httpOptions);
  }

  ResetPassword(userData) {
    return this.http.post( API_URL + '/resetPasscode/', userData, httpOptions);
  }
  public Login(userData: Auth): Observable<any> {
    return this.http.post(API_URL + '/auth/login', userData, httpOptions);
  }

  public verify(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    const tokenObj = {token: token};
    return this.http.post(`${API_URL}/auth/verify`, tokenObj, httpOptions);
  }

  public async isAuthenticated() {
    const res = await this.verify(); console.log(res);
    if (res && res['email']) return true;
    return false;
  }

  public lougout() {
    localStorage.removeItem('token');
  }
  // public SetCredentials(data: string): void {
  //   this.cookies.set('globals', data);
  // }
  // public clearCredentials(): void {
  //   this.cookies.deleteAll();
  // }
  // GetCustomer(uid, token) {
  //   const options = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token  })
  //   };
  //   return this.http.get(API_URL + '/getCustomer/' + uid, options);
  // }
}
