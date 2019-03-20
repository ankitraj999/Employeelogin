import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    
    employee:any[]=[
      {
        name:"Ankit Raj",
        phone:23432342,
        address:"Delhi",
        dob:"10/05/1997"
      },
      {
        name:"Aman Raj",
        phone:888888888,
        address:"pune",
        dob:"10/08/1987"
      },
      {
        name:"Akash Raj",
        phone:3834957,
        address:"Delhi",
        dob:"10/12/1999"
      }
    ]
}
