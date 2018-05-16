import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  /* adminLoginData:Login={id:null,userId:'',password:'',type:''};
  userId:string="";
   */

  userPassword : string = "";
  constructor() { }

  ngOnInit() {
    /* for(let user of LOG_IN_DATA){
      if(user.type=='admin'){
        this.adminLoginData=user;
      }
  } */
  $('#loginButton').prop('disabled', true);
 
 

  }
  login(){
if(this.userPassword.length>0){
  $('#loginButton').prop('disabled', false);
}
  }

 /*  matchUserId(){
    if(this.adminLoginData.userId==this.userId){
      $('#password').prop('disabled', false);
      $('#password').focus();
    }
    else{
      $('#password').prop('disabled', true);
      $('#loginButton').prop('disabled', true);
    }

  }

  matchUserPassword()
  {
        if(this.adminLoginData.password==this.userPassword){
          $('#loginButton').prop('disabled', false);
        }
        else{
          $('#loginButton').prop('disabled', true);
        }
  } */

  submitRegisteredEmail()
  {
    swal(
        'Submitted!',
        'Password Reset Link has been sent to your registered Email ID',
        'success'
      )
    $('#forgotPasswordModal').modal("hide");
  }

}
