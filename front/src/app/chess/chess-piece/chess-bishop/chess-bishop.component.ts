import { Component, Input } from '@angular/core';
import { ChessBishop } from '../chess-piece';
@Component({
  selector: 'chess-bishop',
  templateUrl: './chess-bishop.component.html',
  styleUrls: ['./chess-bishop.component.css']
})
export class ChessBishopComponent {
	@Input()
  chessBishop!: ChessBishop;
}
