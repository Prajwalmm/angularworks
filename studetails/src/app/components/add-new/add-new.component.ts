import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../Models/Student';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.css'
})
export class AddNewComponent {
  stuobj=new Student(0,"","",0);
  onSubmit(data:any){
    console.log(data.value);
  }
}
