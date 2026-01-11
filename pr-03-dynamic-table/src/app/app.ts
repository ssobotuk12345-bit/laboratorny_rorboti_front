import { Component } from '@angular/core';
import { ProductsTable } from './products-table/products-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
