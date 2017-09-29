class TicTacToe {

    constructor() {
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
        this.currPlayer = 'x';
    }
  
    getCurrentPlayerSymbol() {
        //'should return correct player symbol',   
        return (this.currPlayer === 'x') ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        //should update game state correctly
        if (!this.matrix[rowIndex][columnIndex]) 
        {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currPlayer = (this.currPlayer === 'x' ? 'o' : 'x');
        }
    }
  
    isFinished() {
         //should return winner of the game or null
         return ( this.isDraw() || this.getWinner() ) ? true : false;        
    }
  
    getWinner() {
         //should return winner of the game or null
        for (var i = 0; i < 3; i += 1) 
        {
            if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2])
            {
                return this.matrix[i][0];
            }   
        }
        for (var i = 0; i < 3; i += 1) 
        {
            if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[1][i] === this.matrix[2][i]) 
            {
                return this.matrix[0][i];
            }   
        }
        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) 
        {
            return this.matrix[1][1];
        }
        if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) 
        {
            return this.matrix[1][1];
        }
    return null;
    }
  
    noMoreTurns() {
        //should true if game field is full and false otherwise
        for(var i = 0; i < this.matrix.length; i++)
        {
            for(var j = 0; j < this.matrix[i].length ;j++)
            {
                if(!this.matrix[i][j])
                return false; 
            }
        }
        return true;
    }
  
    isDraw() {
        //should return false if game is not finished or there is a winner, and true if it is a draw
        return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }
  
    getFieldValue(rowIndex, colIndex) {
         //should return correct field value
         return this.matrix[rowIndex][colIndex];
    }
  }
  module.exports = TicTacToe;