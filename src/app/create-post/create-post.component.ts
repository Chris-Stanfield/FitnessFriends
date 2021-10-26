import { Component, NgZone } from '@angular/core';
import { DummyPostMngComponent } from '../dummy-post-mng/dummy-post-mng.component';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  {

  constructor(private ngZone: NgZone,) { }

 

  ngOnInit() {
    (window as any).MyNameSpace = { component: this, zone: this.ngZone, loadAngularFunction: () => this.sadness(), };
  }
  sadness() { console.log("works"); }

}
