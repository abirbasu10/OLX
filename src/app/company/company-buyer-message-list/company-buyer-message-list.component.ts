import { Component, OnInit } from '@angular/core';
import { MessageList, MessageDetails, MessageThread, CompanyDetails,LogisticFirmList, ProductFilterValue, Advertisement} from "../../classDefinition";
import { BUY_SELL_MESSAGELIST, BUY_SELL_MESSAGEDETAILS, LOGISTICFIRMS, DefaultLogisticFirm, COMPANYDETAILS, DefaultCompany, PRODUCTFILTERVALUES, ADVERTISEMENTS} from "../../application_mock_Data";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-buyer-message-list',
  templateUrl: './company-buyer-message-list.component.html',
  styleUrls: ['./company-buyer-message-list.component.css']
})
export class CompanyBuyerMessageListComponent implements OnInit {

  currentAdId:number;
  currentAd:ProductFilterValue;
  messageList:MessageList[]=[];
  //messageDetails:MessageDetails;
  seller:CompanyDetails;
  buyer:CompanyDetails;
  messageHeads:any[]=[];
  //messageTyped:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.seller=DefaultCompany;
    this.buyer=COMPANYDETAILS.find(cmp=>cmp.id==3);/* buyer is always Great Eastern */;
    this.getMessageList();
  }

  getMessageList()
  {
    /* this.messageList=MESSAGELIST.filter(msg=>msg.senderId==this.defaultCompany.id || msg.receiverId==this.defaultCompany.id); */
    this.messageList=BUY_SELL_MESSAGELIST.filter(msg=>msg.senderId==this.buyer.id);
    console.log("this.messageList"+this.messageList)
    for(let msg of this.messageList)
    {
      var adDetails=PRODUCTFILTERVALUES.find(ad=>ad.advertisementDetails.id==msg.adId).advertisementDetails
      var receiverName=COMPANYDETAILS.find(cmp=>cmp.id==msg.receiverId).name;
      this.messageHeads.push({messageId:msg.messageId,adId:adDetails.id, adName:adDetails.productName,receiverName:receiverName})
    }
    console.log("this.messageHeads",this.messageHeads)
  }

}
