import { Component, OnInit, ViewChild } from '@angular/core';
import { MonocleService } from '../monocle.service';
import { Router } from '@angular/router';

export interface Auth {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: Auth = {email: null, password: null};
  @ViewChild('loginForm') loginForm: any;

  constructor(private monocleService: MonocleService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.loginForm.valid) {
      this.monocleService.Login(this.auth).subscribe(res => { console.log(res);
        if (res && res.status === 200) {
          localStorage.setItem('token', res.access_token);
          this.router.navigateByUrl('/stages');
        }
      }, err => console.log(err));
    }
  }

}
