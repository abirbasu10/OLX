import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {
loginStatus:string="true"
  constructor() { }

  ngOnInit() {
    this.checkLogInOrNot()
  }
   

  checkLogInOrNot(){
    if(this.loginStatus=="false"){
      return ''
    }
  }
}
