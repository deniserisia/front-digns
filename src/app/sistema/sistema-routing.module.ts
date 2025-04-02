import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashProfissionaisComponent } from './dashboard/dash-profissionais/dash-profissionais.component';
import { DashAdminComponent } from './dashboard/dash-admin/dash-admin.component';
import { DashPacienteComponent } from './dashboard/dash-paciente/dash-paciente.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { ChartProfissonalComponent } from './chart-profissonal/chart-profissonal.component';
import { ForumDeNoticiasComponent } from './forum-de-noticias/forum-de-noticias.component';
import { ForumPacientesComponent } from './forum-pacientes/forum-pacientes.component';
import { TelaDiagnosticoComponent } from './tela-diagnostico/tela-diagnostico.component';

const routes: Routes = [
  {  path: 'usuario', 
    component: LayoutComponent,  
  
    children: [
      { path: 'painel-profissional-da-saude', component: DashProfissionaisComponent},
      { path: 'painel-admin', component: DashAdminComponent},
      { path:'painel-paciente', component: DashPacienteComponent},
      { path: 'meu-perfil', component:MeuPerfilComponent},

      { path: 'chart-com-profissional-da-saude', component: ChartProfissonalComponent},
      { path: 'forum-de-curiosidades', component: ForumDeNoticiasComponent},
      { path: 'forum-dos-pacientes', component: ForumPacientesComponent},

      { path: 'diagnostico', component: TelaDiagnosticoComponent},
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
