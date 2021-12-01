import { Component, OnInit } from '@angular/core';


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
   
  

  constructor() { }

  ngOnInit(): void {
  }
  



}


