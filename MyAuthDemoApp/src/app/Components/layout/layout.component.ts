import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
router: any;
logOff(){
  localStorage.removeItem('loginUser');
  this.router.navigateByUrl('login');
}
loggedUserData: any;
constructor(){
  const loggedData =localStorage.getItem("loginUser");
  if(loggedData!= null)
  {
    this.loggedUserData=loggedData;
  }
}
}
