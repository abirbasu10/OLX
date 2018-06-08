import { Component, OnInit } from '@angular/core';
import { MessageList, MessageDetails, MessageThread, CompanyDetails,LogisticFirmList, ProductFilterValue, Advertisement} from "../../classDefinition";
import { BUY_SELL_MESSAGELIST, BUY_SELL_MESSAGEDETAILS, LOGISTICFIRMS, DefaultLogisticFirm, COMPANYDETAILS, DefaultCompany, PRODUCTFILTERVALUES, ADVERTISEMENTS} from "../../application_mock_Data";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-buyer-message-details',
  templateUrl: './company-buyer-message-details.component.html',
  styleUrls: ['./company-buyer-message-details.component.css']
})
export class CompanyBuyerMessageDetailsComponent implements OnInit {

  currentAdId:number;
  currentAd:ProductFilterValue;
  currentMsgId:number;
  messageDetails:MessageDetails;
  seller:CompanyDetails;
  buyer:CompanyDetails;
  messageTyped:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.seller=DefaultCompany;
    this.buyer=COMPANYDETAILS.find(cmp=>cmp.id==3);/* buyer is always Great Eastern */
    this.getAdDetails();
    //this.currentMsgId=MESSAGELIST[MESSAGELIST.length-1].messageId
    this.insertIfNewThread()
    
    /* console.log("Message List");
    console.log(MESSAGELIST); */
    this.getMessageDetails();
    
    //console.log(this.messageDetails);
  }

  getAdDetails()
  {
    this.currentAdId = +this.route.snapshot.paramMap.get('adId');
    this.currentAd = PRODUCTFILTERVALUES.find(ad=>ad.advertisementDetails.id==this.currentAdId);
    //alert(this.currentAdId)
  }

  insertIfNewThread()
  {
    //alert("adId: "+this.currentAdId+"  sender/buyer id"+this.buyer.id+"  receiver/seller"+this.seller.id)
    var isNew=BUY_SELL_MESSAGELIST.find(msg=>msg.adId==this.currentAdId && 
      msg.senderId==this.buyer.id && msg.receiverId==this.seller.id);
      
    console.log("isNew",isNew);
    if(isNew==null || isNew==undefined)
    {
      //alert("inside if")
      this.currentMsgId=BUY_SELL_MESSAGELIST[BUY_SELL_MESSAGELIST.length-1].messageId+1

      BUY_SELL_MESSAGELIST.push({messageId:this.currentMsgId,adId:this.currentAdId,
        senderId:this.buyer.id,receiverId:this.seller.id})
      
    }
    else
    {
      //alert("inside else")
      this.currentMsgId=Number(isNew.messageId);
    }
    console.log("BUY_SELL_MESSAGELIST",BUY_SELL_MESSAGELIST)
    //alert(this.currentMsgId)
  }

  getMessageDetails()
  {
    this.messageDetails=BUY_SELL_MESSAGEDETAILS.find(msgDet=>msgDet.messageId==this.currentMsgId)
  }

  sendMessage()
  {
    if(this.messageTyped)
    {
      if(this.messageDetails==null || this.messageDetails==undefined)
      {
        BUY_SELL_MESSAGEDETAILS.push({messageId:this.currentMsgId, msgThread:[{msg:this.messageTyped,senderId:this.buyer.id, 
          receiverId:this.seller.id}]})
      }
      else
      {
        this.messageDetails.msgThread.push({msg:this.messageTyped,senderId:this.buyer.id, 
          receiverId:this.seller.id})
      }
      
      this.messageTyped="";
      console.log("BUY_SELL_MESSAGEDETAILS",BUY_SELL_MESSAGEDETAILS)
      this.getMessageDetails();
    }
    
  }


}
