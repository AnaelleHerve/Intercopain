import { Component, OnInit } from '@angular/core';
import { Piece }	 	       from '../piece';
import { GameService }	   from '../game.services';
import { SquareComponent }  from '../square/square.component';
@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public board: any;
  
  constructor(private service:GameService
      
  ) {}

  ngOnInit() {

      // Always reset game on init anyway
      this.onReset();
  }

  onReset() {
      this.service.resetGame();
      this.board = this.service.board;
      console.log(this.board);
  }
}
