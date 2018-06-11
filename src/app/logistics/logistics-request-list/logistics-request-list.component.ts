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
  selector: 'app-logistics-request-list',
  templateUrl: './logistics-request-list.component.html',
  styleUrls: ['./logistics-request-list.component.css']
})
export class LogisticsRequestListComponent implements OnInit {

  currentFirm:LogisticFirmList;
  currentRequests:LogisticsQuoteRequest[]=[];
  reqList:LogisticsOrderList[]=[];
  constructor() { }

  ngOnInit() {
    this.currentFirm=DefaultLogisticFirm;
    this.getAllRequests();
  }

  getAllRequests()
  {
    /* get all requests from mock data and store them in local variable for rendering */
    
    
    /* for(let req of LOGISTICS_QUOTE_REQUEST)
    {
      if(req.logisticIdsStatus.find(id=>id==this.currentFirm.id))
      {
        this.currentRequests.push(req)
      }
    } */
    this.currentRequests=LOGISTICS_QUOTE_REQUEST.filter(req=>req.logisticIdsStatus.find(logistic=>logistic.id==this.currentFirm.id))
    //console.log("this.currentRequests",this.currentRequests)

    for(let req of this.currentRequests)
    {
      var id;
      if(this.currentRequests.length>0)
      {
        id=this.currentRequests[this.currentRequests.length-1].id+1
      }
      else
      {
        id=1;
      }
      var quoteReqId=req.id;
      var companyId=req.companyId;
      var companyName=COMPANYDETAILS.find(cmp=>cmp.id==companyId).name;
      var logisticsId=req.logisticIdsStatus.find(log=>log.id==this.currentFirm.id).id;
      var logisticsName=this.currentFirm.name;
      var adId=req.adId;
      var adDetails=PRODUCTFILTERVALUES.find(ad=>ad.advertisementDetails.id==adId);
      var buyerStatus=req.logisticIdsStatus.find(log=>log.id==this.currentFirm.id).buyerStatus;
      var logisticStatus=req.logisticIdsStatus.find(log=>log.id==this.currentFirm.id).logisticsStatus

      this.reqList.push({id:id,quoteReqId:quoteReqId,companyId:companyId,companyName:companyName,
        logisticsId:logisticsId,logisticsName:logisticsName,adDetails:adDetails,buyerStatus:buyerStatus,
        logisticStatus:logisticStatus})
      /* LOGISTICS_ORDER_LIST.push({id:id,quoteReqId:quoteReqId,companyId:companyId,companyName:companyName,
        logisticsId:logisticsId,logisticsName:logisticsName,adDetails:adDetails,buyerStatus:buyerStatus,
        logisticStatus:logisticStatus}) */
    }
    console.log("this.reqList",this.reqList)
    //this.reqList=LOGISTICS_ORDER_LIST;

  }

}
