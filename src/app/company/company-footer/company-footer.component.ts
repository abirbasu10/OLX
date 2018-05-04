import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
// CommonJS


@Component({
  selector: 'company-footer',
  templateUrl: './company-footer.component.html',
  styleUrls: ['./company-footer.component.css']
})
export class CompanyFooterComponent implements OnInit {
  test : Date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

  myEvent(event) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
      if (result.value) {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
