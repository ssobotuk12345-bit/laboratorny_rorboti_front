import { Component } from '@angular/core';
import { UserProfile } from './user-profile/user-profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
