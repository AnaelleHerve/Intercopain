import { Component, Input } from '@angular/core';
import { ChessKing } from '../chess-piece';
@Component({
  selector: 'chess-king',
  templateUrl: './chess-king.component.html',
  styleUrls: ['./chess-king.component.css']
})
export class ChessKingComponent {
	@Input()
  chessKing!: ChessKing;
}
