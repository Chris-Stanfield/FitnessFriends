import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 /** 
  const form: HTMLFormElement = document.querySelector('login') as HTMLFormElement;

  form.onsubmit = () => {
    const formData = new FormData(form);

    const userName = formData.get('userName') as string;
  
    const pass = formData.get('pass') as string;

    if (auth(userName, pass)){
      Route to login page
    }
    else{
      Return error
    }


    return false;
  }
}
*/
}