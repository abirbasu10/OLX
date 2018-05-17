import { Component, OnInit } from '@angular/core';
import { CompanyDetails,ProfileFields, Review } from '../../classDefinition';
import { DefaultCompany } from '../../application_mock_Data';

import swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  defaultCompany:CompanyDetails=DefaultCompany;
  profileImgPath : string = "../assets/img/vendor/profile.jpg"

  companyWeb : string = "www.mcships.com"


  portsCompanyServe :  String [] = ["Singapore","Japan","London","China","Mumbai"]
  
  reviews : Review[] = [
    {id:"1",name:"XYZ",image:"../assets/img/vendor/NoImage.jpg",rating:"4.1/5",comment:"Good Company. Trust Worthy"},
    {id:"2",name:"Abc",image:"../assets/img/vendor/NoImage.jpg",rating:"3.8/5",comment:"Average Company"}
  ]

  constructor() { }

  ngOnInit() {
   // this.defaultVendor=DefaultVendor;
   // this.currentCompany=COMPANY[COMPANY.length-1];
  }

}
