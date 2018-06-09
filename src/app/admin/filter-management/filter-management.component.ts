import { Component, OnInit } from '@angular/core';

import {Category,SubCategory,SubCatFilterMap,Filter,SubCategoryFilterOption} from '../../classDefinition'

import {CATEGORIES,SUBCATEGORIES,SUBCATFILTERMAP,FILTERS,SUBCATFILTEROPTIONS} from '../../application_mock_Data'

@Component({
  selector: 'app-filter-management',
  templateUrl: './filter-management.component.html',
  styleUrls: ['./filter-management.component.css']
})
export class FilterManagementComponent implements OnInit {

  category:Category[]=CATEGORIES
  subCategory : SubCategory[]=SUBCATEGORIES

  subCatsByCat : SubCategory[] = null;

  filtersBySubCat : Filter[] = null;

  addFilter : boolean = false;

  extraInfo : boolean = false;

  addDropdown : boolean = false;

  currentDropdownVal : string = null;

  listOfDropdownVal : any [] = [];
  currentSubCatId:number=0

  filterName : string = ""
  filterDesc : string = ""
  filterType : string = ""
  filterAddType : string = ""
  constructor() { }

  ngOnInit() {
    
  }

  checkExtraInfo(){
    this.extraInfo = ! this.extraInfo
  }
  checkAddFilter(){
    this.addFilter = true;
  }

  closeFilter(){
    this.addFilter = false;
  }

  saveFilter()
  {
    
    FILTERS.push({  id:FILTERS.length+1,name:this.filterName,description:this.filterDesc,type:this.filterType,addType:this.filterAddType,extraInfo:this.extraInfo})
    var filterForCurrentSubCat=SUBCATFILTERMAP.find(sCat => sCat.subCategoryDetails.id==this.currentSubCatId)
      
    SUBCATFILTERMAP.find(sCat => sCat.subCategoryDetails.id==this.currentSubCatId) .filterDetails.push({  id:filterForCurrentSubCat.filterDetails.length+1,name:this.filterName,description:this.filterDesc,type:this.filterType,addType:this.filterAddType,extraInfo:this.extraInfo})
  
   var filterOptForCurrentSubCat = SUBCATFILTEROPTIONS.find(sCat => sCat.subCategoryDetails.id==this.currentSubCatId).subCatFilterValues
    
    SUBCATFILTEROPTIONS.find(sCat => sCat.subCategoryDetails.id==this.currentSubCatId).subCatFilterValues.push
    (
      {id:filterOptForCurrentSubCat.length+1,filterDetails: {  id:filterForCurrentSubCat.filterDetails.length+1,name:this.filterName,description:this.filterDesc,type:this.filterType,addType:this.filterAddType,extraInfo:this.extraInfo},value:this.listOfDropdownVal},
    )

    this.filterName = null
    this.filterDesc = null
    this.filterType = null
    this.filterAddType = null
    this.extraInfo = false
    
    this.addDropdown = false

    this.listOfDropdownVal = []

    this.closeFilter()
    
  }

  onChangeFilterType(event){
    var filterTypeName = event.value
    if(filterTypeName.toString().toLowerCase() == "dropdown" )
    {
      this.addDropdown = true;
    }
    else{
      this.addDropdown = false;
    }

  }

  addDropdownValue(){
    this.listOfDropdownVal.push(this.currentDropdownVal);
    this.currentDropdownVal = null;
    console.log ("Val Of Dropdown", this.listOfDropdownVal)
  }
  getSubCatByCat(event)
  {
    var catId = event.value;
    

    this.subCatsByCat = SUBCATEGORIES.filter(sCat => sCat.categoryDetails.id == catId)

    console.log("Sub-Cat are : ",this.subCatsByCat)

  }

  getFiltersBySubCat(event)
  {
    var subCatId = event.value;
    this.currentSubCatId=subCatId 
    this.filtersBySubCat = SUBCATFILTERMAP.find(filter => filter.subCategoryDetails.id == subCatId ).filterDetails

    console.log("Filters are : ", this.filtersBySubCat)

  }


}
