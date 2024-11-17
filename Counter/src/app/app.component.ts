import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountingComponent } from './components/counting/counting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CountingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
 
})
export class AppComponent {
  title = 'Counter';
  initialCount = 18;
}
