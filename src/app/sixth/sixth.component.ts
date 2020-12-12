import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {

  product = {id:1, title:'product1', price:300, description: 'desc1'}

  products = [
    {id:1, title:'product1', price:300, description: 'desc1'},
    {id:2, title:'product2', price:400, description: 'desc2'},
    {id:3, title:'product3', price:250, description: 'desc3'},
    {id:4, title:'product4', price:980, description: 'desc4'},
    {id:5, title:'product5', price:560, description: 'desc5'}
  ]
  constructor() { 
    for(let product of this.products){
      console.log(`id: ${product.id}`)
      console.log(`title: ${product.title}`)
      console.log(`description: ${product.description}`)
      console.log(`price: ${product.price}`)
      
    }
  }

  ngOnInit(): void {
  }

}
