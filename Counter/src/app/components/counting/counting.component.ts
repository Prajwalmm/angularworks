import { Component } from '@angular/core';

@Component({
  selector: 'app-counting',
  standalone: true,
  imports: [],
  templateUrl: './counting.component.html',
  styleUrl: './counting.component.css'
  
})
export class CountingComponent {
  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();
  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
}
