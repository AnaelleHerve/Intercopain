import { ChessSquare } from '../chess-square/chess-square';

export class ChessBoard {
    public chessBoard = new Array();

    constructor() {
        for (let i = 0; i < 8; i = i + 1) {
            let row = new Array();
            for (let j = 0; j < 8; j = j + 1) {
                row[j]=new ChessSquare(i, j) 
            }
        this.chessBoard[i]=row
        }
    }
}