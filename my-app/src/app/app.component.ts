import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculateNewSalaryComponent } from '../components/calculate-new-salary/calculate-new-salary.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculateNewSalaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
