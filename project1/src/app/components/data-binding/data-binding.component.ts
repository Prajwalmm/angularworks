import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({

 selector: 'app-data-binding',

 standalone: true,

 imports: [FormsModule],

 templateUrl: './data-binding.component.html',

 styleUrl: './data-binding.component.css'

})

export class DataBindingComponent {

 courseName: string = "Angular 18";

 //inputeType = "checkbox";

 inputeType = "radio";

 amount = 99999;

 city: any;

 stateName: string = "";

 currentDate: Date = new Date();

 isIndian: boolean = true;

 col = 2;

 myClassName: string = "bg-danger";

 firstName = signal("prajwal");

 constructor() {

  this.city = "banglore";

 }

 changeName() {

  this.firstName.set("Virat Kohli");

 }

 changeCourseName() {
  this.courseName = "React JS";

 }

 showMessage(message: string) {

alert(message)
 }

}

