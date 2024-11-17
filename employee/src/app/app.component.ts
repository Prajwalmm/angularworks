import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee';
}
