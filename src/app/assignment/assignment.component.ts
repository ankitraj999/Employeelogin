import { Component} from '@angular/core';
import {Product} from '../model/product'
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent  {

  constructor() { }


   subject:string[]=["Angular","MongoDB","Express"]
   showFaculty:boolean=true;
   Faculty:string="Ankit Raj";
   Duration:number=30;

   pro:Product={
     id:400,
     name:"ankit",
     gender:"male",
     salary:25000,
     category:"IT"

   }
   proArray:Product[]=[
     {id:301,name:"ram",gender:"male",salary:20000,category:"It"},
     {id:302,name:"shyam",gender:"male",salary:26000,category:"finance"},
     {id:303,name:"ramya",gender:"female",salary:25000,category:"sales"}

   ]
}
