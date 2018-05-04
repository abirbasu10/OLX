import { Component, OnInit, Inject } from '@angular/core';
import { EMPLOYEES } from '../comany_mock_data';
import { Employee } from '../company_employee';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Roles } from '../../roles';
import { ROLES } from '../../roles_mock_data';

declare const $: any;

@Component({
  selector: 'app-company-add-edit-employee',
  templateUrl: './company-add-edit-employee.component.html',
  styleUrls: ['./company-add-edit-employee.component.css']
})
export class CompanyAddEditEmployeeComponent implements OnInit {

  formdata;
  currentEmployee:Employee={id:null, name:"", dob:"", designation:"", email:"",contact:"",nationality:"",
  weight:"",height:"",idDocs:"",role:''};
  employees:Employee[]=[];
  idNumeric:number;
  empDesignation:string="";
  empRole:string="";
  roles:Roles[]=[];

  constructor(
    public dialogRef: MatDialogRef<CompanyAddEditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empRole=data.currentEmployee.role
    
    this.empDesignation=data.currentEmployee.designation

    
   }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
   
  ]);

  ngOnInit() {
    this.employees=EMPLOYEES;
    this.roles=ROLES;

    this.formdata = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      designation:new FormControl(""),
      email:new FormControl(""),
      contact:new FormControl("", Validators.compose([
        Validators.required,
        
     ])),
   });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addEditEmployee(data){
    //alert('New vessel'+data.name);
    /* alert("hi");
    alert("id is::: "+this.currentEmployee.id); */
    //alert(this.data.currentEmployee.designation)
    if(this.data.currentEmployee.id)
    {
      this.currentEmployee=this.data.currentEmployee;
    }
    
    if(this.currentEmployee.id)
    {
      //alert("data.name:::  "+data.name);
      //alert("data.designation:::  "+data.designation);
      /* alert("editing");
      alert(this.employees[this.currentEmployee.id-1].name+" is the actual name");
      alert("replacing with "+data.name); */
      //this.editThisEmp=this.employees.filter(e=> e.id === this.currentEmployee.id);
      if(data.name)
        this.currentEmployee.name=data.name;
      if(this.empRole)
        this.currentEmployee.role=this.empRole;
      if(this.empDesignation)
        this.currentEmployee.designation=this.empDesignation;
      if(data.email)
        this.currentEmployee.email=data.email;
      if(data.contact)
        this.currentEmployee.contact=data.contact;
    }
    else
    {
      //alert("adding");
      const generatedId=this.generateId(this.employees);
      this.currentEmployee={ id: generatedId, dob:"", name: data.name,  designation: this.empDesignation,  
        email: data.email, contact:data.contact, nationality:"India",weight:"",height:"",idDocs:"",role:'User'};
  
      this.employees.push(this.currentEmployee);
    }   

    //console.log(this.currentEmployee);
    //console.log(this.employees);
    this.dialogRef.close();
    /* $('#vesselAddEditModal').modal("hide");
    this.modalHideEffects(); */
    $('#AddEditEmployeeForm')[0].reset();
    
  }

  generateId(arrayReceived)
  {
    //const arr=arrayReceived;
    const arrLen=arrayReceived.length-1;
    //alert("arrLen::  "+arrLen);
    const lastID=arrayReceived[arrLen].id;
    //alert("lastID::  "+lastID);
    const idLen=lastID.length;
    //alert("idLen::  "+idLen);
    const stringPart=lastID.substring(0,idLen-3);
    //alert("stringPart::  "+stringPart);
    const numericPart=lastID.substring(idLen-2,idLen);
   // alert("numericPart::  "+numericPart);
    this.idNumeric=+numericPart;
    //alert("idNumeric::  "+this.idNumeric);
    this.idNumeric=this.idNumeric+1;
    //alert("idNumeric after changing::  "+this.idNumeric);
    if(this.idNumeric>0 && this.idNumeric<10)
    {
      const id=stringPart+"00"+this.idNumeric
      //alert("id generated::  "+id);
      return id;
    }      
    else if(this.idNumeric>=10 && this.idNumeric<100)
    {
      const id=stringPart+"0"+this.idNumeric
      //alert("id generated::  "+id);
      return id;
    }
    else{
      const id=stringPart+this.idNumeric
      //alert("id generated::  "+id);
      return id;
    }  
    
  }
  

}
