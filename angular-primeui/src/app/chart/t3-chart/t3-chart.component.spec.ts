import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T3ChartComponent } from './t3-chart.component';

describe('T3ChartComponent', () => {
  let component: T3ChartComponent;
  let fixture: ComponentFixture<T3ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T3ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
