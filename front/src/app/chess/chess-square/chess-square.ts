import { ChessPiece }	from '../chess-piece/chess-piece';

export class ChessSquare {
	chessPiece: any = null;
	highlight: boolean = false;
	moveTo: boolean = false; // Says whether a piece can move here or not
	jump: boolean = false; // Says whether a piece was jumped when moving here
	row: number;
	col: number;
    black:boolean=true

	constructor(r: number, c: number) {
		this.row = r;
		this.col = c;
        this.black=(r+c)%2==1;
	}

	// Add piece to square
	addPiece(p: ChessPiece) {
		if (this.chessPiece == null) {
			this.chessPiece = p;
			this.chessPiece.movePiece(this.row, this.col);
		}
	}

	// Clear piece out of square by setting to null
	clearPiece() {
		if (this.chessPiece != null) {
			this.chessPiece = null;
		}
    }
}