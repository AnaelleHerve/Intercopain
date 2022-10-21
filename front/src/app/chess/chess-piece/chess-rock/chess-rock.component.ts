import { Component, Input } from '@angular/core';
import { ChessRock } from '../chess-piece';
@Component({
  selector: 'chess-rock',
  templateUrl: './chess-rock.component.html',
  styleUrls: ['./chess-rock.component.css']
})
export class ChessRockComponent {
	@Input()
  chessRock!: ChessRock;
}
