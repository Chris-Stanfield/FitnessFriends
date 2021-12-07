import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  // selectedFile = null;
  // chrisImage:string = "../src/app/home-page/pictures/pic1.jpeg"

  // onFileSelected (event:any) {
  //   this.selectedFile = event.target.files[0];
  // }
  rsvpCount:number = 0;
  RSVP(){
    window.alert("Successfully RSVPd for this event!")
    this.rsvpCount++;
  }

  rsvpCount1:number = 0;
  RSVP1(){
    window.alert("Successfully RSVPd for this event!")
    this.rsvpCount1++;
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


function axios(arg0: { url: string; method: string; headers: { 'Content-Type': string; }; data: FormData; }) {
  throw new Error('Function not implemented.');
}

