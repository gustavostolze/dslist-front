import { Component, Input } from '@angular/core';
import { GameMinI } from '../../interfaces/gameMin.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-item',
  imports: [CommonModule],
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.scss'
})
export class GameItemComponent {
  @Input() game: GameMinI | undefined;
}
