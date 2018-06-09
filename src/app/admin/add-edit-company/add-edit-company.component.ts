import { Component, OnInit , Inject } from '@angular/core';
import {CompanyDetails, Port, State, Country,} from '../../classDefinition'
import {COMPANYDETAILS, PORTS} from '../../application_mock_Data'
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.css']
})
export class AddEditCompanyComponent implements OnInit {


  formdata;
  currentCompany:CompanyDetails={id:null, name:"",  email:"",contact:"",port:null,avg_rating:4,profile_completion_percent:null,profileFields:[]};
  companies:CompanyDetails[]=[];
  idNumeric:number;
  generatedId:string="";
//currentPort:Port=null;
currentPortID:number=0;
currentState:State=null;
currentCountry:Country=null;
  constructor(
    public dialogRef: MatDialogRef<AddEditCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.currentCompany=data.currentCompany
  }

  ngOnInit() {


this.companies=COMPANYDETAILS;
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addEditCompany(name,email,contact){
    alert()
    //alert(this.currentCompany.name);
    //alert(this.data.currentCompany.name);
    if(this.data.currentCompany.name!="")
    {
      this.currentCompany=this.data.currentCompany;
    }
 
    

    if(this.currentCompany.name)
    {
      alert("editing");
      /* alert(this.vessels[this.currentCompany.id-1].name+" is the actual name");
      alert("replacing with "+data.name); */
      
        this.currentCompany.name=name.value;
      
      
        this.currentCompany.email=email.value;
     
        this.currentCompany.contact=contact.value;

        var port=PORTS.find(prt=>prt.id==this.currentPortID)
        this.currentCompany.port=port

        this.currentCompany={id:null, name:"",  email:"",contact:"",port:{id:null,name:"",stateDetails: {id:null,name:"",countryDetails:{id:null,name:""}}}};
      
    }
    else
    {
      alert("adding " + name.value);
      console.log("Country",this.currentCountry);
      console.log("State",this.currentState);
      console.log("Port ID",this.currentPortID);
      var port=PORTS.find(prt=>prt.id==this.currentPortID)
      this.currentCompany={ id: 6, name: name.value, email: email.value, contact: contact.value, port:port};
      this.companies.push(this.currentCompany);
      this.currentCompany={id:null, name:"",  email:"",contact:"",port:{id:null,name:"",stateDetails: {id:null,name:"",countryDetails:{id:null,name:""}}}};
      console.log("Add",this.companies);
      
    }   

    /* console.log(this.currentCompany);
    console.log(this.companies); */
    this.dialogRef.close();
    /* $('#vesselAddEditModal').modal("hide");
    this.modalHideEffects(); */
    //$('#AddEditCompanyForm')[0].reset();
  }


}
