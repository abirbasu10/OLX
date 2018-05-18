import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Category,SubCategory,Advertisement,ProductFilterValue,AdvertisementFilterValue } from '../../classDefinition'
import { CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS,SUBCATFILTERMAP,SUBCATFILTEROPTIONS,PRODUCTFILTERVALUES } from '../../application_mock_Data'

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
currentProductName:string=""
currentAdvertisementDetails:ProductFilterValue={
  id:null,
  advertisementDetails:{
                   id:null,  productName:"",  productDescription:"", 
                   subCategoryDetails: {id:null,name:"", categoryDetails:{id:null,name:""}},
                   portDetails: {id:null,name:"",stateDetails:{id:null,name:"",countryDetails:{id:1,name:""}}},
                   name:"",contact:null,date:null,},
  filterValues:[]

}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
 
  ngOnInit() {
    this.currentProductName = this.route.snapshot.paramMap.get('adName');
    this.getOrderDetails();
  }
  getOrderDetails(): any{
    
//alert( this.currentProductName)
    
     
  for(let ad of PRODUCTFILTERVALUES ){
    if(ad.advertisementDetails.productName.toLowerCase()==this.currentProductName.toLowerCase()){
      this.currentAdvertisementDetails=ad
    }
  }
   
  }

  goToChat()
  {
    this.router.navigate(['/company/messageDetails/'+this.currentAdvertisementDetails.id]);
  }
}
