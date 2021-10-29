import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ViewPostComponent } from './view-post/view-post.component';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
=======
import { DummyPostMngComponent } from './dummy-post-mng/dummy-post-mng.component';
import { DummyPostMngService } from './dummy-post-mng/dummy-post-mng.service';
import { CreatePostService } from './create-post/create-post.service';
>>>>>>> Create-Post

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewPostComponent,
    CreatePostComponent,
<<<<<<< HEAD
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
=======
    DummyPostMngComponent
  ], 
>>>>>>> Create-Post
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
  ],
  providers: [
    CreatePostService,
    DummyPostMngService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
