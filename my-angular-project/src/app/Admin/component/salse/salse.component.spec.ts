import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalseComponent } from './salse.component';

describe('SalseComponent', () => {
  let component: SalseComponent;
  let fixture: ComponentFixture<SalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
