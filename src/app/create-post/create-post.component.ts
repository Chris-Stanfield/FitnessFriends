import { CreatePostService } from './create-post.service';
import { Component, NgModule ,ViewChild} from '@angular/core';
import { DummyPostMngService } from '../dummy-post-mng/dummy-post-mng.service';
import {} from '@angular/forms';



@Component({
  selector: 'create-post',
  template:`
    <p>Activity <input type = "text" id = "activity"><br /></p>
    <p>Location <input type="text" id="location" name="location" ><br /></p>
    <p>Gender: </p>

    <p>Date <input type="date" id="the_date" name= "the_date" /></p>
    <p>Time <input type="time" id=starttime/><br /></p>

    <!--<p>Age <input type="range" id=min-age /><input type=range id=max-age /><br /></p>-->

    <p>Description </p><br />
    
    
    <button type ="submit" (click) = "clicked()"> {{ title }}</ button >`

  //styleUrls: ['./create-post.component.css']


})
export class CreatePostComponent  {
  title = "Create Post";
  //available_activ;
  databaseCode;
  the_locale: String = "";
  a_date: String = "";
  a_time: String = "";
  the_activity: String = "";
  

  public clicked()
  {
    this.the_locale = ((<HTMLInputElement>document.getElementById("location")).value);
    this.a_date = ((<HTMLInputElement>document.getElementById("the_date")).value);
    this.a_time = ((<HTMLInputElement>document.getElementById("starttime")).value);
    this.the_activity = ((<HTMLInputElement>document.getElementById("activity")).value);
    //this.databaseCode.updateDB(this.the_activity, this.the_locale, this.a_time, this.a_date);
    


  }
  constructor(service: DummyPostMngService) {
    //this.available_activ = service.getActiv();
    this.databaseCode = DummyPostMngService;
    
    
  }
}
