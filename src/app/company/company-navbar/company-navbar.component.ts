import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../company-sidebar/company-sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { VendorList } from '../company_vendor_list';
import { VENDORS } from '../comany_mock_data';
import { Navbar_Vendor_Status } from '../comany_mock_data';

@Component({
  selector: 'company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrls: ['./company-navbar.component.css']
})
export class CompanyNavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    notifCount:number=0;
    vendorNotifList:any[]=[];
    vendor: VendorList;

    constructor(location: Location,  private element: ElementRef) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){
        //console.log(VENDORS);
      //console.log(Navbar_Vendor_Status);
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
      this.newVendorNotif();
    }

    resetNotifCount()
    {
        this.notifCount=0;
    }
    newVendorNotif()
    {
        for (let nv of Navbar_Vendor_Status)
        {
            if(nv.subscribed && !nv.comp_seen)
            {   //console.log(nv);
                //this.vendor=VENDORS.find(v => v.id== nv.id);
                this.vendorNotifList.push(nv);
                //console.log(this.vendorNotifList);
                this.notifCount++;
            }
        }
    }

    changeVendorSeenStatus(vn)
    {
        /* alert("hi");
        vn.comp_seen=true;
        //console.log(Navbar_Vendor_Status); */
        var currentVendor=Navbar_Vendor_Status.find(v=>v.id==vn.id);
        currentVendor.comp_seen=true;
        //console.log(Navbar_Vendor_Status);
        this.vendorNotifList=[];
        this.newVendorNotif();
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
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
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
