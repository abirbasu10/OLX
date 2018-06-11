import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Category,SubCategory,Advertisement,ProductFilterValue,AdvertisementFilterValue,CompanyDetails,
  LogisticFirmList, AdLogisticsMapping, LogisticsQuoteRequest, Quotation, LogisticsOrderList } from '../../classDefinition'

import { CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS,SUBCATFILTERMAP,SUBCATFILTEROPTIONS,PRODUCTFILTERVALUES,
  DefaultCompany,DefaultLogisticFirm, COMPANYDETAILS, AD_LOGISTICS_MAPPING, LOGISTICS_QUOTE_REQUEST, QUOTATION, 
  LOGISTICS_ORDER_LIST, 
  LOGISTICFIRMS} from '../../application_mock_Data'

@Component({
  selector: 'app-company-my-ads',
  templateUrl: './company-my-ads.component.html',
  styleUrls: ['./company-my-ads.component.css']
})
export class CompanyMyAdsComponent implements OnInit {

  currentCompany:CompanyDetails=DefaultCompany;
  allAdList:ProductFilterValue[]=[];

  constructor(
    private _DomSanitizationService: DomSanitizer
  ) { }

  ngOnInit() {
    this.getMyAds()
  }

  getMyAds()
  {
    this.allAdList=PRODUCTFILTERVALUES.filter(ads=>ads.advertisementDetails.companyId==this.currentCompany.id)
    console.log(this.allAdList)
    this.showFeaturedAdOnTop()
  }

  showFeaturedAdOnTop()
 {
   /* sorts array elements: here sorts the ads based on isFeatured. Featured ads are shown on top
   follwed by normal ads */

   /* can be sorted based on more than one parameter. For eg. if necessary can sort based on 
   isFeatured and date (date of posting the ad). In that case the if statement would be
   if ( ad1.isFeatured < ad2.isFeatured && ad1.date < ad2.date)
   */

  this.allAdList.sort( function(ad1, ad2) {
      if ( ad1.advertisementDetails.isFeatured < ad2.advertisementDetails.isFeatured){
        return 1;/* sorts in descending order so that true comes before false. For ascending return -1 */
      }else if( ad1.advertisementDetails.isFeatured > ad2.advertisementDetails.isFeatured){
          return -1; /* sorts in descending order so that true comes before false. For ascending return 1*/
      }else{
        return 0;	
      }
    });
  }

}
