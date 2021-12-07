import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from 'app/auth.service';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(/*private authService: AuthService*/private router: Router) {  }

  ngOnInit(): void {
  }
 

  onSubmit(f: NgForm) {
  
    

    let users: {[userName: string]: string} = {};
    users.Nick = "password";
    users.Steven = "password123";
    users.Zach = "password321";
    users.Chris = "Password";
    users.Layman = "SecurePass";

    const loginObserver = {
      next: (x: any) => console.log('User logged in'),
      error: (err: any) => console.log(err)
    };
    
    const username = f.value.username
    const password = f.value.password
    
    if(users.hasOwnProperty(username)){
      if(users[username] == password){
        console.log("Login Successful!")
        this.router.navigateByUrl("/viewpost")
      }
    }
    else{
      console.log("Login Unsuccessful!")
      alert("Username or password is incorrect. Try again.")
    }
    }

    /*  
    this.authService.login(f.value).subscribe(loginObserver);
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  */
  
}