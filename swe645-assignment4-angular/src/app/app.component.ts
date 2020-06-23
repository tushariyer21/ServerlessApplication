// Neal MacDonald G01106606
// Tushar Iyer G01118318
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeTabSelected = false;
  surveyTabSelected = false;
  title = 'survey';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  handleRoutes(e) {
    const index = e.index;
    let link;
    switch (index) {
      case 1:
        link = ['/survey'];
        break;
    }
    this.router.navigate(link);
  }
}
