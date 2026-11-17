import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, searchOutline } from 'ionicons/icons';

type TaskStatus = 'Pendente' | 'Em andamento' | 'Concluída';

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: TaskStatus;
}

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonButton,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonToolbar,
  ],
})
export class TarefasPage {
  readonly userName = 'Jonathan';
  searchTerm = '';
  selectedTaskId: number | null = null;

  tasks: Task[] = [
    {
      id: 1,
      title: 'Sessão de Estudos',
      description: 'Estudar Engenharia de Software.',
      deadline: '2026-11-18',
      status: 'Em andamento',
    },
    {
      id: 2,
      title: 'Faxina Matinal',
      description: 'Fazer uma faxina na casa de manhã cedo depois do café.',
      deadline: '2026-11-18',
      status: 'Pendente',
    },
    {
      id: 3,
      title: 'Fazer caminhada',
      description: 'Fazer caminhada de 2 Km durante a tarde.',
      deadline: '2026-11-19',
      status: 'Pendente',
    },
    {
      id: 4,
      title: 'Fazer exercício',
      description: 'Separar 30 minutos no dia para se exercitar.',
      deadline: '2026-11-19',
      status: 'Concluída',
    },
    {
      id: 5,
      title: 'Leitura de Livro',
      description: 'Ler ao menos 1 capítulo do livro Inteligência Emocional.',
      deadline: '2026-11-20',
      status: 'Em andamento',
    },
    {
      id: 6,
      title: 'Sessão de Jogos',
      description: 'Período livre para jogar até no máximo 2 horas.',
      deadline: '2026-11-20',
      status: 'Pendente',
    },
    {
      id: 7,
      title: 'Comprar Aspirador',
      description: 'Sair para comprar um novo aspirador de pó.',
      deadline: '2026-11-21',
      status: 'Pendente',
    },
    {
      id: 8,
      title: 'Lavar o carro',
      description: 'Fazer uma lavagem completa do carro.',
      deadline: '2026-11-21',
      status: 'Pendente',
    },
  ];

  constructor() {
    addIcons({ homeOutline, personOutline, searchOutline });
  }

  get filteredTasks(): Task[] {
    const query = this.searchTerm.trim().toLocaleLowerCase();
    return this.tasks.filter((task) => task.title.toLocaleLowerCase().includes(query));
  }

  toggleDetails(taskId: number): void {
    this.selectedTaskId = this.selectedTaskId === taskId ? null : taskId;
  }

  formatDeadline(deadline: string): string {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(
      new Date(`${deadline}T12:00:00`),
    );
  }
}
