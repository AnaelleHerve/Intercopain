import { Component, OnInit } from '@angular/core';
import { GameService }	   from '../game.services';
import { Observable } from 'rxjs';
@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public board: any;

  // Observables
  public resetGame$!: Observable<boolean>;

  constructor(private gameService:GameService
      
  ) {}

  ngOnInit() {

      //Observables
      this.resetGame$ = this.gameService.resetGameObs;
      this.resetGame$.subscribe(reset => {
          if (reset) {
              this.onReset();
          }
      });

      // Always reset game on init anyway
      this.onReset();
  }

  onReset() {
      this.board = this.gameService.board;
  }
}
