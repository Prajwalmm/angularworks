import { Component } from '@angular/core';
import { Employee } from '../../Model/Employee';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {
 
  emplist: Employee[]=[{
      id:1,  
      name: "robert",
      gender: "male",
      email: "abc@gmail.com",
      phoneNumber: 2345678,
      contactPreference: "deeksha",
      dateOfBirth: new Date(12/4/1993),
      department: "ISE",
      isActive: true,
      photoPath: './johny.png'
  }
,
{ id:2,  
  name: "merry",
  gender: "Female",
  email: "abcd@gmail.com",
  phoneNumber: 2345678567,
  contactPreference: "deeksha",
  dateOfBirth: new Date(12/5/1993),
  department: "CSE",
  isActive: true,
  photoPath: './merry.png'

},
{
  id:3,  
  name: "robert",
  gender: "male",
  email: "abcde@gmail.com",
  phoneNumber: 12345678,
  contactPreference: "deeksha",
  dateOfBirth: new Date(12/6/1993),
  department: "ECE",
  isActive: true,
  photoPath: './robert.png'
}
  ]

}
