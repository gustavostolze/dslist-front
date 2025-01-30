import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameI } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit, OnDestroy {
  game: GameI | undefined;
  subscriptions: Subscription | undefined;

  constructor (
    private gameService: GameService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id');
      this.subscriptions = this.gameService.getGames(Number(id)).subscribe((game) => {
      this.game = game;
    })
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
