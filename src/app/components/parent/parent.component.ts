import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 parentMsg="I am from parent";
  constructor() { }
  message:string;
  ngOnInit() {
  }

}
