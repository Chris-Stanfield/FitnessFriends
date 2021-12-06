import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitnessfriends';
  faUserCircle = faUserCircle;
  faPlusSquare = faPlusSquare;
  faSearch = faSearch;
  faCommentMedical = faCommentMedical;
  count:number = 0;
  count1:number = 0;
}
