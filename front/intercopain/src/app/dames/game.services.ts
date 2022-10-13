import { Injectable }           from '@angular/core';
import { Piece, Pawn, King }	from './piece';
import { Square }                from './square/square';
import { Board }	        from './board/board';

@Injectable()
export class GameService {
  	public board: any;


  	constructor() {
  		  this.resetGame();
  	}

    // Resets game back to beginning
    resetGame() {
        this.board = new Board().board;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 8; j++) {
                if (this.board[i][j].playable === true) {
                  this.board[i][j].addPiece(new Pawn('red', i, j));
                }
            }
        }
        for (let i = 5; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (this.board[i][j].playable === true) {
                    this.board[i][j].addPiece(new Pawn('black', i, j));
                }
            }
        }
    }}