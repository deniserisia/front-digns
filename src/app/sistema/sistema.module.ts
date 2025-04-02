import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SistemaRoutingModule } from './sistema-routing.module';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { TelaDiagnosticoComponent } from './tela-diagnostico/tela-diagnostico.component';
import { ForumDeNoticiasComponent } from './forum-de-noticias/forum-de-noticias.component';
import { ChartProfissonalComponent } from './chart-profissonal/chart-profissonal.component';
import { ForumPacientesComponent } from './forum-pacientes/forum-pacientes.component';
import { DashProfissionaisComponent } from './dashboard/dash-profissionais/dash-profissionais.component';
import { DashAdminComponent } from './dashboard/dash-admin/dash-admin.component';
import { DashPacienteComponent } from './dashboard/dash-paciente/dash-paciente.component';


@NgModule({
  declarations: [
    MeuPerfilComponent,
    TelaDiagnosticoComponent,
    ForumDeNoticiasComponent,
    ChartProfissonalComponent,
    ForumPacientesComponent,
    DashProfissionaisComponent,
    DashAdminComponent,
    DashPacienteComponent
  ],
  imports: [
    CommonModule, 
    SistemaRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    DragDropModule
  ]
})
export class SistemaModule { }
