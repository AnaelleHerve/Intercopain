import { Component, Input } from '@angular/core';
import { ChessPawn }		from '../chess-piece';

@Component({
  selector: 'chess-pawn',
  templateUrl: './chess-pawn.component.html',
  styleUrls: ['./chess-pawn.component.css']
})
export class ChessPawnComponent {
	@Input()
  chessPawn!: ChessPawn;

}
