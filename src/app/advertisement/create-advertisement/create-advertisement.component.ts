import { Component, OnInit } from '@angular/core';
import { Currency, Category, SubCategory, Filter, SubCatFilterMap, Country, State, Port,Image, Advertisement,AdvertisementFilterValue, ProductFilterValue, SubCategoryFilterOption, FeaturedPlan, FeaturedAdvertisementMap } from '../../classDefinition';
import { CURRENCY,SELLER_CHOSEN_CURRENCY,CATEGORIES, SUBCATEGORIES, FILTERS, SUBCATFILTERMAP, COUNTRIES, STATES, PORTS,IMAGES, ADVERTISEMENTS, PRODUCTFILTERVALUES, SUBCATFILTEROPTIONS, FEATUREDPLANS, FEATURED_ADVERTISEMENT_MAP } from '../../application_mock_Data';
import { AdLogisticsMapping } from '../../classDefinition';
import { AD_LOGISTICS_MAPPING } from '../../application_mock_Data';
import { DomSanitizer } from '@angular/platform-browser';

import { Router } from '@angular/router';
//import { ImageUploadModule } from "angular2-image-upload";

import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

import swal from 'sweetalert2';
//import { HexBase64BinaryEncoding } from 'crypto';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {
currencyList:Currency[]=CURRENCY;
selectedCurrencyId:number;

loginStatus:string="true"
categories:Category[]=[];
subcategories:Category[]=[];
countries:Country[]=[];
states:State[]=[];
ports:Port[]=[];
filters:Filter[]=[];
featuredPlans:FeaturedPlan[]=[];
featuredAdMapping:FeaturedAdvertisementMap[]=[];
url:any;

adTitle:string;
adCategory:string="";
adSubCategory:string="";
adDescription:string="";
reqdfilters:any[]=[];
filterSet:any[]=[];
featuredId:number=null;
chosenPlan:FeaturedPlan=null;
adCountry:string="";
adState:string="";
adPort:string="";
adImage:Image[]=[];
name:string="";
contact:number;
date: Date=new Date();
filterValueId:number=1;
sellLogistic:boolean=false
advertisementDetails:Advertisement;
filterValues:AdvertisementFilterValue[]=[];

//image
URL = window.URL;

