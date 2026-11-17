import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonImg, IonInput } from '@ionic/angular';

type ResetStep = 'email' | 'code';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, IonButton, IonContent, IonImg, IonInput],
})
export class RedefinirSenhaPage {
  step: ResetStep = 'email';
  email = '';
  codigo = '';
  novaSenha = '';
  confirmarSenha = '';
  errorMessage = '';
  statusMessage = '';

  requestCode(): void {
    this.errorMessage = '';
    this.statusMessage = '';

    if (!this.email.trim()) {
      this.errorMessage = 'Informe seu e-mail.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.errorMessage = 'Informe um e-mail válido.';
      return;
    }

    this.step = 'code';
    this.statusMessage =
      'A tela de validação está pronta. O envio do código depende da integração com o serviço de autenticação.';
  }

  resetPassword(): void {
    this.errorMessage = '';
    this.statusMessage = '';

    if (!this.codigo.trim() || !this.novaSenha || !this.confirmarSenha) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    if (this.novaSenha !== this.confirmarSenha) {
      this.errorMessage = 'As senhas não conferem.';
      return;
    }

    this.errorMessage =
      'Não foi possível validar o código ou alterar a senha: o serviço de autenticação ainda não está integrado.';
  }

  backToEmail(): void {
    this.step = 'email';
    this.codigo = '';
    this.novaSenha = '';
    this.confirmarSenha = '';
    this.errorMessage = '';
    this.statusMessage = '';
  }
}
