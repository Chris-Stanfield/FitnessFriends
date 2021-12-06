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
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DummyPostMngComponent } from './dummy-post-mng/dummy-post-mng.component';
import { DummyPostMngService } from './dummy-post-mng/dummy-post-mng.service';
import { CreatePostService } from './create-post/create-post.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserCircle, fas, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FilterComponent } from './filter/filter.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { RSVPComponent } from './rsvp/rsvp.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewPostComponent,
    CreatePostComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    FilterComponent,
    FeedbackComponent,
    DummyPostMngComponent,
    FilterComponent,
    FeedbackComponent,
    RSVPComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    FontAwesomeModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dqwinsp2q', 
                                             api_key: '372846421766291',
                                             api_secret: '9Z9oy1_iPyGmctkPs-3PtEPgcHw'} as CloudinaryConfiguration),
   
    
  ],
  providers: [
    CreatePostService,
    DummyPostMngService
  ],

  bootstrap: [AppComponent]
})

 export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faUserCircle);
    library.addIcons(faSearch);
  }
 }

