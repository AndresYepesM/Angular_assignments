import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title:string = "Lis component"

  constructor(public employeeServices:EmployeeService) { }

  ngOnInit(): void {
  }
}
