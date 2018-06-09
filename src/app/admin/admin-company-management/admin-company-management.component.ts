import { Component, OnInit, Input } from '@angular/core';
import {CompanyDetails,Port,State,Country} from '../../classDefinition'
import {COMPANYDETAILS,PORTS,STATES,COUNTRIES} from '../../application_mock_Data'
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import swal from 'sweetalert2';

import { AddEditCompanyComponent } from '../add-edit-company/add-edit-company.component';

declare const $: any;

@Component({
  selector: 'app-admin-company-management',
  templateUrl: './admin-company-management.component.html',
  styleUrls: ['./admin-company-management.component.css']
})
export class AdminCompanyManagementComponent implements OnInit {

  @Input() companies: CompanyDetails[];

  //companies:Company[];
  searchTerm:string="";
  search_company:CompanyDetails[]=[];
  currentCompany:CompanyDetails={id:null, name:"",  email:"",contact:"",port:{id:null,name:"",stateDetails: {id:null,name:"",countryDetails:{id:null,name:""}}}};
  allPorts:Port[]=PORTS
  allStates:State[]=STATES
  allCountries:Country[]=COUNTRIES
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.companies=COMPANYDETAILS;
  }

  searchCompany(event)
  {
    
    this.searchTerm=event.target.value;
    if(this.searchTerm.length>0)
    {
      for (let company of COMPANYDETAILS) 
      {
        if(company.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)
        {
          this.search_company.push(company);
        }
      }
      this.companies=this.search_company;
      this.search_company=[];
    }
    else if(this.searchTerm.length==0)
    {
      this.companies=COMPANYDETAILS;
    }   
    
  }

  setCurrentCompany(comp :CompanyDetails){
    this.currentCompany=comp;
    this.openDialog();
    this.currentCompany={id:null, name:"",  email:"",contact:"",port:{id:null,name:"",stateDetails: {id:null,name:"",countryDetails:{id:null,name:""}}}};
  
  }



  openDialog(): void {
    console.log(this.currentCompany);
    let dialogRef = this.dialog.open(AddEditCompanyComponent, {
      width: '500px',
      data: { currentCompany: this.currentCompany,ports:this.allPorts,states:this.allStates,countries:this.allCountries }
    });

    /* dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result=this.addEditVessel();
    }); */
    
  }



   deleteCompany(comp:CompanyDetails )
  {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    if (result.value) 
    {
      this.companies=this.companies.filter(c=>c!=comp);
      swal(
        'Deleted!',
        'Company has been deleted.',
        'success'
      )
    }
    })    
    
  } 
}
