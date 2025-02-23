import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeChartComponent } from './recharge-chart.component';

describe('RechargeChartComponent', () => {
  let component: RechargeChartComponent;
  let fixture: ComponentFixture<RechargeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechargeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
