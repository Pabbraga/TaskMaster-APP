import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonButton, IonContent, IonImg, IonInput, IonHeader, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonImg, IonInput, IonButton, IonHeader, IonTitle],
})
export class LoginPage implements OnInit {
  private readonly router = inject(Router);

  email = '';
  senha = '';
  errorMessage = '';

  ngOnInit() {
    console.log('Tela de Login.');
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (!this.email.trim() || !this.senha.trim()) {
      this.errorMessage = 'Informe e-mail e senha.';
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    if (!emailValido) {
      this.errorMessage = 'Informe um e-mail válido.';
      return;
    }

    this.router.navigate(['/home']);
  }
}
