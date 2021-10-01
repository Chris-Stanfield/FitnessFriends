import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }
  hello_world() {
    console.log("Hello world!");
  }

  ngOnInit(): void {
    this.hello_world();
  }

}
