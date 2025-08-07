import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastTagListComponent } from './fast-tag-list.component';

describe('FastTagListComponent', () => {
  let component: FastTagListComponent;
  let fixture: ComponentFixture<FastTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FastTagListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
