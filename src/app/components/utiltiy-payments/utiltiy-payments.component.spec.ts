import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtiltiyPaymentsComponent } from './utiltiy-payments.component';

describe('UtiltiyPaymentsComponent', () => {
  let component: UtiltiyPaymentsComponent;
  let fixture: ComponentFixture<UtiltiyPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtiltiyPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtiltiyPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
