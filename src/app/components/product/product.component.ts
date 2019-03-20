import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product2 } from 'src/app/model/product2';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products:Product2[]=[];
  constructor(private prodservice:ProductService) {}
   
  ngOnInit() {
    this.method();
  }
addproductsToService(id,name,cost,category){
   this.prodservice.addproducts(id,name,cost,category);
  }
  
 delproductToService(id,name,cost,category){
   this.prodservice.deleteproduct(id,name,cost,category);
 }
 method(){
  this.products=this.prodservice.getproducts();
 }
 @ViewChild('proId') proidInput :ElementRef;
 @ViewChild('proName') pronameInput :ElementRef;
 @ViewChild('proCost') procostInput :ElementRef;
 @ViewChild('proCategory') procategoryInput :ElementRef;
  clearTextboxes(){
    this.proidInput.nativeElement.value='';
    this.pronameInput.nativeElement.value='';
    this.procostInput.nativeElement.value='';
    this.procategoryInput.nativeElement.value='';
  }
  updateTextboxes(){
    this.proidInput.nativeElement.value='205';
    this.pronameInput.nativeElement.value='ankit';
    this.procostInput.nativeElement.value='100';
    this.procategoryInput.nativeElement.value='human';
  }
}

