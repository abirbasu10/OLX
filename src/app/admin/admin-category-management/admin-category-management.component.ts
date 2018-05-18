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
currentCategory : Category[] = null
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
    this.currentCategory = cat
    $("#editCatModal").modal('show')
    //this.refreshCategoryTable();
  }

  addCat()
  {
    this.currentCategory = null
    $("#editCatModal").modal('show')
  }

  saveCategory(cat){

    var catName = $("#catEdit").val()
    if(cat)
    {

    }
    else{
      CATEGORIES.push({id:CATEGORIES.length+1,name:catName})
      this.category.push({id:this.category.length+1,name:catName})
      this.refreshCategoryTable()
    }
  }

  refreshCategoryTable(){
    this.catDataSource = new MatTableDataSource(this.getCategories());
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
