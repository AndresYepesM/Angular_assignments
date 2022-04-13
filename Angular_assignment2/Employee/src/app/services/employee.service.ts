import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  name:string = '';


  employee:any = [
    {"id":1,"firstName": "andres","lastName":"yepes","salary":55000,"department":"IT"},
    {"id":2,"firstName": "tom","lastName":"grant","salary":100000,"department":"Sales"},
    {"id":3,"firstName": "jeniffer","lastName":"jones","salary":56500,"department":"IT"},
    {"id":1,"firstName": "marie","lastName":"roberts","salary":67000,"department":"HR"},
    {"id":1,"firstName": "james","lastName":"hopkins","salary":85000,"department":"Marketing"},
  ]
}
