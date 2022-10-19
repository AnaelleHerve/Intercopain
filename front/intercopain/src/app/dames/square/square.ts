import { Piece }	from '../piece';

export class Square {
	playable: boolean;
	piece: any = null;
	highlight: boolean = false;
	moveTo: boolean = false; // Says whether a piece can move here or not
	jump: boolean = false; // Says whether a piece was jumped when moving here
	row: number;
	col: number;
    green:boolean=true

	constructor(play: boolean, r: number, c: number) {
		this.playable = play;
		this.row = r;
		this.col = c;
        this.green=(r+c)%2==0;
	}

	// Add piece to square
	addPiece(p: Piece) {
		if (this.piece == null) {
			this.piece = p;
			this.piece.movePiece(this.row, this.col);
		}
	}

	// Clear piece out of square by setting to null
	clearPiece() {
		if (this.piece != null) {
			this.piece = null;
		}
    }
}