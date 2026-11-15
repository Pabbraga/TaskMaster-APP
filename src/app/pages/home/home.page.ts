import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonProgressBar,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personOutline, star } from 'ionicons/icons';

interface DailyChallenge {
  title: string;
  progress: number;
}

interface WeeklyChallenge {
  title: string;
  reward: number;
  completed: boolean;
}

interface TodayTask {
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonButton,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonProgressBar,
    IonToolbar,
  ],
})
export class HomePage {
  readonly userName = 'Jonathan';
  readonly streakDays = 6;

  constructor() {
    addIcons({ personOutline, star });
  }

  readonly dailyChallenges: DailyChallenge[] = [
    { title: 'Cumpra 3 Tarefas', progress: 0.75 },
    { title: 'Cumpra 2 Tarefas com mais de 2 Itens', progress: 0.33 },
    { title: 'Cumpra 6 Itens de Tarefas', progress: 0.5 },
  ];

  readonly weeklyChallenges: WeeklyChallenge[] = [
    { title: 'Conclua 1 Tarefa todos os dias dessa semana', reward: 160, completed: false },
    { title: 'Conclua 16 Desafios Diários', reward: 100, completed: true },
    { title: 'Conclua 2 Desafios Semanais', reward: 80, completed: false },
  ];

  readonly tasks: TodayTask[] = [
    { title: 'Sessão de Estudos' },
    { title: 'Faxina Matinal' },
    { title: 'Fazer Caminhada' },
    { title: 'Fazer Exercício' },
  ];

  isWeeklyChallengeCompleted(challenge: WeeklyChallenge): boolean {
    return challenge.completed;
  }
}
