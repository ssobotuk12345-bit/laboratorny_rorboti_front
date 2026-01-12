import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogic } from './app-logic';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  data: string[] = [];

  constructor(private appLogic: AppLogic) {}

  ngOnInit(): void {
    this.data = this.appLogic.getDataAndLog();
  }
}
