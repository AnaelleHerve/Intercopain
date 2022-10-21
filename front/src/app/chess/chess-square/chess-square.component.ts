import { Component, Input } from '@angular/core';
import { ChessGameService } from '../chess-game.service';
import { ChessSquare } from './chess-square';

@Component({
  selector: 'chess-square',
  templateUrl: './chess-square.component.html',
  styleUrls: ['./chess-square.component.css']
})
export class ChessSquareComponent {
	@Input()
  chessSquare!: ChessSquare;

	constructor(public chessGameService: ChessGameService
  	) {}
  }
