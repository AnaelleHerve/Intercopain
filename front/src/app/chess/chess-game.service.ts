import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChessBoard } from './chess-board/chess-board';
import { ChessPawn, ChessRock,ChessBishop,ChessKing,ChessKnight,ChessQueen } from './chess-piece/chess-piece';

@Injectable({
  providedIn: 'root'
})
export class ChessGameService {
  public chessBoard: any;
  private _selectedPiece: any = null;
  private _whiteTurn: boolean = true;
  private _doubleJump: boolean = false;

  // Behavior Subjects
  private _redTurnBeh: BehaviorSubject<boolean>;
  private _resetGame: BehaviorSubject<boolean>;
  private _isWinner: BehaviorSubject<string>;

  constructor() {
    this._redTurnBeh = <BehaviorSubject<boolean>>new BehaviorSubject(true);
    this._resetGame = <BehaviorSubject<boolean>>new BehaviorSubject(true);
    this._isWinner = <BehaviorSubject<string>>new BehaviorSubject("none");
    this.resetGame();
  }

  // Resets game back to beginning
  resetGame() {
    this.chessBoard = new ChessBoard().chessBoard;
    this._whiteTurn = true;

    //rock
    this.chessBoard[0][0].addPiece(new ChessRock('white', 0, 0));
    this.chessBoard[0][7].addPiece(new ChessRock('white', 0, 7));
    this.chessBoard[7][0].addPiece(new ChessRock('black', 7, 0));
    this.chessBoard[7][7].addPiece(new ChessRock('black', 7, 7));

    //knight
    this.chessBoard[0][1].addPiece(new ChessKnight('white', 0, 1));
    this.chessBoard[0][6].addPiece(new ChessKnight('white', 0, 6));
    this.chessBoard[7][1].addPiece(new ChessKnight('black', 7, 1));
    this.chessBoard[7][6].addPiece(new ChessKnight('black', 7, 6));

    //bishop
    this.chessBoard[0][2].addPiece(new ChessBishop('white', 0, 2));
    this.chessBoard[0][5].addPiece(new ChessBishop('white', 0, 5));
    this.chessBoard[7][2].addPiece(new ChessBishop('black', 7, 2));
    this.chessBoard[7][5].addPiece(new ChessBishop('black', 7, 5));

    //king
    this.chessBoard[0][3].addPiece(new ChessKing('white', 0, 3));
    this.chessBoard[7][3].addPiece(new ChessKing('black', 7, 3));

    //queen
    this.chessBoard[0][4].addPiece(new ChessQueen('white', 0, 4));
    this.chessBoard[7][4].addPiece(new ChessQueen('black', 7, 4));

    for (let i = 0; i < 8; i++) {
      this.chessBoard[1][i].addPiece(new ChessPawn('white', 1, i));
      this.chessBoard[6][i].addPiece(new ChessPawn('black', 6, i));
    }
  }
}
