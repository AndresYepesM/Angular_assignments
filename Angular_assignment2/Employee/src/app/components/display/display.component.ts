import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  constructor(public employeeServices:EmployeeService) { }

  title: string = "Display Employee"
  get:any= [];

  ngOnInit(): void {
    console.log(this.employeeServices.employee);
  }
  
  show(data:any) {
    this.get ={
      "fn": data.firstName,
      "ln": data.lastName,
    }
  }
}
