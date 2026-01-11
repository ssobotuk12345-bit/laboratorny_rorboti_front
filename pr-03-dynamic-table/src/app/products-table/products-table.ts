import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.html',
  styleUrl: './products-table.css'
})
export class ProductsTable {

  products = [
    {
      name: 'Ноутбук',
      category: 'Електроніка',
      price: 25000,
      stockCount: 5
    },
    {
      name: 'Мишка',
      category: 'Аксесуари',
      price: 30,
      stockCount: 0
    },
    {
      name: 'Клавіатура',
      category: 'Аксесуари',
      price: 1200,
      stockCount: 12
    },
    {
      name: 'Навушники',
      category: 'Аудіо',
      price: 3200,
      stockCount: 0
    },
    {
      name: 'Флешка',
      category: 'Памʼять',
      price: 120,
      stockCount: 25
    }
  ];

}
