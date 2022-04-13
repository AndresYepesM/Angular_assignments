import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employee:any=[
    {'id':1,'name':'Carlos','age':41, 'gender':'male',},
    {'id':2,'name':'Ana','age':23, 'gender':'female',},
    {'id':3,'name':'Miguel','age':58, 'gender':'male',},
    {'id':4,'name':'Laura','age':38, 'gender':'female',},
    {'id':5,'name':'Luis','age':68, 'gender':'male',},
    {'id':6,'name':'Cecilia','age':34, 'gender':'female',},
    {'id':7,'name':'Valeria','age':23, 'gender':'female',},
  ]


}