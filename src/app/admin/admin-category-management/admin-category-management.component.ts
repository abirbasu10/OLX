import { Component, OnInit } from '@angular/core';

import {Category,SubCategory} from '../../classDefinition'

import {CATEGORIES,SUBCATEGORIES} from '../../application_mock_Data'

import {MatTableDataSource} from '@angular/material';

declare const $;
@Component({
  selector: 'app-admin-category-management',
  templateUrl: './admin-category-management.component.html',
  styleUrls: ['./admin-category-management.component.css']
})
export class AdminCategoryManagementComponent implements OnInit {

  totalNoOfCategories : number = 0
  totalNoOfSubCategories : number = 0
category:Category[]=CATEGORIES
subCategory : SubCategory[]=SUBCATEGORIES
currentCategory : Category = null
catOfSubCat : number = null
currentSubCat : SubCategory = null
 // allSubCatByCat : any[]
  
  constructor() { }

  getSubCatByCat(){
    var subcatArr = []
    for( let cat of this.category )
    {
      for(let sub of SUBCATEGORIES)
      {
       if(cat.id == sub.categoryDetails.id)
       {
         subcatArr.push({catId:cat.id,catName:cat.name,subCatId:sub.id,subCatName:sub.name})
       }
      }
    }
    console.log("Array is : ",subcatArr)

    return subcatArr
  }

  getCategories(){
    var catArr = []
    for( let cat of this.category )
    {
      
         catArr.push({catId:cat.id,catName:cat.name})
       
      
    }
    console.log("Array is : ",catArr)

    return catArr
  }

  displayedSubCatColumns = ['Sub-Category', 'Category', 'Edit','Delete'];
  subCatDataSource = new MatTableDataSource(this.getSubCatByCat());

  displayedCatColumns = ['Category-Name', 'Edit','Delete'];
  catDataSource = new MatTableDataSource(this.getCategories());

  editCat(cat)
  {
    console.log(cat)
    this.currentCategory = CATEGORIES.find(ct=>ct.name==cat.catName);
    console.log("this.currentCategory from edit: ",this.currentCategory)
    $("#catEditModal").modal('show')
    $("#catEdit").val(cat.catName)
    //this.refreshCategoryTable();
  }

  addCat()
  {
    this.currentCategory = null
    $("#catEditModal").modal('show')
  }

  addSubCat(){
    this.currentSubCat = null
    $("#subCatEditModal").modal('show')
  }

  saveCategory(cat){

    console.log(cat)
    var catName = $("#catEdit").val()
    alert("catName: "+catName)
    if(cat)
    {
      alert("1st  "+cat.name)
      //During edit
      this.currentCategory.name=catName;

      alert("2nt  "+cat.name)
    }
    else{
      //During Add
      this.category.push({id:this.category.length+1,name:catName})
    }
    console.log("this.currentCategory after saving",this.currentCategory)
    this.refreshCategoryTable()
  }

  refreshCategoryTable(){
    this.catDataSource = new MatTableDataSource(this.getCategories());
  }
  refreshSubCategoryTable(){
    this.subCatDataSource = new MatTableDataSource(this.getSubCatByCat());
  }
  saveSubCategory(subCat){
    var catId = $("#catofSubCat").val();
    alert("catId:  "+catId)
    var subCatName = $("#subCatVal").val();    
    //console.log("vc",this.catOfSubCat)
    
    if(subCat){
      console.log("finding",CATEGORIES.find(ct=>ct.id == catId))
      this.currentSubCat.categoryDetails = CATEGORIES.find(ct=>ct.id == catId);
      this.currentSubCat.name = subCatName
    }
    else{
    var cat=CATEGORIES.find(ct=>ct.id==this.catOfSubCat)
    var id=this.subCategory[this.subCategory.length-1].id+1;
    this.subCategory.push({id:id, name:subCatName, categoryDetails:cat})
    }
    console.log("this.subCategory after adding ",this.subCategory)
    this.refreshSubCategoryTable()
  }

  editCatSubCat(subCatId)
  {
    $("#subCatEditModal").modal("show")
    this.currentSubCat=SUBCATEGORIES.find(sCat => sCat.id == subCatId)
    $("#subCatVal").val(this.currentSubCat.name)
    $("#catofSubCat").val(this.currentSubCat.categoryDetails.id)
  }

  delCat(catId){    
    this.category=this.category.filter(cat => cat.id != catId)
    this.refreshCategoryTable()
  }

  ngOnInit() {
    this.totalNoOfCategories = CATEGORIES.length
    this.totalNoOfSubCategories = SUBCATEGORIES.length
  //  this.allSubCatByCat = this.getSubCatByCat()
        
  }

}
