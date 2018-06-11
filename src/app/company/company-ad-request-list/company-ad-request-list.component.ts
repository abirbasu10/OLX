import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Category,SubCategory,Advertisement,ProductFilterValue,AdvertisementFilterValue,CompanyDetails,
  LogisticFirmList, AdLogisticsMapping, LogisticsQuoteRequest, Quotation, LogisticsOrderList } from '../../classDefinition'

import { CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS,SUBCATFILTERMAP,SUBCATFILTEROPTIONS,PRODUCTFILTERVALUES,
  DefaultCompany,DefaultLogisticFirm, COMPANYDETAILS, AD_LOGISTICS_MAPPING, LOGISTICS_QUOTE_REQUEST, QUOTATION, 
  LOGISTICS_ORDER_LIST, 
  LOGISTICFIRMS} from '../../application_mock_Data'

@Component({
  selector: 'app-company-ad-request-list',
  templateUrl: './company-ad-request-list.component.html',
  styleUrls: ['./company-ad-request-list.component.css']
})
export class CompanyAdRequestListComponent implements OnInit {

  currentCompany:CompanyDetails;
  currentRequests:LogisticsQuoteRequest[]=[];
  //currentRequest:LogisticsQuoteRequest;
  reqListRecvd:LogisticsOrderList[]=[];
  reqListSent:LogisticsOrderList[]=[];

  constructor() { }

  ngOnInit() {
    this.currentCompany=DefaultCompany;
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
    this.currentRequests=LOGISTICS_QUOTE_REQUEST.filter(req=>req.companyId==this.currentCompany.id)
    //this.currentRequest=LOGISTICS_QUOTE_REQUEST.find(req=>req.companyId==this.currentCompany.id)
    console.log("this.currentRequests",this.currentRequests)

    for(let req of this.currentRequests)
    {
      var recId, sntId;
      if(this.reqListRecvd.length>0)
      {
        recId=this.reqListRecvd[this.reqListRecvd.length-1].id+1
      }
      else
      {
        recId=1;
      }

      if(this.reqListSent.length>0)
      {
        sntId=this.reqListSent[this.reqListSent.length-1].id+1
      }
      else
      {
        sntId=1;
      }

      var quoteReqId=req.id;
      var companyId=req.companyId;
      var companyName=COMPANYDETAILS.find(cmp=>cmp.id==companyId).name;
      //var logisticsId=req.logisticIdsStatus.find(log=>log.id==this.currentCompany.id).id;
      //var logisticsName=this.currentCompany.name;
      var logisticsName;
      var adId=req.adId;
      var adDetails=PRODUCTFILTERVALUES.find(ad=>ad.advertisementDetails.id==adId);
      //var buyerStatus=req.logisticIdsStatus.find(log=>log.id==this.currentCompany.id).buyerStatus;
      //var logisticStatus=req.logisticIdsStatus.find(log=>log.id==this.currentCompany.id).logisticsStatus

      //alert(req.logisticIdsStatus.length)
      for(let status of req.logisticIdsStatus)
      {
        logisticsName=LOGISTICFIRMS.find(firm=>firm.id==status.id).name;
        //alert("inside For")
        
        if(status.buyerStatus=="Received")
        {
          //alert("inside if")
          this.reqListRecvd.push({id:recId,quoteReqId:quoteReqId,companyId:companyId,companyName:companyName,
            logisticsId:status.logisticsId,logisticsName:logisticsName,adDetails:adDetails,
            buyerStatus:status.buyerStatus,logisticStatus:status.logisticStatus})
          
          //console.log("this.reqListRecvd",this.reqListRecvd)
        }
        else if(status.buyerStatus=="Sent")
        {
          //alert("inside else if")
          this.reqListSent.push({id:sntId,quoteReqId:quoteReqId,companyId:companyId,companyName:companyName,
            logisticsId:status.logisticsId,logisticsName:logisticsName,adDetails:adDetails,
            buyerStatus:status.buyerStatus,logisticStatus:status.logisticStatus})

          //console.log("this.reqListSent",this.reqListSent)
        }
      }
      /* LOGISTICS_ORDER_LIST.push({id:id,quoteReqId:quoteReqId,companyId:companyId,companyName:companyName,
        logisticsId:logisticsId,logisticsName:logisticsName,adDetails:adDetails,buyerStatus:buyerStatus,
        logisticStatus:logisticStatus}) */
    
    }//end of for


    /* console.log("this.reqListRecvd",this.reqListRecvd)
    console.log("this.reqListSent",this.reqListSent) */
    //this.reqList=LOGISTICS_ORDER_LIST;

  }

}