//image:HexBase64BinaryEncoding;
  constructor(private router: Router,private http: Http, private _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
    this.checkLogInOrNot()
    this.categories=CATEGORIES;
    this.countries=COUNTRIES;
    this.featuredPlans=FEATUREDPLANS;
    this.featuredAdMapping=FEATURED_ADVERTISEMENT_MAP;

  }
   

  checkLogInOrNot(){
    if(this.loginStatus=="false"){
      return ''
    }
  }

  getSubCategory()
  {
    this.adSubCategory="";
    this.filterValueId=1;
    this.filterValues=[];
    this.subcategories=SUBCATEGORIES.filter(subc=>subc.categoryDetails.name.toLowerCase()==this.adCategory.toLowerCase())
  }

  setCurrency(valOfField)
  {
    /* console.log("valOfField",valOfField.value) */
    var selectedCurrency=CURRENCY.find(c=>c.id==valOfField.value)
    SELLER_CHOSEN_CURRENCY[0]=selectedCurrency;
    console.log("SELLER_CHOSEN_CURRENCY",SELLER_CHOSEN_CURRENCY)
  }

  getFilters()
  {
    /* alert(this.adCategory)
    alert(this.adSubCategory) */
    this.reqdfilters=[];
   // console.log(this.reqdfilters);
    var subcatFilterMap =null
    subcatFilterMap=SUBCATFILTERMAP.find(subc=>subc.subCategoryDetails.name.toLowerCase()==this.adSubCategory.toLocaleLowerCase());
    //console.log(subcatFilterMap)
    this.reqdfilters=subcatFilterMap.filterDetails;
    /* console.log("reqdfilters without value")
    console.log(this.reqdfilters); */
    var filterValues;
    var subcatFilterOptions=SUBCATFILTEROPTIONS.find(subc=>subc.subCategoryDetails.name.toLowerCase()==this.adSubCategory.toLocaleLowerCase())
    if(subcatFilterOptions)
    {
      for(let f of this.reqdfilters)
      {

        filterValues=subcatFilterOptions.subCatFilterValues.find(flt=>flt.filterDetails.name==f.name)
        //console.log(filterValues)
        if(filterValues)
        {
          //alert("inside if")
          //console.log(filterValues);
          f.values=filterValues.value
          //console.log(f)
        }
        /* else
        {
          alert("inside esle")
        } */
      }
      /* console.log("reqdfilters with value")
      console.log(this.reqdfilters); */
    }
    console.log(this.reqdfilters)
    //this.setFilters()
  }

  setFilters()
  {
   // console.log(this.reqdfilters)
    var currentFilter =null
    
    for (let filter of FILTERS)
    { 
      currentFilter=this.reqdfilters.find(f=>f.name==filter.name)
      if(currentFilter)
      {
        currentFilter.hidden=false
        //alert("inside if   "+currentFilter.name+"    "+currentFilter.hidden)
      }
      else
      {
        this.reqdfilters.push(filter);
        //this.reqdfilters.find(f=>f.name==filter.name).hidden=true;
        this.reqdfilters[this.reqdfilters.length-1].hidden=true

        //alert("inside else "+this.reqdfilters[this.reqdfilters.length-1].name+"   "+this.reqdfilters[this.reqdfilters.length-1].hidden)
      }
    }
   // console.log(this.reqdfilters)
   }

  getState()
  {
    this.states=STATES.filter(st=>st.countryDetails.name==this.adCountry);
  }

  getPort()
  {
    this.ports=PORTS.filter(prt=>prt.stateDetails.name==this.adState);
  }


  needLogisticSupport(event){
   // alert(event.checked)
    this.sellLogistic=event.checked
  
  }

  enterValue(valueOfField)
  {
   
    var fltrValue=valueOfField.value
    if(valueOfField.id=="Year")
    {
      fltrValue=fltrValue+" Years"
    }
    var existingFilter=this.filterValues.find(userfilter=>userfilter.name==valueOfField.id)
    if(existingFilter){
      existingFilter.value=fltrValue
    }else{
      this.filterValues.push({name:valueOfField.id,value:fltrValue})
    }
    //this.filterValueId++;
   
  }

  postAd()
  {
    this.checkIfFeatured()
    //basic details for ad
    
    var adID=ADVERTISEMENTS[ADVERTISEMENTS.length-1].id+1;
    var productName=this.adTitle;
    var productDescription=this.adDescription;
    var subCatDetails=SUBCATEGORIES.find(sub=>sub.name==this.adSubCategory);
    var portDetails=PORTS.find(prt=>prt.name==this.adPort);
    var isFeatured=false;
    

    if(this.featuredId)
    {
      console.log("this.chosenPlan")
      console.log(this.chosenPlan)
      isFeatured=true;
      var featuredMapId=FEATURED_ADVERTISEMENT_MAP[FEATURED_ADVERTISEMENT_MAP.length-1].id+1;
      //var endDate=getPlanEndDate();
      FEATURED_ADVERTISEMENT_MAP.push({id:featuredMapId,adId:adID,planDetails:this.chosenPlan,
        startDate:new Date(), endDate:new Date("5/21/2019")})
    }
    var advertisementBasics={id:adID,images:this.adImage, productName:productName, productDescription:productDescription, 
      subCategoryDetails:subCatDetails, portDetails:portDetails,name:this.name,contact:this.contact,date:this.date, 
      isFeatured:isFeatured,isOpen:true}
    //pushing in an ad

    ADVERTISEMENTS.push(advertisementBasics);

    var id=PRODUCTFILTERVALUES[PRODUCTFILTERVALUES.length-1].id+1;

    PRODUCTFILTERVALUES.push({id:id, advertisementDetails:advertisementBasics, filterValues:this.filterValues})
    console.log("PRODUCTFILTERVALUES");
    console.log(PRODUCTFILTERVALUES);

    console.log("FEATURED_ADVERTISEMENT_MAP");
    console.log(FEATURED_ADVERTISEMENT_MAP);

    this.mapLogistics(adID)

    swal({
      title: 'Posted!',
      text: 'Ad Posted Successfully',
      type: 'success',
      confirmButtonText: 'Ok!!'
    }).then((result)=>{
      this.router.navigate(['/advertisements/search']);
      })

  }

  mapLogistics(adID)
  {
    var id;
    if(AD_LOGISTICS_MAPPING)
    {
      id=AD_LOGISTICS_MAPPING[AD_LOGISTICS_MAPPING.length-1].id+1;
    }
    else
    {
      id=1;
    }

    AD_LOGISTICS_MAPPING.push({id:id,adId:adID,logisticIds:[2,3,5]})
  }

  checkIfFeatured()
  {
    if(this.featuredId)
    {
      this.chosenPlan=FEATUREDPLANS.find(plan=>plan.id==this.featuredId)
      this.openCheckout()
      
    }
  }

  openCheckout()
  {
      var amt=this.chosenPlan.amount*100;

      /* if(this.featured==1)
      {
        amt=70000
      }
      else if(this.featured==2)
      {
        amt=250000
      } */

      var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Featured Ad Payment',
      //description: 'Annual subscription',
      amount: amt
    });
  }

  /* getPlanEndDate()
  {
    var startDate=new Date();

  } */

  onUploadFinished(event)
  {
    console.log(event.file);
    var p;
    var canvas = document.createElement("canvas");
    var img1=document.createElement("img"); 

    p=event.file;
    img1.setAttribute('src', p); 
    canvas.width = img1.width; 
    canvas.height = img1.height; 
    var ctx = canvas.getContext("2d"); 
    ctx.drawImage(img1, 0, 0); 
    var dataURL = canvas.toDataURL("image/png");
    console.log(dataURL)
    alert("from getbase64 function"+dataURL );    
    return dataURL;

     /* this.http.post('http://localhost:4200/assets', event.file)
          .subscribe(res => {
            console.log(res);
          }); 

          var reader = new FileReader();

          reader.onload = (event:any) => {
            this.url = event.file;
            alert()
          }
          reader.readAsDataURL(event.file); */
  }

  onRemoved(event)
  {

  }

  onUploadStateChanged(event)
  {

  }

  uploadImg()
  {
    // fileInput is an HTMLInputElement: <input type="file" id="myfileinput" multiple>
    //var fileInput = document.getElementById("adImg");

    // files is a FileList object (similar to NodeList)
    var files = (<HTMLInputElement> document.getElementById("adImg")).files[0];
    
    // object for allowed media types
    var accept = {
      binary : ["image/png", "image/jpeg"],
      text   : ["text/plain", "text/css", "application/xml", "text/html"]
    };

    var file;
    var r=new FileReader();

    var data=r.readAsArrayBuffer(files);
    console.log(r.readAsArrayBuffer(files))
    /* for (var i = 0; i < files.length; i++) {
      file = files[i];
      console.log(file)
      // if file type could be detected
      if (file !== null) {
        if (accept.binary.indexOf(file.type) > -1) {
          alert("as img")
          // file is a binary, which we accept
          //var data = file.getAsBinary();
          var data=r.readAsArrayBuffer(file);
          console.log(r.readAsArrayBuffer(file))
        } else if (accept.text.indexOf(file.type) > -1) {
          alert("as text")
          // file is of type text, which we accept
          //var data = file.getAsText();
          var data=r.readAsArrayBuffer(file);
          console.log(data)
          // modify data with string methods
        }
      }
    } */
    
    
    /* var p;
    var canvas = document.createElement("canvas");
    var img1=document.createElement("img"); 

    
    p=(<HTMLInputElement> document.getElementById("adImg")).value;
    img1.setAttribute('src', p); 
    canvas.width = img1.width; 
    canvas.height = img1.height; 
    var ctx = canvas.getContext("2d"); 
    ctx.drawImage(img1, 0, 0); 
    var dataURL = canvas.toDataURL("image/png");
    console.log(dataURL)
    alert("from getbase64 function"+dataURL );    
    return dataURL; */
  }



  onChangeImg(event)
  {
    var file, img;

    for(let i=0; i<event.target.files.length; i++)
    {
      if ((file = event.target.files[i])) 
      {
        console.log("File", file)
        img = new Image();
        img.onload = function () {
            alert(this.width + " " + this.height);
        };

        var bannerImg = (<HTMLInputElement>document.getElementById('imgBlock'));

        localStorage.setItem("imgURL", this.URL.createObjectURL(file));
        //bannerImg.src = localStorage.getItem('imgURL');
        //(<HTMLInputElement>document.getElementById('showImage')).style.display = 'block';


        var id
        if(IMAGES.length>0)
        {
          id=IMAGES[IMAGES.length-1].id+1;
        }
        else
        {
          id=1;
        }

        this.adImage.push({id:id, name:this.adTitle,path:localStorage.getItem('imgURL'),
        extension:"",description:""})
        
        //IMAGES.push(this.adImage)
        
      }
    }
    
  }
}
