import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {


  constructor() { }

  hello_world()
  {
	console.log("Hello World");
  }

  ngOnInit(): void {
    this.hello_world();
  }

}
