import { Component } from '@angular/core';
import { Student } from '../../Models/Student';
import { DetailsComponent } from "../details/details.component";
import { SlicePipe } from '@angular/common';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 studentlist : Student[];

}
