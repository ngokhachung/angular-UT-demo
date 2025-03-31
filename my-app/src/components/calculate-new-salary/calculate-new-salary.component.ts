import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-new-salary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculate-new-salary.component.html',
  styleUrls: ['./calculate-new-salary.component.scss']
})
export class CalculateNewSalaryComponent {
  currentSalary: number = 0;
  increaseRate: number = 0;
  newSalary: number | null = null;

  calculateSalary(): void {
    if (this.currentSalary > 0 && this.increaseRate >= 0) {
      this.newSalary = this.currentSalary + (this.currentSalary * this.increaseRate) / 100;
    } else {
      this.newSalary = null;
    }
  }
}
