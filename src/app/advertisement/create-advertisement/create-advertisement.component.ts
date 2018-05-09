import { Component, OnInit } from '@angular/core';
import { Category, SubCategory, Filter, SubCatFilterMap, Country, State, Port, Advertisement,AdvertisementFilterValue, ProductFilterValue, SubCategoryFilterOption } from '../../classDefinition';
import { CATEGORIES, SUBCATEGORIES, FILTERS, SUBCATFILTERMAP, COUNTRIES, STATES, PORTS, ADVERTISEMENTS, PRODUCTFILTERVALUES, SUBCATFILTEROPTIONS } from '../../application_mock_Data';

import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {
loginStatus:string="true"
categories:Category[]=[];
subcategories:Category[]=[];
countries:Country[]=[];
states:State[]=[];
ports:Port[]=[];
filters:Filter[]=[];


adTitle:string;
adCategory:string="";
adSubCategory:string="";
adDescription:string="";
reqdfilters:any[]=[];
filterSet:any[]=[];
adCountry:string="";
adState:string="";
adPort:string="";
name:string="";
contact:number;
date: Date=new Date();
filterValueId:number=1;

advertisementDetails:Advertisement;
filterValues:AdvertisementFilterValue[]=[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkLogInOrNot()
    this.categories=CATEGORIES;
    this.countries=COUNTRIES;

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


  enterValue(valueOfField)
  {
   
    var fltrValue=valueOfField.value
    if(valueOfField.id=="Year-Range")
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
    //basic details for ad

    var adID=ADVERTISEMENTS[ADVERTISEMENTS.length-1].id+1;
    var productName=this.adTitle;
    var productDescription=this.adDescription;
    var subCatDetails=SUBCATEGORIES.find(sub=>sub.name==this.adSubCategory);
    var portDetails=PORTS.find(prt=>prt.name==this.adPort);
  
    var advertisementBasics={id:adID, productName:productName, productDescription:productDescription, 
      subCategoryDetails:subCatDetails, portDetails:portDetails,name:this.name,contact:this.contact,date:this.date}


    //pushing in an ad

    ADVERTISEMENTS.push(advertisementBasics);

    var id=PRODUCTFILTERVALUES[PRODUCTFILTERVALUES.length-1].id+1;

    PRODUCTFILTERVALUES.push({id:id, advertisementDetails:advertisementBasics, filterValues:this.filterValues})
    console.log("PRODUCTFILTERVALUES");
    console.log(PRODUCTFILTERVALUES);

    swal({
      title: 'Posted!',
      text: 'Ad Posted Successfully',
      type: 'success',
      confirmButtonText: 'Ok!!'
    }).then((result)=>{
      this.router.navigate(['/advertisements/search']);
      })

  }

}
