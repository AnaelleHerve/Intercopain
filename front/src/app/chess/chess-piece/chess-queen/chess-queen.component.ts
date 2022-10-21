import { Component, Input } from '@angular/core';
import { ChessQueen } from '../chess-piece';
@Component({
  selector: 'chess-queen',
  templateUrl: './chess-queen.component.html',
  styleUrls: ['./chess-queen.component.css']
})
export class ChessQueenComponent {
	@Input()
  chessQueen!: ChessQueen;
}
