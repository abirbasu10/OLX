import { Component, OnInit } from '@angular/core';
import { CompanyList, Review } from '../../classDefinition';
import { DefaultCompany } from '../../application_mock_Data';

import swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-logistics-company-details',
  templateUrl: './logistics-company-details.component.html',
  styleUrls: ['./logistics-company-details.component.css']
})
export class LogisticsCompanyDetailsComponent implements OnInit {
  defaultCompany:CompanyList=DefaultCompany;
  profileImgPath : string = "../assets/img/vendor/profile.jpg"

  companyWeb : string = "www.mcships.com"


  portsCompanyServe :  String [] = ["Singapore","Japan","London","China","Mumbai"]

  rating:any=0;
  timeRating:number=0;
  timeQuality:number=0;
  ratingProfessional:number=0;

  currentReview: Review={id:"",name:"",image:"",rating:"",comment:""};
  comment: string;

  reviews : Review[] = [
    {id:"1",name:"XYZ",image:"../assets/img/vendor/NoImage.jpg",rating:"4.1/5",comment:"Good Company. Trust Worthy"},
    {id:"2",name:"Abc",image:"../assets/img/vendor/NoImage.jpg",rating:"3.8/5",comment:"Average Company"}
  ]

  constructor() { }

  ngOnInit() {
  }

  rateCompany()
  { 
    this.rating=(this.timeRating+this.timeQuality)/2;
    //alert(this.rating);
  }

  rateTime(t:number)
  {
    //alert("time: "+t)
    this.timeRating=t;
    this.rateCompany();
  }

  rateQuality(q:number)
  {
    //alert("quality: "+q)
    this.timeQuality=q;
    this.rateCompany();
  }

  rateProfessionalism(p:number)
  {
    this.ratingProfessional=p;
    this.rateCompany();
  }

  postReview()
  {
    /* if(this.rating==0)
    {
      this.rating="Not Rated";
    }
    else
    {
      this.rating=this.rating+"/5";
    } */

    if(this.currentReview.id=="")
    {
      this.currentReview={id:"3",name:"company",image:"../assets/img/vendor/profile.jpg",rating:this.rating+"/5",comment:this.comment}
      this.reviews.push(this.currentReview);
    }
    else
    {
      this.currentReview.comment=this.comment;
    }
      
    this.currentReview={id:"",name:"",image:"",rating:"",comment:""};
    this.comment="";
    //this.rating=0;
  }

  editPost(r: Review)
  {
    this.currentReview=r;
    this.comment=r.comment;
    //this.deletePost(r);
  }

  deletePost(r: Review)
  {
    
        swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
        if (result.value) {
          this.reviews=this.reviews.filter(rev=>rev!=r);
          swal(
            'Success!',
            'Comment Deleted Successfully.',
            'success'
          )
        }
      })
  }

}
