import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/company/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    /* { path: '/company/profile', title: 'Profile',  icon:'description', class: '' }, */
    { path: '/company/employeeManagement', title: 'Employee Management',  icon:'person', class: '' },
    /* { path: '/company/vesselManagement', title: 'Vessel Management',  icon:'directions_boat', class: '' },
    { path: '/company/orderManagement', title: 'Order Management',  icon:'library_books', class: '' }, */
    /* { path: '/company/provisionsDelivery', title: 'Provisions Delivery',  icon:'bubble_chart', class: '' }, */
    /* { path: '/company/exchangeRates', title: 'Forex Rates',  icon:'attach_money', class: '' }, */
    /* { path: '/company/vendorList', title: 'Vendor List',  icon:'local_shipping', class: '' }, */
    /* { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' }, */
];

@Component({
  selector: 'company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.css']
})
export class CompanySidebarComponent implements OnInit {
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
