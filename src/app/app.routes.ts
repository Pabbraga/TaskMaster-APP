import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'tarefas',
    loadComponent: () => import('./pages/tarefas/tarefas.page').then((m) => m.TarefasPage),
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro/cadastro.page').then((m) => m.CadastroPage),
  },
  {
    path: 'redefinir-senha',
    loadComponent: () =>
      import('./pages/redefinir-senha/redefinir-senha.page').then((m) => m.RedefinirSenhaPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
];
