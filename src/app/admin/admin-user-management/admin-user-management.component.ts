import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import swal from 'sweetalert2';
import {User}  from'../../classDefinition'
import {USERS} from '../../application_mock_Data'
import { AddEditUsersComponent } from '../add-edit-users/add-edit-users.component';
@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css']
})
export class AdminUserManagementComponent implements OnInit {

  displayedColumns = ['Id', 'Name', 'Company', 'Designation', 'Email', "Contact", 'Edit', 'Delete'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() users:User[];

  formdata;
  //editThisEmp:Employee[];
  searchTerm:string="";
  search_user: User[]=[];


  currentUser:User={id:null, name:"", email:"",contact:"",role:""};


  
  
  constructor(public dialog: MatDialog) 
  { 
    this.users=USERS;
    this.dataSource = new MatTableDataSource(this.users);
  }


  ngOnInit() {
    this.users=USERS;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  openDialog()
  {
    let dialogRef = this.dialog.open(AddEditUsersComponent, {
      width: '500px',
      data: { currentUser: this.currentUser, currentUserList:this.users }
    });
    /* dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result=this.addEditVessel();
    }); */
  }

  searchUser(event)
  {
    this.searchTerm=event.target.value;
    if(this.searchTerm.length>0)
    {
      for (let user of USERS) 
      {
        if(user.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())!= -1)
        {
          this.search_user.push(user);
        }
        
      }
      this.users=this.search_user;
      this.search_user=[];
    }
    else if(this.searchTerm.length==0)
    {
      this.users=USERS;
    }   
    
  }
  
  setCurrentUser(usr :User){
    //alert("emp name :"+emp.name); 
 
   this.currentUser=usr;
   this.openDialog();
   this.currentUser={id:null, name:"", email:"",contact:"",role:""};
   //alert("id is::: "+this.currentUser.id);
   //this.editVessel();
 }

 
deleteUser(user)
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
    this.users = this.users.filter(usr => usr !== user);
    this.currentUser={id:null, name:"", email:"",contact:"",role:""};
    swal(
      'Deleted!',
      'User has been deleted.',
      'success'
    )
  }
  })
  
}

}
