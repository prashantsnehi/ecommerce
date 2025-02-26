import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpRequestHistoryComponent } from './top-up-request-history.component';

describe('TopUpRequestHistoryComponent', () => {
  let component: TopUpRequestHistoryComponent;
  let fixture: ComponentFixture<TopUpRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopUpRequestHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopUpRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
