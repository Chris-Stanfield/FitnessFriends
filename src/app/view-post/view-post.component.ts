import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {


  RSVP(){
    window.alert("Successfully RSVPd for this event!")
  }

  constructor() { }

  ngOnInit(): void {
  }

  public sum(a: number, b: number): number {
    return a+b;
  }

}
