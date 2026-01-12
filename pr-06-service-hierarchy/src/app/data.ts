import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {

  private data = [
    'Angular',
    'TypeScript',
    'Dependency Injection',
    'Services hierarchy'
  ];

  getData(): string[] {
    return this.data;
  }
}
