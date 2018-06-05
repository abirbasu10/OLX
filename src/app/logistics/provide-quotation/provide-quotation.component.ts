import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Category,SubCategory,Advertisement,ProductFilterValue,AdvertisementFilterValue,CompanyDetails,
  LogisticFirmList, AdLogisticsMapping, LogisticsQuoteRequest, Quotation, LogisticsOrderList } from '../../classDefinition'

import { CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS,SUBCATFILTERMAP,SUBCATFILTEROPTIONS,PRODUCTFILTERVALUES,
  DefaultCompany,DefaultLogisticFirm, COMPANYDETAILS, AD_LOGISTICS_MAPPING, LOGISTICS_QUOTE_REQUEST, QUOTATION, 
  LOGISTICS_ORDER_LIST } from '../../application_mock_Data'

@Component({
  selector: 'app-provide-quotation',
  templateUrl: './provide-quotation.component.html',
  styleUrls: ['./provide-quotation.component.css']
})
export class ProvideQuotationComponent implements OnInit {
  currentAd:ProductFilterValue;
  currentLogistics:LogisticFirmList;
  currentCompany:CompanyDetails;
  currentQuoteReq:LogisticsQuoteRequest;

  quotedPrice:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    var adName = this.route.snapshot.paramMap.get('adName');
    var company = this.route.snapshot.paramMap.get('companyName');

    this.currentAd=PRODUCTFILTERVALUES.find(ad=>ad.advertisementDetails.productName==adName);
    this.currentCompany=COMPANYDETAILS.find(cmp=>cmp.name==company);
    this.currentLogistics=DefaultLogisticFirm;
    this.currentQuoteReq=LOGISTICS_QUOTE_REQUEST.find(req=>req.companyId==this.currentCompany.id && 
    req.adId==this.currentAd.advertisementDetails.id)
    
    if(this.currentQuoteReq!=null || this.currentQuoteReq!=undefined)
    {
      var currentQuoteLogisticStatus=this.currentQuoteReq.logisticIdsStatus.find(req=>req.id==
        this.currentLogistics.id).logisticsStatus
      
      //console.log("currentQuoteReq",this.currentQuoteReq)
      alert(currentQuoteLogisticStatus)
      if(currentQuoteLogisticStatus=="sent")
      {
        this.quotedPrice=QUOTATION.find(qt=>qt.companyId==this.currentCompany.id && 
          qt.logisticsId==this.currentLogistics.id).price;
      }
    }
    
    //this.sendQuote()
  }

  sendQuote()
  {
    var quoteId;
    if(QUOTATION.length>0)
    {
      quoteId=QUOTATION[QUOTATION.length-1].id+1
    }
    else
    {
      quoteId=1;
    }

    var quoteReqId=this.currentQuoteReq.id;
    var companyId=this.currentCompany.id;
    var companyName=this.currentCompany.name;
    var logisticsId=this.currentLogistics.id;
    var logisticsName=this.currentLogistics.name;
    var price=this.quotedPrice;
    var adId=this.currentAd.advertisementDetails.id;

    QUOTATION.push({id:quoteId,quoteReqId:quoteReqId,companyId:companyId, companyName:companyName, 
      logisticsId:logisticsId, logisticsName:logisticsName, price:price, adId:adId })

    console.log("QUOTATION",QUOTATION)

    var quoteReqStatus=this.currentQuoteReq.logisticIdsStatus.find(req=>req.id==this.currentLogistics.id)
    quoteReqStatus.logisticsStatus="Sent";
    quoteReqStatus.buyerStatus="Received";

    console.log("LOGISTICS_QUOTE_REQUEST",LOGISTICS_QUOTE_REQUEST)

    this.router.navigate(['logistics/quoteRequests']);
  }
}
