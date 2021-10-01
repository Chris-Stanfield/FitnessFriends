import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
<<<<<<< HEAD
import { PostComponent } from './post/post.component';
import { QuestionsCommentsComponent } from './questions-comments/questions-comments.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RecentComponent } from './recent/recent.component';
import { FeedComponent } from './feed/feed.component';
import { FilterComponent } from './filter/filter.component';
import { PostCreatorComponent } from './post-creator/post-creator.component';
=======
>>>>>>> b1e7fdc859de56a1bd5d6bbb8ac2f57f0e985f0d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginSignupComponent,
    PostComponent,
    QuestionsCommentsComponent,
    FeedbackComponent,
    RecentComponent,
    FeedComponent,
    FilterComponent,
    PostCreatorComponent
=======
    LoginSignupComponent
>>>>>>> b1e7fdc859de56a1bd5d6bbb8ac2f57f0e985f0d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
