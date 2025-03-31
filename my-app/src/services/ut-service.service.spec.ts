import { TestBed } from '@angular/core/testing';
import { UTServiceService } from './ut-service.service';

describe('UTServiceService', () => {
  let service: UTServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UTServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected message', () => {
    expect(service.getMessage()).toBe('NKH, Hello, Angular!');
  });

  it('should calculate correctly', ()=> {
    expect(service.calculateNumber(2, 5)).toBe(7);
  })
});
