import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.services';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  public turn: any = null;

	// Observables
	public redTurn$!: Observable<boolean>;

	// Behavior Subjects
	public _resetGame!: BehaviorSubject<boolean>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void{
    //Observables
		this.redTurn$ = this.gameService.redTurnObs;
		this.redTurn$.subscribe(redTurn => {
			this.turn = redTurn ? 'Red' : 'Black';
		});

		// Behavior Subjects
		this._resetGame = this.gameService.resetGameBeh;
		this._resetGame.subscribe(reset => {
			this.turn = 'Red'; // When the game is reset by someone else set the turn to Red
		});
	}

	resetGame() {
    this.gameService.resetGame()
		this._resetGame.next(true);
	}

}
