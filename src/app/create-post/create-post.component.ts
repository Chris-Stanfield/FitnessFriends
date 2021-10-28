import { CreatePostService } from './create-post.service';
import { Component, NgModule ,ViewChild} from '@angular/core';
//import { DummyPostMngService } from '../dummy-post-mng/dummy-post-mng.service';
import {} from '@angular/forms';



@Component({
  selector: 'create-post',
  template:`
    <h2> {{ title }} </h2><br>

    <p>Location <input type="text" id="location" name="location" ><br /></p>
    <p>Gender: </p>


    <input type="radio" id="all" name=gender value="all"><label for="all">All</label><br>
    <input type="radio" id="male" name=gender value="male"><label for="male">Male</label><br>
    <input type="radio" id="female" name=gender value="female"><label for="female">Female</label><br>
    <input type="radio" id="nb" name=gender value="nonbin"><label for="nonbin">Non-Binary</label>



    <p>Date <input type="date" id="the_date" name= "the_date" /></p>
    <p>Time <input type="time" id=starttime/><input type="time" id=endtime /><br /></p>
    <p>Age <input type="range" id=min-age /><input type=range id=max-age /><br /></p>
    <p>Description </p><br />
    
    
    <button type ="submit" (click) = "clicked()"> {{ title }}</ button >`

  //styleUrls: ['./create-post.component.css']


})
export class CreatePostComponent  {
  /*title = "Create Post";
  //available_activ;
  databaseCode;
  the_locale: String = "";
  

  public clicked()
  {
    this.the_locale = new String((<HTMLInputElement>document.getElementById("location")));

    Date = new String((<HTMLInputElement>document.getElementById("the_date")));


  }
  constructor(service: DummyPostMngService) {
    //this.available_activ = service.getActiv();
    this.databaseCode = DummyPostMngService;

    
  }*/
}
