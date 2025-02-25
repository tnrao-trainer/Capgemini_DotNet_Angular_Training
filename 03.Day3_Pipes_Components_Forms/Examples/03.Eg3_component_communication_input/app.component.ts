import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    user1:string  = "Ravi";
    user2:string  = "Ragu";

    usersArray:string[]  = ["Riya", "Ashu", "Nancy"];
}
