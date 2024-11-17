import { Component } from '@angular/core';
import { Student } from '../../Models/Student';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent { 
  studentlist :Student []=[
    {
      Id :1,
      Name :"Prajwal",
      Dept :"Ise",
      PhNo : 9876926402
    },
    {
      Id :2,
      Name :"gagan",
      Dept :"cse",
      PhNo : 6538975
    },
    {
      Id :3,
      Name :"nitya",
      Dept :"Ise",
      PhNo : 7082054398
    },
    {
      Id :4,
      Name :"deeksha",
      Dept :"Ise",
      PhNo : 9863592234
    }

  ]
}
