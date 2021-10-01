import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { PostComponent } from './post/post.component';
import { QuestionsCommentsComponent } from './questions-comments/questions-comments.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RecentComponent } from './recent/recent.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    PostComponent,
    QuestionsCommentsComponent,
    FeedbackComponent,
    RecentComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
