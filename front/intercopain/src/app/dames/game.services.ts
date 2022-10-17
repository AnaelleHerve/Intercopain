import { Injectable } from '@angular/core';
import { Piece, Pawn, King } from './piece';
import { Square } from './square/square';
import { Board } from './board/board';

@Injectable({ providedIn: 'root' })
export class GameService {
    public board: any;
    private _selectedPiece: any = null;
    private _redTurn: boolean = true;
    private _doubleJump: boolean = false;
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
    }
    // Click events for pieces and squares

    // Click on a piece on the board
    clickAPiece(p: Piece) {
        this.findPiece(p).highlight = true;
    }

    // Finds a piece on the board and returns the square it is on
    findPiece(p: Piece): Square {
        let sp: any = null;
        // Look through the board and see if the piece is on a square
        this.board.forEach((row: any[]) => row.forEach((square: { piece: Piece; }) => {
            if (square.piece === p) {
                sp = square;
            }
        }));

        return sp;
    }

}