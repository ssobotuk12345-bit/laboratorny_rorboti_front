import { Component } from '@angular/core';
import { ConfigurableHighlight } from './configurable-highlight';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConfigurableHighlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
