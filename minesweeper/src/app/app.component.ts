import { Component, OnInit } from '@angular/core';

interface BoardCell {
  isRevealed: boolean;
  isBomb: boolean;
  bombsAround: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  BOARD_WIDTH = 5;
  BOARD_HEIGHT = 5;
  BOMB_PERCENT = 0.2;

  board!: BoardCell[][];
  gameStarted = false;
  gameOver = false;

  ngOnInit(): void {
    this.restartGame();
  }

  public restartGame() {
    this.gameOver = false;
    this.gameStarted = false;
    this.buildEmptyBoard();
    this.addRandomBombs();
    this.addBombNeighbors();
  }

  private buildEmptyBoard() {
    this.board = new Array(this.BOARD_HEIGHT).fill('').map((elem) => {
      return new Array(this.BOARD_WIDTH).fill('').map((e) => ({
        isRevealed: false,
        isBomb: false,
        bombsAround: '',
      }));
    });
  }

  private addRandomBombs() {
    const totalBombs = Math.floor(
      this.BOARD_HEIGHT * this.BOARD_WIDTH * this.BOMB_PERCENT
    );
    let placedBombs = 0;
    let randomRow = 0;
    let randomCol = 0;

    while (placedBombs < totalBombs) {
      randomRow = Math.floor(Math.random() * this.BOARD_HEIGHT);
      randomCol = Math.floor(Math.random() * this.BOARD_WIDTH);
      if (!this.board[randomRow][randomCol].isBomb) {
        this.board[randomRow][randomCol].isBomb = true;
        this.board[randomRow][randomCol].bombsAround = 'B';
        placedBombs++;
      }
    }
  }

  private addBombNeighbors() {
    let bombs = 0;
    for (let row = 0; row < this.BOARD_HEIGHT; row++) {
      for (let col = 0; col < this.BOARD_WIDTH; col++) {
        if (!this.board[row][col].isBomb) {
          bombs = this.getBombsAround(row, col);
          this.board[row][col].bombsAround = bombs > 0 ? bombs.toString() : '';
        }
      }
    }
  }

  public revealCell(rowIndex: number, colIndex: number) {
    if (this.gameOver) {
      return;
    }

    if (this.board[rowIndex][colIndex].isBomb && this.gameStarted == false) {
      // avoid losing on the first move
      this.board[rowIndex][colIndex].isBomb = false;
      const bombsAround = this.getBombsAround(rowIndex, colIndex);
      this.board[rowIndex][colIndex].bombsAround = bombsAround > 0 ? bombsAround.toString() : '';
      this.gameStarted = true;
    }

    if (!this.board[rowIndex][colIndex].isBomb) {
      if (this.board[rowIndex][colIndex].bombsAround === '') {
        this.board[rowIndex][colIndex].isRevealed = true;
        this.revealNeighbors(rowIndex, colIndex);
      }
    } else {
      // game over
      this.gameOver = true;
    }

    this.board[rowIndex][colIndex].isRevealed = true;
  }

  flagCell(event: Event, row: number, col: number) {
    event.preventDefault();
    console.log('lol')
  }

  private getBombsAround(rowIndex: number, colIndex: number): number {
    let bombs = 0;
    const neighbors = this.getNeighbors(rowIndex, colIndex);
    neighbors.forEach((neighbor) => {
      let row = neighbor[0];
      let col = neighbor[1];
      if (this.board[row][col].isBomb) {
        bombs++;
      }
    });
    return bombs;
  }

  private getNeighbors(rowIndex: number, colIndex: number): number[][] {
    return [
      [rowIndex - 1, colIndex - 1],
      [rowIndex - 1, colIndex],
      [rowIndex - 1, colIndex + 1],
      [rowIndex, colIndex - 1],
      [rowIndex, colIndex + 1],
      [rowIndex + 1, colIndex - 1],
      [rowIndex + 1, colIndex],
      [rowIndex + 1, colIndex + 1],
    ].filter((entry) => {
      let validRow = entry[0] >= 0 && entry[0] < this.BOARD_HEIGHT;
      let validCol = entry[1] >= 0 && entry[1] < this.BOARD_WIDTH;
      return validRow && validCol;
    });
  }

  private revealNeighbors(rowIndex: number, colIndex: number) {
    let unvisitedNeighbors = this.getNeighbors(rowIndex, colIndex).filter(
      (neighbor) => this.board[neighbor[0]][neighbor[1]].isRevealed === false
    );

    let nextNeighbors: number[][] = [];

    let row;
    let col;
    unvisitedNeighbors.forEach((neighbor) => {
      row = neighbor[0];
      col = neighbor[1];

      if(this.board[row][col].bombsAround === '') {
        nextNeighbors.push([row, col]);
      }

      this.board[row][col].isRevealed = true;
    });

    nextNeighbors.forEach((neighbor) => {
      this.revealNeighbors(neighbor[0], neighbor[1]);
    });
  }
}
