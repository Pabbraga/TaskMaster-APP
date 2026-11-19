import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonFooter, IonHeader, IonIcon, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline } from 'ionicons/icons';

type RankingPeriod = 'monthly' | 'weekly';

interface PlayerScore {
  position: number;
  name: string;
  points: number;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonFooter, IonHeader, IonIcon, IonToolbar],
})
export class RankingPage {
  readonly userName = 'Jonathan';
  period: RankingPeriod = 'monthly';

  readonly rankings: Record<RankingPeriod, PlayerScore[]> = {
    monthly: [
      { position: 1, name: 'Charlotte', points: 110 },
      { position: 2, name: 'Leon', points: 105 },
      { position: 3, name: 'Luís', points: 100 },
      { position: 4, name: 'Mario', points: 95 },
      { position: 5, name: 'Martha', points: 85 },
      { position: 6, name: 'Joseph', points: 80 },
      { position: 7, name: 'Alice', points: 75 },
      { position: 8, name: 'Jenny', points: 70 },
      { position: 9, name: 'Gabriel', points: 65 },
      { position: 10, name: 'Sofia', points: 60 },
      { position: 11, name: 'Mateus', points: 55 },
      { position: 12, name: 'Beatriz', points: 50 },
      { position: 13, name: 'Rafael', points: 45 },
      { position: 14, name: 'Camila', points: 40 },
    ],
    weekly: [
      { position: 1, name: 'Charlotte', points: 45 },
      { position: 2, name: 'Leon', points: 42 },
      { position: 3, name: 'Luís', points: 39 },
      { position: 4, name: 'Mario', points: 35 },
      { position: 5, name: 'Martha', points: 32 },
      { position: 6, name: 'Joseph', points: 28 },
      { position: 7, name: 'Alice', points: 24 },
      { position: 8, name: 'Jenny', points: 20 },
      { position: 9, name: 'Gabriel', points: 18 },
      { position: 10, name: 'Sofia', points: 16 },
      { position: 11, name: 'Mateus', points: 14 },
      { position: 12, name: 'Beatriz', points: 12 },
      { position: 13, name: 'Rafael', points: 10 },
      { position: 14, name: 'Camila', points: 8 },
    ],
  };

  readonly userScores: Record<RankingPeriod, PlayerScore> = {
    monthly: { position: 78, name: 'Jonathan', points: 10 },
    weekly: { position: 24, name: 'Jonathan', points: 35 },
  };

  constructor() {
    addIcons({ homeOutline, personOutline });
  }

  setPeriod(period: RankingPeriod): void {
    this.period = period;
  }

  get currentRanking(): PlayerScore[] {
    return this.rankings[this.period];
  }

  get currentUserScore(): PlayerScore {
    return this.userScores[this.period];
  }
}
