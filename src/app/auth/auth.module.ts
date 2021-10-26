import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'app/login/login.component';
import { SignupComponent } from 'app/signup/signup.component';
import { ResetPasswordComponent } from 'app/reset-password/reset-password.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
})
export class AuthModule { }
