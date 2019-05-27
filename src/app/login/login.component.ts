import { Component, OnInit, ViewChild } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
  }

  login(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.email);
    }
  }

}
