import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Currency, Category,SubCategory,Advertisement,ProductFilterValue,AdvertisementFilterValue,CompanyDetails,
  LogisticFirmList, AdLogisticsMapping, LogisticsQuoteRequest, Quotation, ThirdPartyAds } from '../../classDefinition'
import { CURRENCY, SELLER_CHOSEN_CURRENCY, LOGISTICS_CHOSEN_CURRENCY, CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS,SUBCATFILTERMAP,SUBCATFILTEROPTIONS,PRODUCTFILTERVALUES,
  DefaultCompany, LOGISTICFIRMS, AD_LOGISTICS_MAPPING, LOGISTICS_QUOTE_REQUEST, QUOTATION, THIRD_PARTY_ADS } from '../../application_mock_Data'

import swal from 'sweetalert2';

declare const $;

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
currencyList:Currency[]=CURRENCY;
chosenCurrency:Currency=SELLER_CHOSEN_CURRENCY[0];
logisticsChosenCurrency:Currency=LOGISTICS_CHOSEN_CURRENCY[0];
priceOfAd:string;
quotesReceived:number[]=[];

currentCompany:CompanyDetails;

requestedFirms:any; /* id of firms to whom request will be sent*/
firmsForAd:LogisticFirmList[]=[]; /* Firms associated with ad OR firms to whom request has been sent */
logisticsReq:LogisticsQuoteRequest;
quotesRecvd:Quotation[]=[];

adsThirdParty:ThirdPartyAds[]=[];
rightAds:ThirdPartyAds[]=[];
bottomAds:ThirdPartyAds[]=[];

