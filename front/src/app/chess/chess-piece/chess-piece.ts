export class ChessPiece {
	type: string = 'piece';
	isWhite: boolean = true;
	jump: boolean = false; // Says whether the piece was jumped or not
	row: any = null;
	col: any = null;

	constructor(color: string, r: number, c: number) {
		if (color === "black") {
			this.isWhite = false;
		} else if (color === "white") {
			this.isWhite = true;
		}
		this.row = r;
		this.col = c;
	}

	// Generic move piece function
	movePiece(r: number, c: number) {
		this.row = r;
		this.col = c;
	}
}

export class ChessPawn extends ChessPiece {
	override type: string = "pawn";

	// Nextdoor space moves
	getUpRightMove() {
		let col = this.col + 1;
		let row = this.isWhite ? this.row + 1 : this.row - 1;
		return {row, col};
	}
}

export class ChessBishop extends ChessPiece {
	override type: string = "bishop";
}

export class ChessKing extends ChessPiece {
	override type: string = "king";
}

export class ChessKnight extends ChessPiece {
	override type: string = "knight";
}

export class ChessQueen extends ChessPiece {
	override type: string = "queen";
}

export class ChessRock extends ChessPiece {
	override type: string = "rock";
}
