import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

//properties

personName = 'priyanka'
personAge = 23
personAddress = 'Kolhapur'
personPhone = '+918975645747'


//object

person = {
  name : 'Riya',
  age: 15,
  address: 'Sangli',
  phone: '+917890564323',
  email: 'riya@test.com'
}

  constructor() { }

  ngOnInit(): void {
  }

}
