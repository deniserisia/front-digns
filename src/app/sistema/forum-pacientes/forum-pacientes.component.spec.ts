import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPacientesComponent } from './forum-pacientes.component';

describe('ForumPacientesComponent', () => {
  let component: ForumPacientesComponent;
  let fixture: ComponentFixture<ForumPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
