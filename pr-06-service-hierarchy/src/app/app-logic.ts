import { Injectable } from '@angular/core';
import { Data } from './data';
import { Analytics } from './analytics';

@Injectable({
  providedIn: 'root'
})
export class AppLogic {

  constructor(
    private data: Data,
    private analytics: Analytics
  ) {}

  getDataAndLog(): string[] {
    const result = this.data.getData();                 // отримуємо дані
    this.analytics.logEvent('Дані були успішно отримані'); // логуємо подію
    return result;                                      // повертаємо дані
  }
}
