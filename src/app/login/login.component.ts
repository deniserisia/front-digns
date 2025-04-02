import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None // 👈 Isso permite que o CSS afete o body e o root
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {} // 👈 injeta o Router

  ngOnInit(): void {}

  formAtual: 'login' | 'reset' | 'register' = 'login';

  mostrarFormulario(tipo: 'login' | 'reset' | 'register') {
    this.formAtual = tipo;
  }

  // ✅ Método de login que redireciona
  login() {
    // Aqui você pode colocar validações ou requisições de autenticação se quiser
    this.router.navigate(['/usuario/painel-admin']);
  }

}
