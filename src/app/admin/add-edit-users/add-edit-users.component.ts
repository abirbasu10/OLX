import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {USERS,ROLES} from '../../application_mock_Data'
import {User,Roles} from '../../classDefinition'

declare const $: any;

@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.css']
})
export class AddEditUsersComponent implements OnInit {
  formdata;

  currentUser:User={id:null, name:"", email:"",contact:"",role:""};

  users:User[]=[];
  idNumeric:number;
  userDesignation:string="";
  userRole:string="";
  roles:Roles[]=[];
currentData:any
  constructor(
    public dialogRef: MatDialogRef<AddEditUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.currentData=data
      this.users=data.currentUserList;
   }

  ngOnInit() {
    /* console.log("current User from previous")
    console.log(this.data.currentUser) */
     
    /* this.users=USERS; */
    this.roles=ROLES;
    this.userRole=this.currentData.currentUser.role
    this.userDesignation=this.currentData.currentUser.designation
    this.formdata = new FormGroup({
      id: new FormControl(),
      name: new FormControl(""),
      company: new FormControl(""),
      designation:new FormControl(""),
      email:new FormControl(),
      contact:new FormControl(),
   });

   /* console.log("current User")
   console.log(this.currentUser)
   console.log("form data")
   console.log(this.data) */
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.formdata.reset()
    /* this.currentUser={id:null, name:"", company:"", designation:"", email:"",contact:"",nationality:"",role:""};
    this.data.currentUser={id:null, name:"", company:"", designation:"", email:"",contact:"",nationality:"",role:""};
    console.log("current User from previous")
    console.log(this.data.currentUser)
    console.log("current User")
    console.log(this.currentUser)
    console.log("form data")
    console.log(this.data) */
  }

  addEditUser(dataFromForm){
    /* console.log("current User from previous")
    console.log(this.data.currentUser) */

    if(this.data.currentUser.id)
    {
      this.currentUser=this.data.currentUser;
    }
    
    if(this.currentUser.id)
    {
      if(dataFromForm.name)
        this.currentUser.name=dataFromForm.name;
      
      if(this.userRole)
        this.currentUser.role=this.userRole;
      
      if(dataFromForm.email)
        this.currentUser.email=dataFromForm.email;
      if(dataFromForm.contact)
        this.currentUser.contact=dataFromForm.contact;
    }
    else
    {
      const generatedId=this.generateId(this.users);
      this.currentUser={ id: generatedId, name: dataFromForm.name,  

        email: dataFromForm.email, contact:dataFromForm.contact,  role:"User"};

  
      this.users.push(this.currentUser);
    }   

    /* console.log("form data")
    console.log(this.data) */
    this.dialogRef.close();
    this.formdata.reset()
    
    //$('#AddEditEmployeeForm')[0].reset();
    /* this.currentUser={id:null, name:"", company:"", designation:"", email:"",contact:"",nationality:"",role:""};
    this.data.currentUser={id:null, name:"", company:"", designation:"", email:"",contact:"",nationality:"",role:""};
    console.log("current User from previous")
    console.log(this.data.currentUser)
    console.log("current User")
    console.log(this.currentUser)
    console.log("form data")
    console.log(this.data) */
  }

  generateId(arrayReceived)
  {
    const id : number = arrayReceived.length + 1
    return id;
  }
}
