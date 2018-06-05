import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Category,SubCategory,Advertisement,ProductFilterValue,AdvertisementFilterValue,CompanyDetails,LogisticFirmList, AdLogisticsMapping, LogisticsQuoteRequest, Quotation } from '../../classDefinition'
import { CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS,SUBCATFILTERMAP,SUBCATFILTEROPTIONS,PRODUCTFILTERVALUES,DefaultCompany, LOGISTICFIRMS, AD_LOGISTICS_MAPPING, LOGISTICS_QUOTE_REQUEST, QUOTATION } from '../../application_mock_Data'

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
currentCompany:CompanyDetails;
requestedFirms:any; /* id of firms to whom request will be sent*/
firmsForAd:LogisticFirmList[]=[]; /* Firms associated with ad OR firms to whom request has been sent */
logisticsReq:LogisticsQuoteRequest;
quotesRecvd:Quotation[]=[];
currentProductName:string="";
currentProductPrice:number;
currentAdvertisementDetails:ProductFilterValue={
  id:null,
  advertisementDetails:{
                   id:null,  productName:"",  productDescription:"", 
                   subCategoryDetails: {id:null,name:"", categoryDetails:{id:null,name:""}},
                   portDetails: {id:null,name:"",stateDetails:{id:null,name:"",countryDetails:{id:1,name:""}}},
                   name:"",contact:null,date:null,isFeatured:false},
  filterValues:[]

}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
 
  ngOnInit() {
    this.currentProductName = this.route.snapshot.paramMap.get('adName');
    this.currentCompany = DefaultCompany;
    this.getOrderDetails();
    this.logisticsReq=this.checkLogisticsQuoteRequest();
    if(this.logisticsReq)
    {
      this.getSelectedFirms();
      this.getQuotations();
    }
    else
    {
      /* get logistics firms associated with current ad if request already not placed */
      this.getLogisticFirms();
    }
  }

  getOrderDetails(): any
  {
    
    //alert( this.currentProductName)
        
         
    for(let ad of PRODUCTFILTERVALUES ){
      if(ad.advertisementDetails.productName.toLowerCase()==this.currentProductName.toLowerCase()){
        this.currentAdvertisementDetails=ad
      }
    }

    var price=this.currentAdvertisementDetails.filterValues.find(val=>val.name=="Price")
    this.currentProductPrice=Number(price.value);
       
  }
    
  goToChat()
  {
    this.router.navigate(['/company/messageDetails/'+this.currentAdvertisementDetails.id]);
  }

  checkLogisticsQuoteRequest()
  {
    /* see if request for logistics made by current company. if yes then return that object */
    return LOGISTICS_QUOTE_REQUEST.find(comp=>comp.companyId==this.currentCompany.id && 
      comp.adId==this.currentAdvertisementDetails.advertisementDetails.id)
  }

  getLogisticFirms()
  {
    /* get logistics firms associated with current ad */
    this.firmsForAd=[];
    var currentAdLogisticsMapping=AD_LOGISTICS_MAPPING.find(mapping=>mapping.adId==
        this.currentAdvertisementDetails.advertisementDetails.id)
    for(let id of currentAdLogisticsMapping.logisticIds)
    {
      var firms=LOGISTICFIRMS.find(logistic=>logistic.id==id)
      this.firmsForAd.push(firms)
    }
    console.log(this.firmsForAd)
  }

  sendRequest()
  {
    //console.log(this.requestedFirms);
    var quoteReqId;
    if(LOGISTICS_QUOTE_REQUEST.length>0)
    {
      quoteReqId=LOGISTICS_QUOTE_REQUEST[LOGISTICS_QUOTE_REQUEST.length-1].id+1
    }
    else
    {
      quoteReqId=1
    }

    var firmRequested={id:quoteReqId,adId:this.currentAdvertisementDetails.advertisementDetails.id, 
      companyId:this.currentCompany.id, logisticIdsStatus:[]}

    for(let id of this.requestedFirms)
    {
      firmRequested.logisticIdsStatus.push({id:Number(id),buyerStatus:"Sent",logisticsStatus:"Received"});
    }

    LOGISTICS_QUOTE_REQUEST.push(firmRequested);
    console.log("LOGISTICS_QUOTE_REQUEST",LOGISTICS_QUOTE_REQUEST)
    this.logisticsReq=this.checkLogisticsQuoteRequest();
    //console.log("this.logisticsReq",this.logisticsReq)
    this.getSelectedFirms();
    this.getQuotations();
  }

  getSelectedFirms()
  {
    /* get logistics firms to whom request has been sent */

    this.firmsForAd=[];
    for(let instance of this.logisticsReq.logisticIdsStatus)
    {
      var firms=LOGISTICFIRMS.find(logistic=>logistic.id==instance.id)
      this.firmsForAd.push(firms)
    }
    console.log("firms requested",this.firmsForAd)
  }

  getQuotations()
  {
    this.quotesRecvd=QUOTATION.filter(qt=>qt.companyId==this.currentCompany.id && 
      qt.adId==this.currentAdvertisementDetails.advertisementDetails.id)
  }

  
}
