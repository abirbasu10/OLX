import { Component, OnInit } from '@angular/core';
import { Category,SubCategory,Advertisement,ProductFilterValue,AdvertisementFilterValue } from '../../classDefinition'
import { CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS,SUBCATFILTERMAP,SUBCATFILTEROPTIONS,PRODUCTFILTERVALUES } from '../../application_mock_Data'

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
tempAdvertisements:ProductFilterValue[]=[]
currentLocation:string="Kolkata Port,WB,India"
currentCategory:Category={id:null,name:""}
currentSubCat:SubCategory={id:null,name:"",categoryDetails:{id:null,name:""}}
searchTerm:string=""
mappedFilters:any[]=[]
tempAd:Advertisement[]=[]
userFilterValues:AdvertisementFilterValue[]=[]
userFiters:any[]=[]
  constructor() { }

  ngOnInit() {

     var tempLocation=""
    for (let ad of ADVERTISEMENTS){
      tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
      this.locations.push(tempLocation)
      }

      
    }
changeLocation(){
  if(this.searchTerm)
    //this.loadAdvertisementsBySearchTerm()
    this.getAdvertisementsBySearchTerm()
  else
  //this.loadAdvertisementBySubCategory()
  this.getAdvertisementsBySubCategory()
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
 this.getFilters()
  //  this.loadAdvertisementBySubCategory()
    this.getAdvertisementsBySubCategory()
  }

/*   loadAdvertisementBySubCategory(){
    
    this.advertisements=[]
    var tempLocation=""
    for (let ad of ADVERTISEMENTS){
      if(ad.subCategoryDetails.id==this.currentSubCat.id){
        
        tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
      
      if(this.currentLocation.toLowerCase()==tempLocation.toLowerCase()){
       
        if((ad.productName.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)||(ad.subCategoryDetails.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1) || (ad.subCategoryDetails.categoryDetails.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)){        
         
          this.advertisements.push(ad)
      }
          
      }
      }
    }
    
  } */
  
