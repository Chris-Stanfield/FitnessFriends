import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { count } from 'console';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  selectedFile = null;
  chrisImage:string = "../src/app/home-page/pictures/pic1.jpeg"

  onFileSelected (event:any) {
    this.selectedFile = event.target.files[0];
  }

  RSVP(){
    window.alert("Successfully RSVPd for this event!")
  }

   onUpload () {
    // const client = require('../../../database.js');
    // (async () => {
    //   await client.connect();
    //   const result = await client.query(`INSERT INTO TheUser(profilepic) 
    //           VALUES($1) RETURNING profilepic`, [this.selectedFile]);
    //   console.log(result.rows);
    //   client.end();
  //  })};
   }
  liked=false;
  count:number = 0;    
   onLike(){
    this.liked=!this.liked;
    if(!this.liked){
      return this.count--;
    }
    this.count++;

      
      
   }

   liked1=false;
   count1:number = 0;    
   onLike1(){
    this.liked1=!this.liked1;
      if(!this.liked1){
        return this.count1--;
      }
      this.count1++;
   }
   
  

  constructor() { }

  ngOnInit(): void {
  }
  



}


