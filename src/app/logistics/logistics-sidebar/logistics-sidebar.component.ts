import { Component, OnInit } from '@angular/core';



declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/logistics/profileCompletion', title: 'Profile Completion', icon: 'description', class: ''},
    { path: '/logistics/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/logistics/messageList', title: 'Messages',  icon: 'mail', class: '' },
    { path: '/logistics/quoteRequests', title: 'Requests', icon: 'library_books', class: ''},
    { path: '/logistics/createPromotionalAd', title: 'Promote', icon: 'card_giftcard', class: ''}
   ];

@Component({
  selector: 'logistics-sidebar',
  templateUrl: './logistics-sidebar.component.html',
  styleUrls: ['./logistics-sidebar.component.css']
})
export class LogisticsSidebarComponent implements OnInit {
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

