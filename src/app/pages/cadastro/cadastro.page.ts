import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonTitle
} from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonImg,
    IonInput,
    IonButton,
    IonCheckbox,
  ],
})
export class CadastroPage implements OnInit {
  apelido = '';
  email = '';
  senha = '';
  confirmarSenha = '';
  aceitaTermos = false;
  errorMessage = '';

  constructor() {}

  ngOnInit() {
    console.log('Tela de Cadastro.');
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (!this.apelido.trim() || !this.email.trim() || !this.senha || !this.confirmarSenha) {
      this.errorMessage = 'Preencha todos os campos obrigatórios.';
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    if (!emailValido) {
      this.errorMessage = 'Informe um e-mail válido.';
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.errorMessage = 'As senhas não conferem.';
      return;
    }

    if (!this.aceitaTermos) {
      this.errorMessage = 'É obrigatório aceitar os Termos de Uso.';
      return;
    }

    console.log('Cadastro realizado com sucesso.', {
      apelido: this.apelido,
      email: this.email,
    });
  }
}