/*   loadAdvertisementsBySearchTerm(){
    this.advertisements=[]
   var tempLocation=""

   
     
    for (let ad of PRODUCTFILTERVALUES){
      tempLocation=ad.advertisementDetails.portDetails.name+","+ad.advertisementDetails.portDetails.stateDetails.name+","+ad.advertisementDetails.portDetails.stateDetails.countryDetails.name
      
      if(this.currentLocation.toLowerCase()==tempLocation.toLowerCase()){
          
          if((ad.advertisementDetails.productName.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)||(ad.advertisementDetails.subCategoryDetails.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1) || (ad.advertisementDetails.subCategoryDetails.categoryDetails.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)){        
            if(this.userFilterValues.length >0){
            for(let adFiltervalue of ad.filterValues){
              
                for(let userFilterValue of this.userFilterValues){
                  if((adFiltervalue.name.toLowerCase()==userFilterValue.name.toLowerCase()) && (adFiltervalue.value.toLowerCase()==userFilterValue.value.toLowerCase()) ){
                  //  alert("filterValue Matched")
                  //  alert("Ad filter:"+adFiltervalue.name+"  Ad filter Value"+adFiltervalue.value)
                  //  alert("User filter:"+userFilterValue.name+" User filter Value"+userFilterValue.value)
                    this.advertisements.push(ad.advertisementDetails)
                  }
                }
              }
              

            }else{
              this.advertisements.push(ad.advertisementDetails)
            }
            
        }
        }
       
    }   
  

console.log(this.advertisements)
  } */


  getFilters()
  {

    this.mappedFilters=[];
    
    var subcatFilterMap =null
    subcatFilterMap=SUBCATFILTERMAP.find(subc=>subc.subCategoryDetails.name.toLowerCase()==this.currentSubCat.name.toLocaleLowerCase());
    
    this.mappedFilters=subcatFilterMap.filterDetails;
   
    var filterValues;
    var subcatFilterOptions=SUBCATFILTEROPTIONS.find(subc=>subc.subCategoryDetails.name.toLowerCase()==this.currentSubCat.name.toLocaleLowerCase())
    if(subcatFilterOptions)
    {
      for(let f of this.mappedFilters)
      {

        filterValues=subcatFilterOptions.subCatFilterValues.find(flt=>flt.filterDetails.name==f.name)
        
        if(filterValues)
        {
          
          f.values=filterValues.value
          
        }
      
      }
    
    }
    
    
  }

 getAdvertisementsBySubCategory(){
  //alert("getAdvertisementsBySubCategory")
var tempLocation
   if(this.advertisements.length){
        this.tempAd=this.advertisements
        this.advertisements=[]
          for(let ad of this.tempAd){
tempLocation=""
            tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
            if( this.currentLocation.toLowerCase()==tempLocation.toLowerCase()){            
              if(ad.subCategoryDetails.id==this.currentSubCat.id){                
              this.advertisements.push(ad)
              }
              
            }
          }
   }else{
          for(let ad of ADVERTISEMENTS){
            tempLocation=""
            tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
            if( this.currentLocation.toLowerCase()==tempLocation.toLowerCase() ){
              if(ad.subCategoryDetails.id==this.currentSubCat.id){                
              this.advertisements.push(ad)
              }
              
            }
          }

   }

   console.log(this.advertisements)
 }

 getAdvertisementsBySearchTerm(){
  // alert("getAdvertisementsBySearchTerm")
   var tempLocation=''
  if(this.advertisements.length){
       this.tempAd=this.advertisements
       this.advertisements=[]
         for(let ad of this.tempAd){
          tempLocation=''
          tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
          if( this.currentLocation.toLowerCase()==tempLocation.toLowerCase() ){
          
          if((ad.productName.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)||(ad.subCategoryDetails.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1) || (ad.subCategoryDetails.categoryDetails.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)){        
            
            this.advertisements.push(ad)
           }
         }
        }
  }else{
         for(let ad of ADVERTISEMENTS){
          tempLocation=''
          tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
          if( this.currentLocation.toLowerCase()==tempLocation.toLowerCase() ){
          
          if((ad.productName.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)||(ad.subCategoryDetails.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1) || (ad.subCategoryDetails.categoryDetails.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)){        
            
            this.advertisements.push(ad)
           }
         }
        }

  }

  if(this.searchTerm.length==0){  
    this.getAdvertisementsBySubCategory()
  }
  console.log(this.advertisements)
}

 getAdvertiseMentsByFilter(){

  //alert("Get Filters called")
    
   // this.tempAd=this.advertisements
    this.advertisements=[]
    var tempLocation=""
    var queryStr=""



    if(this.tempAdvertisements.length<=0){
      
      this.tempAdvertisements=PRODUCTFILTERVALUES;
    }

    for(let mockAd of this.tempAdvertisements ){
      tempLocation=mockAd.advertisementDetails.portDetails.name+","+mockAd.advertisementDetails.portDetails.stateDetails.name+","+mockAd.advertisementDetails.portDetails.stateDetails.countryDetails.name
      
      if(mockAd.advertisementDetails.subCategoryDetails.name.toLowerCase()==this.currentSubCat.name.toLowerCase()){
        if(this.currentLocation==tempLocation){
          
          for(let adFiltervalue of mockAd.filterValues){
            
            for(let userFilterValue of this.userFilterValues){
              if((userFilterValue.name.toLowerCase().indexOf('_to')==-1) && (userFilterValue.name.toLowerCase().indexOf('_from')==-1) ){
                
                if((adFiltervalue.name.toLowerCase()==userFilterValue.name.toLowerCase()) && (adFiltervalue.value.toLowerCase()==userFilterValue.value.toLowerCase()) ){
                         
                  if(!this.advertisements.find(ad=>ad.id==mockAd.advertisementDetails.id)){
                    this.advertisements.push(mockAd.advertisementDetails)
                  }
                }
              }
              else{
         

                if(userFilterValue.name.toLowerCase().indexOf('_from')!=-1){
                 var part= userFilterValue.name.substring(0,userFilterValue.name.indexOf("_"))
                var toValueObject =this.userFilterValues.find(f=>f.name==part+"_to")

         
                if( (adFiltervalue.value.toLowerCase().localeCompare(userFilterValue.value.toLowerCase())==1)  && (adFiltervalue.value.toLowerCase().localeCompare(toValueObject.value.toLowerCase())==-1)){
                    alert(mockAd.advertisementDetails.name)     
                    if(!this.advertisements.find(ad=>ad.id==mockAd.advertisementDetails.id)){
                      this.advertisements.push(mockAd.advertisementDetails)
                    }
                 }
                }
              }

              
            }


           
          }
          

        }
      }
     
          

    }  

    
    console.log(this.tempAdvertisements)
  
}

      
    

  submitFilterValues(valueOfField){

    var existingFilter=this.userFilterValues.find(userfilter=>userfilter.name==valueOfField.id)
    if(existingFilter){
      existingFilter.value=valueOfField.value
    }else{
      this.userFilterValues.push({name:valueOfField.id,value:valueOfField.value})
    }
    
    console.log(this.userFilterValues)
    //this.loadAdvertisementsBySearchTerm()
    this.getAdvertiseMentsByFilter()
  }

}
