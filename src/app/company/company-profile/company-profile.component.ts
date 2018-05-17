import { Component, OnInit } from '@angular/core';
import { CompanyDetails,ProfileFields, Review,VerifyCompanyDocument } from '../../classDefinition';
import { DefaultCompany,VERIFYCOMPANYDOCUMENT } from '../../application_mock_Data';

import swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  defaultCompany:CompanyDetails=DefaultCompany;
  profileImgPath : string = "../assets/img/vendor/profile.jpg"
  companyWeb : string = "www.mcships.com"
  currentField:string=""

  verificationField : string =""
  portsCompanyServe :  String [] = ["Singapore","Japan","London","China","Mumbai"]
  
  reviews : Review[] = [
    {id:"1",name:"XYZ",image:"../assets/img/vendor/NoImage.jpg",rating:"4.1/5",comment:"Good Company. Trust Worthy"},
    {id:"2",name:"Abc",image:"../assets/img/vendor/NoImage.jpg",rating:"3.8/5",comment:"Average Company"}
  ]
docVerificationStatus : boolean = false
  constructor() { }

  checkDocVerificationStatus(){
    var count = 0
    var lengthOfDoc = VERIFYCOMPANYDOCUMENT.length
    for(let doc of VERIFYCOMPANYDOCUMENT)
    {
      if(doc.status)
      {
        count++
      }
    }
    if(lengthOfDoc == count)
    this.docVerificationStatus = true;
  }

  setFieldName(fieldName:string){
    
    if(fieldName !='otp'){
      this.verificationField = fieldName
    }
    
    if( this.currentField.toLowerCase().indexOf("otp") > -1){
      this.sendConfirmation(this.verificationField)  
      this.currentField=""    
    }else    
      this.currentField=fieldName
   

  }


  sendConfirmation(fieldName:string){
    

    swal(
      'Submitted!',
      "<b>"+fieldName.toUpperCase()+"</b>" + " Verified",
      'success'
    )

    $('#verificationModal').modal('hide');


    if(fieldName.toLowerCase().indexOf('document') > -1)
    {
      VERIFYCOMPANYDOCUMENT.push({id:1,name:"Passport",status:null})

    }
    else
    {  
        for(let field of this.defaultCompany.profileFields)
        {
          if (field.fieldName.toLowerCase().indexOf(fieldName.toLowerCase()) > -1)
            field.verifyStatus = true;
          
        }
    }
  
}
  

  ngOnInit() {
   // this.defaultVendor=DefaultVendor;
   // this.currentCompany=COMPANY[COMPANY.length-1];
  }

}
