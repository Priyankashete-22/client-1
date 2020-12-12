import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent implements OnInit {

  products = [
    { id: 1, title: 'product 1', price: 100, description: 'description 1' },
    { id: 2, title: 'product 2', price: 200, description: 'description 2' },
    { id: 3, title: 'product 3', price: 300, description: 'description 3' },
    { id: 4, title: 'product 4', price: 400, description: 'description 4' }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
