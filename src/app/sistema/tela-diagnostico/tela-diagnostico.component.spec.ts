import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDiagnosticoComponent } from './tela-diagnostico.component';

describe('TelaDiagnosticoComponent', () => {
  let component: TelaDiagnosticoComponent;
  let fixture: ComponentFixture<TelaDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDiagnosticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
