import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
}
