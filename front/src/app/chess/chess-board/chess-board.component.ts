import { Component, OnInit } from '@angular/core';
import { ChessGameService } from '../chess-game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
  public chessBoard: any;

  // Observables
  public resetGame$!: Observable<boolean>;

  constructor(private chessGameService:ChessGameService
      
  ) {}

  ngOnInit() {

      //Observables

      // Always reset game on init anyway
      this.onReset();
  }

  onReset() {
    this.chessBoard = this.chessGameService.chessBoard;
  }
}

