import { Component, inject } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameMinI } from '../../interfaces/gameMin.interface';
import { CommonModule } from '@angular/common';
import { GameItemComponent } from '../game-item/game-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, GameItemComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private gameService = inject(GameService);
  private games$ = this.gameService.getMinGames();
  games: GameMinI[] = [];

  ngOnInit(): void {
    this.games$.subscribe((games) => {
      console.log(games);
      this.games = games;
    })
  }
}
