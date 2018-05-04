import { Component, OnInit } from '@angular/core';
import { VendorList } from '../../company/company_vendor_list'
/* import { DefaultVendor } from '../../vendor/vendor_mock_data'
import { Company } from "../../admin/admin_company";
import { COMPANY } from "../../admin/admin_mock_data";
 */
class CompanyReview{

  id : string
  name : string
  image : string
  rating : string
  comment : string

}

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  defaultVendor:VendorList;
  profileImgPath : string = "../assets/img/vendor/profile.jpg"

  companyId;
 // currentCompany:Company={id:null, name:"", logo:"", email:"",contact:"", website:"", address:"",registrationDate:null,numberOfShip:null,numberOfOrder:null,paymentStatus:'',expiryDate:null};

  /* vendorName : string = "Youseeme Kennedy"

  vendorRate : string = "8.2/10"

  vendorEmail : string = "youseeme@gmail.com"

  vendorPhn : string = "9876543214"

  vendorLoc : string ="Newyork" */

  vendorWeb : string = "www.theindian.com"

  portsVendorServe :  String [] = ["Singapore","Japan","London","China","Mumbai"]

  reviews : CompanyReview[] = [{id:"1",name:"XYZ",image:"../assets/img/vendor/NoImage.jpg",rating:"8.2/10",comment:"Great Company. Highly professional. Great PR"},
    {id:"2",name:"Abc",image:"../assets/img/vendor/NoImage.jpg",rating:"7.2/10",comment:"Good to work with them"}
  ]
  
  constructor() { }

  ngOnInit() {
   // this.defaultVendor=DefaultVendor;
   // this.currentCompany=COMPANY[COMPANY.length-1];
  }

}
