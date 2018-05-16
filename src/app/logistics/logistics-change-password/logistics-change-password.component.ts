import { Component, OnInit } from '@angular/core';



import swal from 'sweetalert2';
declare const $: any;


@Component({
  selector: 'app-logistics-change-password',
  templateUrl: './logistics-change-password.component.html',
  styleUrls: ['./logistics-change-password.component.css']
})
export class LogisticsChangePasswordComponent implements OnInit {

 /* adminLoginData:Login={id:null,userId:'',password:'',type:''}; */
 position = 'before';
 isOldPasswordMatched:string="";
 isMatched:string="";
 newPassword:string;
 constructor() { }

 ngOnInit() {
/*    for(let user of LOG_IN_DATA){
     if(user.type=='company'){
       this.adminLoginData=user;
     }
 } */
 $('#changePasswordButton').prop('disabled', true);
 }

 /* matchOldPassword(event){
  // alert(event.target.value);

   if(this.adminLoginData.password==event.target.value){
     this.isOldPasswordMatched="true";
     $('#changePassword').removeClass('hidden');
   }
   
   } */
 matchNewPassword(event){
   //alert(event.target.value);
 
   if(event.target.value.length ==0){
     this.isMatched="";
     
   }
     if(this.newPassword == event.target.value){
       this.isMatched="true";
           
       $('#changePasswordButton').prop('disabled', false);     
       
     }
     else{
       this.isMatched="false";
       $('#changePasswordButton').prop('disabled', true);
     }
    
 }

 changePassword(){
 
   swal({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     type: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Confirm !!!'
   }).then((result) => {
   if (result.value) {
     $('#confirmPassword').val('');
     $('#oldPasswordBox').val('');
     $('#changePassword').addClass('hidden');
     this.isOldPasswordMatched="";
     this.newPassword='';
     this.isMatched='';
     
     swal(
       'Success!',
       'Password Change successfully.',
       'success'
     )
   }
 })
 }
}
