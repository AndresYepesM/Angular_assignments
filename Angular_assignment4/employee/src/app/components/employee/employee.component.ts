import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from 'src/app/services/api.service';
import { EmployeeModel } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employeeData !: any;
  
  showAdd!: boolean;
  showUpdate!: boolean;
  showDetail: boolean = true;
  isDisabled: boolean = true;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({

      firstName : [''],
      lastName : [''],
      salary : [''],
      department : [''],
    });
    this.getAllEmployee();
  }

  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.employeeModelObj.department = this.formValue.value.department;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added Successfully")
      let ref= document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }

  removeEmployee(data : any){
    this.api.deleteEmployee(data.id)
    .subscribe(res=>{
      alert('Employee Deleted')
      this.getAllEmployee();
    })
  }

  clickAddEmployee(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
    this.showDetail = false;
  }

  onEdit(data : any){
    this.showUpdate = true;
    this.showAdd = false;
    this.showDetail = false;

    this.employeeModelObj.id = data.id;
    this.formValue.controls['firstName'].setValue(data.firstName);
    this.formValue.controls['lastName'].setValue(data.lastName);
    this.formValue.controls['salary'].setValue(data.salary);
    this.formValue.controls['department'].setValue(data.department);
  }

  updateEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.employeeModelObj.department = this.formValue.value.department;

    this.api.updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Updated successfully")
      let ref= document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }

  getEmployee(data : any){
    this.showDetail = true;
    this.isDisabled;
    this.showUpdate = false;
    this.showAdd = false;

    this.employeeModelObj.id = data.id;
    this.formValue.controls['firstName'].setValue(data.firstName);
    this.formValue.controls['lastName'].setValue(data.lastName);
    this.formValue.controls['salary'].setValue(data.salary);
    this.formValue.controls['department'].setValue(data.department);
  }
}
