import { Component, OnInit } from '@angular/core';
import { Category,SubCategory,Advertisement,ProductFilterValue,AdvertisementFilterValue, Image, ImageAdvertisementMap } from '../../classDefinition'
import { CATEGORIES,SUBCATEGORIES,ADVERTISEMENTS,SUBCATFILTERMAP,SUBCATFILTEROPTIONS,PRODUCTFILTERVALUES,IMAGES, IMAGEADVERTISEMENTMAP } from '../../application_mock_Data'
import { DomSanitizer } from '@angular/platform-browser';

declare const $;

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
tempAdvertisements:Advertisement[]=[]
finalAd:Advertisement[]=[]
currentLocation:string="Kolkata Port,WB,India"
currentCategory:Category={id:null,name:""}
currentSubCat:SubCategory={id:null,name:"",categoryDetails:{id:null,name:""}}
searchTerm:string=""
mappedFilters:any[]=[]
tempAd:Advertisement[]=[]
userFilterValues:AdvertisementFilterValue[]=[]
userFiters:any[]=[];

images:Image[]=[];
imgAdMapping:ImageAdvertisementMap[]=[];

  constructor(private _DomSanitizationService: DomSanitizer ) { }

  ngOnInit() {

    this.images=IMAGES;
    this.imgAdMapping=IMAGEADVERTISEMENTMAP;

     var tempLocation=""
    for (let ad of ADVERTISEMENTS){
      tempLocation=ad.portDetails.name+","+ad.portDetails.stateDetails.name+","+ad.portDetails.stateDetails.countryDetails.name
      this.locations.push(tempLocation)
      }

      
    //this.imageUpload()
    }

  /* imageUpload()
  {
    //upload image from local storage and show when searching for ad

    console.log("localStorage",localStorage)
    var bannerImg = document.getElementsByClassName('imgBlock');
    bannerImg.src = localStorage.getItem('imgURL');
    
    
    
  } */

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

/*   loadAdvertisementBySubCategory()
  {
    
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
   this.showFeaturedAdOnTop();
   //this.imageUpload();
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
  else
  {
    this.showFeaturedAdOnTop();
  }
  //this.imageUpload();
  console.log(this.advertisements)
}

 getAdvertiseMentsByFilter(){

  //alert("Get Filters called")
    
   // this.tempAd=this.advertisements
    this.advertisements=[]
    this.tempAdvertisements=[]
    this.finalAd=[]
    var tempLocation=""
    var queryStr=""

var apartFromRangeFlag:boolean=false


    for(let mockAd of PRODUCTFILTERVALUES ){
      tempLocation=mockAd.advertisementDetails.portDetails.name+","+mockAd.advertisementDetails.portDetails.stateDetails.name+","+mockAd.advertisementDetails.portDetails.stateDetails.countryDetails.name
      
      if(mockAd.advertisementDetails.subCategoryDetails.name.toLowerCase()==this.currentSubCat.name.toLowerCase()){
        if(this.currentLocation==tempLocation){
          
          for(let adFiltervalue of mockAd.filterValues){
            
            for(let userFilterValue of this.userFilterValues){
              if((userFilterValue.name.toLowerCase().indexOf('_to')==-1) && (userFilterValue.name.toLowerCase().indexOf('_from')==-1) ){

                apartFromRangeFlag=true
                
                if((adFiltervalue.name.toLowerCase()==userFilterValue.name.toLowerCase()) && (adFiltervalue.value.toLowerCase()==userFilterValue.value.toLowerCase()) ){
                         
                  if(this.advertisements.length == 0 || this.advertisements.filter(ad=>ad.id==mockAd.advertisementDetails.id).length==0)
                  this.advertisements.push(mockAd.advertisementDetails)
                      //  this.advertisements.push(mockAd.advertisementDetails)
                         //this.tempAdvertisements.push(mockAd)
                }
              }
              else{
         

                if(userFilterValue.name.toLowerCase().indexOf('_from')!=-1){
                 var part= userFilterValue.name.substring(0,userFilterValue.name.indexOf("_"))
                var toValueObject =this.userFilterValues.find(f=>f.name==part+"_to")


         
                if( (Number(adFiltervalue.value)>Number(userFilterValue.value)) && (Number(adFiltervalue.value)<Number(toValueObject.value))){
                   // alert(mockAd.advertisementDetails.name)     
                // this.advertisements.push(mockAd.advertisementDetails)
                if(this.tempAdvertisements.length == 0 || this.tempAdvertisements.filter(temp=>temp.id==mockAd.advertisementDetails.id).length==0)
                this.tempAdvertisements.push(mockAd.advertisementDetails)
                //this.tempAdvertisements.push(mockAd.advertisementDetails)

                 }
                }
              }

              
            }


           
          }
          

        }
      }
     
          

    }  
   /*   console.log("Ad...")
    console.log(this.advertisements)

    console.log("Temp...")
    console.log(this.tempAdvertisements)  */

    var t;
    if(this.advertisements.length >0 && this.tempAdvertisements.length >0){
    if (this.advertisements.length > this.tempAdvertisements.length) t = this.advertisements, this.advertisements = this.tempAdvertisements, this.tempAdvertisements = t; 

    for(let i of this.tempAdvertisements){
      for(let j of this.advertisements){
        if (i.id==j.id){
          console.log("Common found "+j.id)
          if(this.finalAd.length == 0 || this.finalAd.filter(fin=>fin.id==j.id).length==0)
            this.finalAd.push(j)
        }
      }
    }
  }else if(this.advertisements.length==0 && apartFromRangeFlag){
    this.finalAd=[]
  }
  else if (this.advertisements.length >0){
    this.finalAd=this.advertisements
  }else{
    this.finalAd=this.tempAdvertisements
  }
  this.advertisements=this.finalAd;
  console.log("FINAL...........")
  console.log(this.finalAd)
  this.showFeaturedAdOnTop();
  //this.imageUpload();
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
    //this.imageUpload();
  }


 showFeaturedAdOnTop()
 {
   /* sorts array elements: here sorts the ads based on isFeatured. Featured ads are shown on top
   follwed by normal ads */

   /* can be sorted based on more than one parameter. For eg. if necessary can sort based on 
   isFeatured and date (date of posting the ad). In that case the if statement would be
   if ( ad1.isFeatured < ad2.isFeatured && ad1.date < ad2.date)
   */

    this.advertisements.sort( function(ad1, ad2) {
      if ( ad1.isFeatured < ad2.isFeatured){
        return 1;/* sorts in descending order so that true comes before false. For ascending return -1 */
      }else if( ad1.isFeatured > ad2.isFeatured){
          return -1; /* sorts in descending order so that true comes before false. For ascending return 1*/
      }else{
        return 0;	
      }
    });
  }

}
