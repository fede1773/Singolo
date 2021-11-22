import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSideNavbar = false;


  expandSideNavbar(){
    this.showSideNavbar = true;
  }

  collapseSideNavbar(){
    this.showSideNavbar = false;
  }
}
