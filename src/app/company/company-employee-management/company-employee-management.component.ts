import { Component, OnInit, Input } from '@angular/core';
import { EMPLOYEES } from '../comany_mock_data';
import { Employee } from '../company_employee';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompanyAddEditEmployeeComponent } from '../company-add-edit-employee/company-add-edit-employee.component';
import { Roles } from '../../roles';
import { ROLES } from '../../roles_mock_data';

import swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-company-employee-management',
  templateUrl: './company-employee-management.component.html',
  styleUrls: ['./company-employee-management.component.scss']
})
export class CompanyEmployeeManagementComponent implements OnInit {

  @Input() employees:Employee[];

  formdata;
  //editThisEmp:Employee[];
  searchTerm:string="";
  search_employee: Employee[]=[];

  currentEmployee:Employee={id:null, name:"", dob:"", designation:"", email:"",contact:"",nationality:"",
  weight:"",height:"",idDocs:"",role:''};

  
  designations:string[]=["Fresher", "Intern", "CEO", "Captain", "Second Officer", "Second Engineer", "Cadet", "Chief Engineer","Chief Cook"];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.employees=EMPLOYEES;
  }


  openDialog()
  {
    let dialogRef = this.dialog.open(CompanyAddEditEmployeeComponent, {
      width: '500px',
      data: { designations:this.designations, currentEmployee: this.currentEmployee }
    });

    /* dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result=this.addEditVessel();
    }); */
  }

  searchEmployee(event)
  {
    this.searchTerm=event.target.value;
    if(this.searchTerm.length>0)
    {
      for (let employee of EMPLOYEES) 
      {
        if(employee.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)
        {
          this.search_employee.push(employee);
        }
        if(employee.designation.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)
        {
          this.search_employee.push(employee);
        }
      }
      this.employees=this.search_employee;
      this.search_employee=[];
    }
    else if(this.searchTerm.length==0)
    {
      this.employees=EMPLOYEES;
    }   
    
  }
  setCurrentEmployee(emp :Employee){
    //alert("emp name :"+emp.name); 
 
   this.currentEmployee=emp;
   this.openDialog();
   this.currentEmployee={id:null, name:"", dob:"", designation:"", email:"",contact:"",nationality:"",
  weight:"",height:"",idDocs:"",role:''};
   //alert("id is::: "+this.currentEmployee.id);
   //this.editVessel();
 }

 
deleteEmployee(employee)
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
    this.employees = this.employees.filter(emp => emp !== employee);
    swal(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
  })
  
}

modalHideEffects()
{
 // alert("hi");
  this.currentEmployee={id:null, name:"", dob:"", designation:"", email:"",contact:"",nationality:"",
  weight:"",height:"",idDocs:"",role:''};
 // alert(this.currentEmployee.id);
  $('#AddEditForm')[0].reset();
}

}
