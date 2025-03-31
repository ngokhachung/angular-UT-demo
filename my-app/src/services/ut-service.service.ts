import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UTServiceService {

  constructor() { }

  getMessage(): string {
    return 'NKH, Hello, Angular!';
  }
  
  calculateNumber(x: number, y: number): number {
    return x + y;
  }
}
