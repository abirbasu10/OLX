import { Component, OnInit, ElementRef } from '@angular/core';
//import { ROUTES } from '../vessel/vessel-sidebar/vessel-sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router'
declare const $;

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  private toggleButton: any;
  public sidebarVisible: boolean;
  public isClosed :boolean =true;
  
  constructor(location: Location,  private element: ElementRef) {
    this.location = location;
          this.sidebarVisible = false;



   }

  ngOnInit() {
  //  this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    

    $(".landingNavBar ul li").click(function(){

        $(".nav li").removeClass("active");

        $(this).addClass("active");

    });

    // $(".navbar-toggle").click(function(){

    //     if ($(this).hasClass("toggled") ){

    //         this.sidebarVisible = false  
    //         this.sidebarToggle()
    //     }    
    //     else{
    //         this.sidebarVisible = true 
    //         this.sidebarToggle()
    //     }

    //     // this.sidebarVisible = true 

    //     // this.sidebarToggle()


        
    // })

 

  }

  ngOnDestroy(){
      //alert("Destroy")
    this.sidebarVisible = false 
  }
  
  goTo(location: string): void {
    window.location.hash = ''; 
    window.location.hash = location;
}
 toggleSidebar(){
     this.sidebarVisible=!this.sidebarVisible
 }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
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
    //this.isClosed=true
};
sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    

    // if(this.isClosed==true){
    //     this.sidebarVisible=false
    // }
    

    if (this.sidebarVisible === false) {
        this.sidebarOpen();
        
    } else {
        this.sidebarClose();
    }

    
};



getTitle(){
  var titlee = this.location.prepareExternalUrl(this.location.path());
  if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 2 );
  }
  titlee = titlee.split('/').pop();

  for(var item = 0; item < this.listTitles.length; item++){
      if(this.listTitles[item].path === titlee){
          return this.listTitles[item].title;
      }
  }
  return 'Dashboard';
}

}
