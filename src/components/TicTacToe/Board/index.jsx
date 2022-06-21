import React from "react"
import Square from "./Square";
const Board = ({
    boardArr,
    winner,
    updateBoard
}) => {

    return (
      <div>
        <div className="board-row">
          <Square id={0} keyValue={boardArr[0]} handleClick={updateBoard} winner={winner} />
          <Square id={1} keyValue={boardArr[1]} handleClick={updateBoard} winner={winner} />
          <Square id={2} keyValue={boardArr[2]} handleClick={updateBoard} winner={winner} />
        </div>
        <div className="board-row">
          <Square id={3} keyValue={boardArr[3]} handleClick={updateBoard} winner={winner} />
          <Square id={4} keyValue={boardArr[4]} handleClick={updateBoard} winner={winner} />
          <Square id={5} keyValue={boardArr[5]} handleClick={updateBoard} winner={winner} />
        </div>
        <div className="board-row">
          <Square id={6} keyValue={boardArr[6]} handleClick={updateBoard} winner={winner} />
          <Square id={7} keyValue={boardArr[7]} handleClick={updateBoard} winner={winner} />
          <Square id={8} keyValue={boardArr[8]} handleClick={updateBoard} winner={winner} />
        </div>
      </div>
    );
}
export default Board;