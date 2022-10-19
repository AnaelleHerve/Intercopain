import { Component, OnInit } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { GameService } from './game.services';

@Component({
  selector: 'app-dames',
  templateUrl: './dames.component.html',
  styleUrls: ['./dames.component.css']
})

export class DamesComponent{
  isWinner = false;
	winner: any = null;

	// Observables
    public isWinner$!: Observable<string>;

    // Behavior Subjects
	public _resetGame!: BehaviorSubject<boolean>;

	constructor(
  		  private service: GameService
  	) {}

  	ngOnInit() {
  		// Observables
  		this.isWinner$ = this.service.isWinnerObs;
  		this.isWinner$.subscribe(w => {
  			if (w !== "none") {
  				this.isWinner = true;
  				this.winner = w;
  			}
  			else {
  				this.isWinner = false;
  				this.winner = "none";
  			}
  		});

  		// Behavior Subjects
		this._resetGame = this.service.resetGameBeh;
  	}

	onReset() {
		this._resetGame.next(true);
	}

}