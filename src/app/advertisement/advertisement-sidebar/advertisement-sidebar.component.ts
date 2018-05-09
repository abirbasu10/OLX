import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/advertisements/create', title: 'Create Add',  icon: 'playlist_add', class: '' },
  
  { path: '/advertisements/search', title: 'Advertisements',  icon:'dashboard', class: '' },

];
@Component({
  selector: 'advertisement-sidebar',
  templateUrl: './advertisement-sidebar.component.html',
  styleUrls: ['./advertisement-sidebar.component.css']
})
export class AdvertisementSidebarComponent implements OnInit {
  menuItems: any[];

  private toggleButton: any;
  private sidebarVisible: boolean;
  constructor() { } 

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.sidebarVisible= true;
    this.toggleButton = document.getElementsByClassName('nav-container')[0];
  
  }


  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};

sidebarOpen() {
  const toggleButton = this.toggleButton;
  console.log(toggleButton);
  const body = document.getElementsByTagName('body')[0];
  setTimeout(function(){
      toggleButton.classList.add('toggled');
  }, 500);
  body.classList.add('nav-open');

  this.sidebarVisible = true;
  //alert("OPEN sidebarVisible== "+this.sidebarVisible);
};
sidebarClose() {
  const body = document.getElementsByTagName('body')[0];
  //alert("Hi"+body);
  this.toggleButton.classList.remove('toggled');
  this.sidebarVisible = false;
  //alert("CLOSE sidebarVisible== "+this.sidebarVisible);
  body.classList.remove('nav-open');
};
sidebarToggle() {
  // const toggleButton = this.toggleButton;
  // const body = document.getElementsByTagName('body')[0];
  //alert("Sidebar Toggle"+this.sidebarVisible);
  if (this.sidebarVisible === false) {
      this.sidebarOpen();
  } else {
      this.sidebarClose();
  }
};

}
