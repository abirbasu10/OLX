import { Component, OnInit } from '@angular/core';
import { LogisticFirmList, Review } from '../../classDefinition';
import { DefaultLogisticFirm } from '../../application_mock_Data';

import swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-logistics-profile',
  templateUrl: './logistics-profile.component.html',
  styleUrls: ['./logistics-profile.component.css']
})
export class LogisticsProfileComponent implements OnInit {
  defaultLogisticFirm:LogisticFirmList=DefaultLogisticFirm;
  profileImgPath : string = "../assets/img/vendor/profile.jpg"

  firmWeb : string = "www.theindian.com"


  portsFirmServe :  String [] = ["Singapore","Japan","London","China","Mumbai"]

  reviews : Review[] = [
    {id:"1",name:"XYZ",image:"../assets/img/vendor/NoImage.jpg",rating:"4.1/5",comment:"Good Vendor. Trust Worthy"},
    {id:"2",name:"Abc",image:"../assets/img/vendor/NoImage.jpg",rating:"3.8/5",comment:"Average Vendor"}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
