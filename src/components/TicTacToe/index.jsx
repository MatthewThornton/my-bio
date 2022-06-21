import React from "react";
import Board from "./Board";
import { getInitialBoard, calculateWinner, getPlayer, getStatus } from "./utils";

const TicTacToe = () =>  {
    const [ boardArr, setBoardArr ] = React.useState(getInitialBoard());
    const [ turn, setTurn ] = React.useState(1);

    const updateBoard = ({key, value}) => {
        console.log('index: ' + key);
        console.log('property name: '+ value);
        let newArr = [...boardArr]; // copying the board
        newArr[key].value = getPlayer(turn); // replace value with whatever you want to change it to
        setBoardArr(newArr);
        // Check for end game.
        setTurn(turn + 1);
    }

    const resetGame = () => {
        console.log("reset game");
        setBoardArr(getInitialBoard());
        setTurn(1);
    }

    console.log("Board: ", boardArr);
    const winner = calculateWinner(boardArr);
    const status = getStatus(winner, turn);

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            boardArr={boardArr} updateBoard={updateBoard} winner={winner} 
          />
        </div>
        <div className="game-info">
            <div className="status">{status}</div>
            <br />
            {((winner !== null || turn > 9 ) && <div>
                <a
                    className="pointer button"
                    onClick={() => resetGame()}
                >
                    Play Again
                </a>
            </div>)}      
        </div>
      </div>
    );
}
export default TicTacToe;