import { Component, OnInit } from '@angular/core';



declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/admin/filterManagement', title: 'Filters',  icon:'library_books', class: '' },
     { path: '/admin/userManagement', title: 'Users ',  icon:'person', class: '' },
    { path: '/admin/categoryManagement', title: 'Category ', icon: 'store', class: ''},
    { path: '/admin/companyManagement', title: 'Company ', icon: 'store', class: ''},
];

@Component({
  selector: 'admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
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
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
}
