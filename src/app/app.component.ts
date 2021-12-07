import { Component } from '@angular/core';
import { Router, RouterEvent, RouterLink } from '@angular/router';
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
  title = 'Fitness Friends';
  faUserCircle = faUserCircle;
  faPlusSquare = faPlusSquare;
  faSearch = faSearch;
  faCommentMedical = faCommentMedical;

  constructor(private router: Router){}

  gotoView() {this.router.navigateByUrl("/viewpost");}
}
