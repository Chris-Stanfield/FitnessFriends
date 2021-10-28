import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { FilterComponent } from './filter/filter.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: 'createpost', component: CreatePostComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'viewpost', component: ViewPostComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'filter', component: FilterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
