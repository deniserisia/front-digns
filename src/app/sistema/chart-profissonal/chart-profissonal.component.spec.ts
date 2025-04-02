import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProfissonalComponent } from './chart-profissonal.component';

describe('ChartProfissonalComponent', () => {
  let component: ChartProfissonalComponent;
  let fixture: ComponentFixture<ChartProfissonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartProfissonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartProfissonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
