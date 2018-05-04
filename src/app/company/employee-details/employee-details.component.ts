import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../comany_mock_data';
import { Employee } from '../company_employee';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  currentEmployee:Employee;
  id:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentEmployee=EMPLOYEES.find(emp=>emp.id==this.id);
  }

}
