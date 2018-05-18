import { Component, OnInit } from '@angular/core';
import { MessageList, MessageDetails, MessageThread, CompanyDetails,LogisticFirmList, ProductFilterValue, Advertisement} from "../../classDefinition";
import { MESSAGELIST, MESSAGEDETAILS, LOGISTICFIRMS, DefaultLogisticFirm, COMPANYDETAILS, DefaultCompany, PRODUCTFILTERVALUES, ADVERTISEMENTS} from "../../application_mock_Data";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logistics-message-list',
  templateUrl: './logistics-message-list.component.html',
  styleUrls: ['./logistics-message-list.component.css']
})
export class LogisticsMessageListComponent implements OnInit {

  currentAdId:number;
  currentAd:ProductFilterValue;
  messageList:MessageList[]=[];
  //messageDetails:MessageDetails;
  defaultCompany:CompanyDetails;
  defaultLogistics:LogisticFirmList;
  messageHeads:any[]=[];
  //messageTyped:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.defaultCompany=DefaultCompany;
    this.defaultLogistics=DefaultLogisticFirm;
    this.getMessageList();
  }

  getMessageList()
  {
    /* this.messageList=MESSAGELIST.filter(msg=>msg.senderId==this.defaultCompany.id || msg.receiverId==this.defaultCompany.id); */
    this.messageList=MESSAGELIST.filter(msg=>msg.receiverId==this.defaultLogistics.id);
    //console.log(this.messageList)
    for(let msg of this.messageList)
    {
      var adDetails=PRODUCTFILTERVALUES.find(ad=>ad.advertisementDetails.id==msg.adId).advertisementDetails
      var senderName=COMPANYDETAILS.find(cmp=>cmp.id==msg.senderId).name;
      this.messageHeads.push({messageId:msg.messageId,adId:adDetails.id, adName:adDetails.productName,senderName:senderName})
    }
  }

}
