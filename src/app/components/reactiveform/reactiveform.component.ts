import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  form:FormGroup;
  employeeList:User[]=[];
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
     
      name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z][a-zA-Z]+')]),
      email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      contact:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')])
    }

    )
  }

AddUser(form){
this.employeeList.push(form.value);

console.log(form.value);
}
}
