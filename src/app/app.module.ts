import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { DummyPostMngComponent } from './dummy-post-mng/dummy-post-mng.component';
import { DummyPostMngService } from './dummy-post-mng/dummy-post-mng.service';
import { CreatePostService } from './create-post/create-post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewPostComponent,
    CreatePostComponent,
    DummyPostMngComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CreatePostService,
    DummyPostMngService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
