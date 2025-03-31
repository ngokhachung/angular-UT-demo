import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculateNewSalaryComponent } from './calculate-new-salary.component';
import { FormsModule } from '@angular/forms';

describe('CalculateNewSalaryComponent', () => {
  let component: CalculateNewSalaryComponent;
  let fixture: ComponentFixture<CalculateNewSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateNewSalaryComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculateNewSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate new salary correctly', () => {
    component.currentSalary = 10000;
    component.increaseRate = 10;
    component.calculateSalary();
    expect(component.newSalary).toBe(11000);
  });

  it('should handle zero salary correctly', () => {
    component.currentSalary = 0;
    component.increaseRate = 10;
    component.calculateSalary();
    expect(component.newSalary).toBe(null);
  });

  it('should handle negative salary input', () => {
    component.currentSalary = -5000;
    component.increaseRate = 10;
    component.calculateSalary();
    expect(component.newSalary).toBe(null);
  });

  it('should handle zero increase rate correctly', () => {
    component.currentSalary = 5000;
    component.increaseRate = 0;
    component.calculateSalary();
    expect(component.newSalary).toBe(5000);
  });

  it('should handle negative increase rate correctly', () => {
    component.currentSalary = 10000;
    component.increaseRate = -5;
    component.calculateSalary();
    expect(component.newSalary).toBe(null);
  });
});
