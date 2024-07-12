class Position {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

class Piece {
    constructor(position, color) {
        this.position = position;
        this.color = color;
    }
    isValidMove(newPosition, board) {

    }
}

class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    makeMove() {

    }
}

class Game {
    constructor(whitePlayer, blackPlayer, board) {
        this.whitePlayer = whitePlayer;
        this.blackPlayer = blackPlayer;
        this.board = board;
    }

    start() {

    }

    isGameOver() {

    }
}