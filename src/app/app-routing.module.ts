import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  { path: 'createpost', component: CreatePostComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'viewpost', component: ViewPostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
