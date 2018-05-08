import { Component, OnInit } from '@angular/core';
import { Category,SubCategory,Advertisement } from '../../classDefinition'
import { CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS } from '../../application_mock_Data'

@Component({ 
  selector: 'app-advertisement-managment',
  templateUrl: './advertisement-managment.component.html',
  styleUrls: ['./advertisement-managment.component.css']
})
export class AdvertisementManagmentComponent implements OnInit {
  locations:string[]=[]
  categories:Category[]=CATEGORIES
subCatgories:SubCategory[]=[]
advertisements:Advertisement[]=[]
currentLocation:string=""
currentCategory:Category={id:null,name:""}
currentSubCat:SubCategory={id:null,name:"",categoryDetails:{id:null,name:""}}
  constructor() { }

  ngOnInit() {

     var tempLocation=""
    for (let ad of ADVERTISEMENTS){
      tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
      this.locations.push(tempLocation)
      }

      
    }

  
  generateSubCategory(cat:Category,catId:number){
    this.currentCategory=cat
    this.subCatgories=[]
        for(let subCat of SUBCATEGORIES){
          if(subCat.categoryDetails.id==catId){        
            this.subCatgories.push(subCat)
          }
        }
  }


  setCurrentSubCategory(subCat:SubCategory){
    this.currentSubCat=subCat
 
    this.loadAdvertisementBySubCategory()
  }

  loadAdvertisementBySubCategory(){
    
    this.advertisements=[]
    var tempLocation=""
    for (let ad of ADVERTISEMENTS){
      if(ad.subCategoryDetails.id==this.currentSubCat.id){
        
        tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
      
      if(this.currentLocation.toLowerCase()==tempLocation.toLowerCase()){
       
          this.advertisements.push(ad)
          
      }
      }
    }
    
  }

  loadAdvertisementsBySearchTerm(event){
    this.advertisements=[]
   var tempLocation=""

   if(this.currentLocation.length){
     
    for (let ad of ADVERTISEMENTS){
      tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
      
      if(this.currentLocation.toLowerCase()==tempLocation.toLowerCase()){
          
          if((ad.productName.toLowerCase().indexOf(event.target.value.toLowerCase())!= -1)||(ad.subCategoryDetails.name.toLowerCase().indexOf(event.target.value.toLowerCase())!= -1) || (ad.subCategoryDetails.categoryDetails.name.toLowerCase().indexOf(event.target.value.toLowerCase())!= -1)){        
            this.advertisements.push(ad)
        }
        }
       
    }   
  }else{
    for (let ad of ADVERTISEMENTS){
        
          if((ad.productName.toLowerCase().indexOf(event.target.value.toLowerCase())!= -1)||(ad.subCategoryDetails.name.toLowerCase().indexOf(event.target.value.toLowerCase())!= -1) || (ad.subCategoryDetails.categoryDetails.name.toLowerCase().indexOf(event.target.value.toLowerCase())!= -1)){        
            this.advertisements.push(ad)
        }
        
      
    }
  }
    

if(event.target.value.length==0){
  
  this.advertisements=[]
}

  }


}
