import { Component, OnInit } from '@angular/core';
import { Category, SubCategory, Filter, SubCatFilterMap, Country, State, Port, Advertisement, ProductFilterValue, SubCategoryFilterOption } from '../../classDefinition';
import { CATEGORIES, SUBCATEGORIES, FILTERS, SUBCATFILTERMAP, COUNTRIES, STATES, PORTS, ADVERTISEMENTS, PRODUCTFILTERVALUES, SUBCATFILTEROPTIONS } from '../../application_mock_Data';
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
reqdfilters:any[]=[];
filterSet:any[]=[];
adCountry:string="";
adState:string="";
adPort:string="";

  constructor() { }

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

}
