import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-digns';

  formAtual: 'login' | 'reset' | 'register' = 'login';

  mostrarFormulario(tipo: 'login' | 'reset' | 'register') {
    this.formAtual = tipo;
  }
}
