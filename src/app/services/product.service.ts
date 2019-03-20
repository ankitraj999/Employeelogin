import { Injectable } from '@angular/core';

import { Product2 } from '../model/product2';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product2[]=[
    {proID:1,proName:'laptop',proCost:700, proCategory:'electronics'},
    {proID:2,proName:'computer',proCost:600, proCategory:'electronics'},
    {proID:3,proName:'tablet',proCost:500, proCategory:'electronics'},
    {proID:4,proName:'mobile',proCost:200, proCategory:'electronics'}
  ];

  getproducts(){
    return this.products;
  }
  constructor() { }
  addproducts(id,name,cost,category){
    let item={
      proID:id,
      proName:name,
      proCost:cost,
      proCategory:category
    }
   return this.products.push(item);
  }
  deleteproduct(id,name,cost,category){
    console.log("name "+name)
    console.log("id "+id)
    console.log("cost "+cost)
    console.log("cat "+category)
    var flat=0;
    for(var i=0;i<this.products.length;i++){
      if(id==this.products[i].proID&&name==this.products[i].proName&&cost==this.products[i].proCost&&category==this.products[i].proCategory)
      return this.products.splice(i,1);
      
      flat++;
    
    }
    
    if(flat>0){
      alert("product is invalid");
    }

     }
}
