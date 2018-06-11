import { Component, OnInit } from '@angular/core';

import {Category,SubCategory,SubCatFilterMap,Filter,SubCategoryFilterOption} from '../../classDefinition'

import {CATEGORIES,SUBCATEGORIES,SUBCATFILTERMAP,FILTERS,SUBCATFILTEROPTIONS} from '../../application_mock_Data'

declare const $;
@Component({
  selector: 'app-filter-management',
  templateUrl: './filter-management.component.html',
  styleUrls: ['./filter-management.component.css']
})
export class FilterManagementComponent implements OnInit {

  category:Category[]=CATEGORIES
  subCategory : SubCategory[]=SUBCATEGORIES

  subCatsByCat : SubCategory[] = null;

  currentFilterId : number;

  currentSubCat : any;
  //filtersBySubCat : Filter[] = null;
  filtersBySubCat : any[] = [];
  addFilter : boolean = false;

  extraInfo : boolean = false;

  addDropdown : boolean = false;

  //editDropdown : boolean = false;

  currentDropdownVal : string = null;

  listOfDropdownVal : any [] = [];
  currentSubCatId:number=0

  editFilterVal : any[] = [];

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

  editDropdownVal(filterId){
    //this.editDropdown = true;
    this.currentFilterId = filterId
    var i = 0
    var value = SUBCATFILTEROPTIONS.find(sCat => sCat.subCategoryDetails.id == this.currentSubCatId).subCatFilterValues.find(sFil => sFil.filterDetails.id == this.currentFilterId).value
    
    this.editFilterVal = value
  
    $("#editDropdownModal").modal('show')
  }

  addEditedDropdownValue(){
    this.editFilterVal.push("")    
  }

  deleteFilterVal(filterValIndex)
  {
    this.editFilterVal.splice(filterValIndex,1)
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
    this.getFiltersBySubCat(this.currentSubCat)

    this.filterName = null
    this.filterDesc = null
    this.filterType = null
    this.filterAddType = null
    this.extraInfo = false
    
    this.addDropdown = false

    this.listOfDropdownVal = []

    this.closeFilter()
  
    console.log("SUBCATFILTEROPTIONS",SUBCATFILTEROPTIONS)
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

  saveEditedDropdownVal(){
    
    var value = []
    
    for (var i = 0, len = this.editFilterVal.length; i < len; i++) {
    console.log("Val",$("#editDropdownVal"+(i+1)).val())
    if($("#editDropdownVal"+(i+1)).val())
    value.push($("#editDropdownVal"+(i+1)).val())
    }
    
    SUBCATFILTEROPTIONS.find(sCat => sCat.subCategoryDetails.id == this.currentSubCatId).subCatFilterValues.find(sFil => sFil.filterDetails.id == this.currentFilterId).value = value
    console.log("After Adding",SUBCATFILTEROPTIONS)
    this.getFiltersBySubCat(this.currentSubCat)
    $("#editDropdownModal").modal('hide')
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
    this.filtersBySubCat = []
    this.currentSubCat = event;
    var subCatId = event.value;
    this.currentSubCatId=subCatId 
    var filterVal = SUBCATFILTEROPTIONS.find(filter => filter.subCategoryDetails.id == subCatId ).subCatFilterValues
    //this.filtersBySubCat = SUBCATFILTERMAP.find(filter => filter.subCategoryDetails.id == subCatId ).filterDetails
    //this.filtersBySubCat = SUBCATFILTEROPTIONS.find(filter => filter.subCategoryDetails.id == subCatId ).subCatFilterValues
    for(let val of filterVal){
    //console.log(" Filter are",val.filterDetails)
  //    console.log(" Filter Vals are",val.value)
      this.filtersBySubCat.push({'details':val.filterDetails,'values':val.value})
    }
    console.log("Filters are : ", this.filtersBySubCat)
    
  }


}
