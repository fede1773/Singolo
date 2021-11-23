import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  @Input() showSideNavbar = false; 

  @Output() closeSideNavbar = new EventEmitter<boolean>();

  constructor() { }

  expandSideNavbar(){
    this.showSideNavbar = true;
  }

  collapseSideNavbar(){
    this.showSideNavbar = false;
    this.closeSideNavbar.emit(false);
  }


  ngOnInit(): void {
  }

}
