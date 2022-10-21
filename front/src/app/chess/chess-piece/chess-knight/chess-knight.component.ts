import { Component, Input } from '@angular/core';
import { ChessKnight } from '../chess-piece';

@Component({
  selector: 'chess-knight',
  templateUrl: './chess-knight.component.html',
  styleUrls: ['./chess-knight.component.css']
})
export class ChessKnightComponent {
	@Input()
  chessKnight!: ChessKnight;
}
