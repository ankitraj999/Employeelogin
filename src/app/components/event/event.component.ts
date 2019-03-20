import { Component, OnInit } from '@angular/core';
import { EMPTY_ARRAY } from '@angular/core/src/view';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 empAray:string[]=["ankit","ankit-Raj","Raj-ankit"]
click(){
  let result="hello Awesome";
  //alert(result);

}

addItem(name:string){
  alert(name);
  this.empAray.push(name);
}
delItem(name:string){
  alert("deleting "+ name);
  let indexpostion=this.empAray.indexOf(name);
  alert(indexpostion);
  this.empAray.splice(indexpostion,1);
}
del(id:number,name:string ){
  
  alert(`delete product ${id} and ${name}`)
  
}
add(id:number){
  alert("delete product"+id)
}


}
