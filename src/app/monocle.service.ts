import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Auth } from './login/login.component';
import { isPlatformBrowser } from '@angular/common';
import { takeUntil, mergeMap, map } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = environment.apiUrl;
@Injectable()
export class MonocleService {
  constructor(private http: HttpClient, /*private cookies: CookieService*/
              @Inject(PLATFORM_ID) private platformId: Object
    ) { }

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

  public verify(token: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token  })
    };
    return this.http.get(`${API_URL}/auth/verify`, options);
  }

  public isAuthenticated(): Observable<boolean> | boolean{
    let token: string;
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('token');
    }
    if (!token) {
      return false;
    }
    return this.verify(token).pipe(map(res => { console.log(res)

      if (res && res['email']) { return true; }
      else return false;
    }));
  }

  public lougout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
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
