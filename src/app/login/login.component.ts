import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  userPassword:string="";
  loginAs:string="";
  //routedTo:string=""

  constructor(private router: Router) { }

  ngOnInit() 
  {
    /* for(let user of LOG_IN_DATA){
      if(user.type=='admin'){
        this.adminLoginData=user;
      }
    } */
    $('#loginButton').prop('disabled', true);
  }

  enableLoginButton()
  {
    /* if(this.userPassword.length>0 && this.loginAs) */
    if(this.userPassword.length>0)
    {
      (<HTMLInputElement> document.getElementById("loginButton")).disabled = false;
      
    }
  }


  login()
  {
    this.router.navigate(['/company/dashboard']);
      /* if(this.loginAs=="admin")
      {
        this.router.navigate(['/index']);
      }
      else if(this.loginAs=="company")
      {
        this.router.navigate(['/company/dashboard']);
      }
      else if(this.loginAs=="vendor")
      {
        this.router.navigate(['/index']);
      } */
    
  }

  register(registerAs,name,phone,email,password,confirmPassword)
  {
    /*push to mock data registerAs.value,name.value, email.value,password.value,confirmPassword.value*/

    swal({
      title: 'Registered!',
      text: 'Registered Successfully',
      type: 'success',
      confirmButtonText: 'Ok!!'
    }).then((result)=>{
      this.router.navigate(['/company/dashboard']);
      })
    
      
    
  }

  activateRegTab()
  {
    //alert("hi");
    document.getElementById("login-tab").classList.remove("active");
    document.getElementById("register-tab").classList.add("active")
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

  closeModal()
  {
    $('#forgotPasswordModal').modal("hide");
  }

}
