import { Component, OnInit ,Input} from '@angular/core';

import { LandingNavbarComponent } from '../landing-navbar/landing-navbar.component'

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;    
}
export const ROUTES: RouteInfo[] = [
    { path: '#mission_vission', title: 'Mission & Vission',  icon: 'dashboard', class: '' },
    { path: '#brief_background', title: 'Background',  icon: 'description', class: '' },
    { path: '#probSoln', title: 'Problems & Solution',  icon: 'thumbs_up_down', class: '' },
    { path: '#contactUs', title: 'Contact Us',  icon: 'perm_phone_msg', class: '' },
//  { path: '/vessel/createPurchaseOrder', title: 'Create Provision',  icon: 'reorder', class: '' },    
    /* { path: '/vessel/addCrewMember', title: 'Add Crew ',  icon: 'person_add', class: '' },   
    { path: '/vessel/orders', title: 'Orders',  icon: 'library_books', class: '' },
    { path: '/vessel/vendors', title: 'Vendors',  icon: 'business', class: '' },
    { path: '/vessel/recipes', title: 'Recipes',  icon: 'receipt', class: '' }, */
//  { path: '/vessel/contactSupport', title: 'Contact Support ',  icon: 'contact_mail', class: '' },
    /* { path: '/vessel/inventoryCostDetails', title: 'Inventory Cost Details',  icon: 'payment', class: '' },
    { path: '/vessel/mealReport', title: 'Meal Report',  icon: 'assignment', class: '' }, */
    
   
];

@Component({
  selector: 'app-landing-sidebar',
  templateUrl: './landing-sidebar.component.html',
  styleUrls: ['./landing-sidebar.component.css']
})



export class LandingSidebarComponent implements OnInit {
    
  menuItems: any[];
  private toggleButton: any;
  private sidebarVisible: boolean;
  public x: any = LandingNavbarComponent;
  @Input() navBar: LandingNavbarComponent;
public abc:boolean
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.sidebarVisible= true;
    this.toggleButton = document.getElementsByClassName('nav-container')[0];

    this.abc=this.x.sidebarVisible

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
    console.log("enter")
    this.navBar.toggleSidebar();
    const body = document.getElementsByTagName('body')[0];
  console.log("mid")
  this.toggleButton.classList.remove('toggled');
  document.getElementsByClassName('navbar-toggle')[0].classList.remove('toggled');
  console.log("after")
  //this.sidebarVisible = false;
  body.classList.remove('nav-open');
 
};
sidebarToggle() {
    this.x.sidebarVisible = false
    
  if (this.sidebarVisible === false) {
      this.sidebarOpen();
      
  } else {
      this.sidebarClose();
      
  }
};


}