currentProductName:string="";
currentProductPrice:number;
currentAdvertisementDetails:ProductFilterValue={
  id:null,
  advertisementDetails:{
                   id:null,  images:[],productName:"",  productDescription:"", 
                   subCategoryDetails: {id:null,name:"", categoryDetails:{id:null,name:""}},
                   portDetails: {id:null,name:"",stateDetails:{id:null,name:"",countryDetails:{id:1,name:""}}},
                   name:"",contact:null,date:null,isFeatured:false,isOpen:true,},
  filterValues:[]

}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
 
  ngOnInit() {
    this.currentProductName = this.route.snapshot.paramMap.get('adName');
    this.currentCompany = DefaultCompany;
    this.getAdDetails();
    this.getThirdPartyAds();
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

  getThirdPartyAds()
  {
    /* $(".carouselTicker").carouselTicker({
      // animation speed
      speed: 1,
      // animation delay
      delay: 30,
      // RTL or LTR
      reverse: false
      }); */
      
    for(let ad of THIRD_PARTY_ADS)
    {
      if(ad.location.find(loc=>loc==this.currentAdvertisementDetails.advertisementDetails.portDetails.name))
      {
        this.adsThirdParty.push(ad);
      }
    }
    //console.log(this.adsThirdParty)

    //ads to the right of the page
    if(this.adsThirdParty.length>0)
    {
      this.rightAds=this.adsThirdParty.filter(ad=>ad.position=="right")
    }
    if(this.rightAds!=undefined && this.rightAds!=null && this.rightAds.length>0)
    {
      $('.currentAdSection').removeClass("col-md-12");
      $('.currentAdSection').addClass("col-md-9");
      $('.rightAdSection').removeClass("hidden")

      var i=0;
      for(let ad of this.rightAds) 
      {
        /* if(ad.position=="right")
        { */
          var carouselContent='<div class="item"><div class="row adNameThrdPrty"><div class="col-md-12">'
          +ad.adTitle+'</div></div>   <div class="row adDetailsThrdPrty"><div class="col-md-12">'
          +ad.adDetails+'</div></div>    <div class="row thrdPrtyPostedBy"><div class="col-md-12">'
          +ad.postedByName+'</div>  <div class="row thrdPrtyAdVisit"><div class="col-md-12">'
          +'<a routerLink="'+ad.url+'"><button class="btn btn-primary btn-round">Visit</button></a>'
          +'</div></div>'+'</div>'
          $('.rightAdsDetails').append(carouselContent);
          $('<li data-target="#rightAdCarousel" data-slide-to="'+i+'"></li>').appendTo('.rightAdsOL')
        //}
        i++;
      }
      $('.rightAdsDetails').children('.item').first().addClass('active');
      $('.rightAdsOL > li').first().addClass('active');
      $('#rightAdCarousel').carousel();
    }


    //ads to the bottom of the page
    if(this.adsThirdParty.length>0)
    {
      this.bottomAds=this.adsThirdParty.filter(ad=>ad.position=="bottom")
    }
    
  }

  getAdDetails(): any
  {
    
    //alert( this.currentProductName)
        
         
    for(let ad of PRODUCTFILTERVALUES ){
      if(ad.advertisementDetails.productName.toLowerCase()==this.currentProductName.toLowerCase()){
        this.currentAdvertisementDetails=ad
      }
    }

    var price=this.currentAdvertisementDetails.filterValues.find(val=>val.name=="Price")
    this.currentProductPrice=Number(price.value)
    this.priceOfAd=price.value;

    if(this.currentAdvertisementDetails.advertisementDetails.images.length>0)
    {
      this.showAdImages()
    }
    
       
  }

  showAdImages()
  {
    var i=0;
    for(let ad of this.currentAdvertisementDetails.advertisementDetails.images) 
    {
      /* if(ad.position=="right")
      { */
        var carouselContent='<div class="item"><img class="img-responsive" src="'+ad.path+'"></div>'
        $('.adImages').append(carouselContent);
        $('<li data-target="#adImageCarousel" data-slide-to="'+i+'"></li>').appendTo('.adImagesOL')
      //}
      i++;
    }
    $('.adImages').children('.item').first().addClass('active');
    $('.adImagesOL > li').first().addClass('active');
    $('#adImageCarousel').carousel();
  }
    
  goToChat()
  {
    this.router.navigate(['/company/messageDetails/'+this.currentAdvertisementDetails.id]);
  }

  goToBuySellChat()
  {
    this.router.navigate(['/company/BuyerMessageDetails/'+this.currentAdvertisementDetails.id]);
  }

  setCurrency(valOfField)
  {
    var selectedCurrency=CURRENCY.find(c=>c.id==valOfField.value)
    //SELLER_CHOSEN_CURRENCY[0]=selectedCurrency;
    this.chosenCurrency=selectedCurrency
    //console.log("SELLER_CHOSEN_CURRENCY",SELLER_CHOSEN_CURRENCY)
    this.currencyExchange()
  }

  currencyExchange()
  {
    /* if seller put price in Rs(say) and while searching required currency is $ then divide by
    Rs' fraction. eg Seller price=100, Rs fraction=64 reqd=100/64 */
    /* if(this.chosenCurrency.symbol=="$")
    {
      this.currentProductPrice=this.currentProductPrice/SELLER_CHOSEN_CURRENCY[0].fraction

      if(this.quotesRecvd.length>0)
      {
        for(let q of this.quotesRecvd)
        {
          q.price=q.price/SELLER_CHOSEN_CURRENCY[0].fraction
        }
      }
    }
    else
    { */
      /* from any to any conversion: convert to USD equiv first then multiply with chosen currency
      fraction */
      var price=this.currentAdvertisementDetails.filterValues.find(val=>val.name=="Price")
      price.value=this.priceOfAd;
      price.value=String(Number(price.value)/SELLER_CHOSEN_CURRENCY[0].fraction)
      //alert("price.value to USD "+price.value)
      price.value=String(Number(price.value)*this.chosenCurrency.fraction);
      //alert("price.value to chosen currency "+price.value)
      price.value=String(Math.round(Number(price.value)*100)/100)

      this.currentProductPrice=Number(this.priceOfAd);
      this.currentProductPrice=this.currentProductPrice/SELLER_CHOSEN_CURRENCY[0].fraction;
      this.currentProductPrice=this.currentProductPrice*this.chosenCurrency.fraction;
      this.currentProductPrice=Math.round(this.currentProductPrice*100)/100

      if(this.quotesRecvd.length>0)
      {
        var i=0;
        for(let q of this.quotesRecvd)
        {
          q.price=this.quotesReceived[i];
          i++;
          q.price=q.price/SELLER_CHOSEN_CURRENCY[0].fraction
          q.price=q.price*this.chosenCurrency.fraction;
          q.price=Math.round(q.price*100)/100
        }
      }
    //}
    
    
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
    //console.log(this.firmsForAd)
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
    //console.log("LOGISTICS_QUOTE_REQUEST",LOGISTICS_QUOTE_REQUEST)
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
    //console.log("firms requested",this.firmsForAd)
  }

  getQuotations()
  {
    this.quotesRecvd=QUOTATION.filter(qt=>qt.companyId==this.currentCompany.id && 
      qt.adId==this.currentAdvertisementDetails.advertisementDetails.id)

    var i=0
    for(let q of this.quotesRecvd)
    {
      this.quotesReceived[i]=q.price;
      q.price=q.price/this.logisticsChosenCurrency.fraction
      q.price=q.price*this.chosenCurrency.fraction;
      q.price=Math.round(q.price*100)/100
      i++;
    }

  }

  closeOrder()
  {
    this.currentAdvertisementDetails.advertisementDetails.isOpen=false;
    $('.closeOrderBtn').addClass("hidden");
    
    swal({
      title: 'Confirmed and Closed!',
      text: 'Logistics Confirmed and Order Closed',
      type: 'success',
      confirmButtonText: 'Ok!!'
    })

  }

  
}
