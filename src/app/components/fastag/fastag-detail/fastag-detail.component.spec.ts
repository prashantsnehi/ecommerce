import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastagDetailComponent } from './fastag-detail.component';

describe('FastagDetailComponent', () => {
  let component: FastagDetailComponent;
  let fixture: ComponentFixture<FastagDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FastagDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastagDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
