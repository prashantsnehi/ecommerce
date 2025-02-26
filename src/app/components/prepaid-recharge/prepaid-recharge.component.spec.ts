import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidRechargeComponent } from './prepaid-recharge.component';

describe('PrepaidRechargeComponent', () => {
  let component: PrepaidRechargeComponent;
  let fixture: ComponentFixture<PrepaidRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrepaidRechargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepaidRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
