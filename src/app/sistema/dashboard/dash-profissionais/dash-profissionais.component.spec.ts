import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProfissionaisComponent } from './dash-profissionais.component';

describe('DashProfissionaisComponent', () => {
  let component: DashProfissionaisComponent;
  let fixture: ComponentFixture<DashProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashProfissionaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
