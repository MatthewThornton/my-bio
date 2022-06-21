export const getInitialBoard = () => [
    {  key: 0, value: null },
    {  key: 1, value: null },
    {  key: 2, value: null },
    {  key: 3, value: null },
    {  key: 4, value: null },
    {  key: 5, value: null },
    {  key: 6, value: null },
    {  key: 7, value: null },
    {  key: 8, value: null },
];

function isEven(num) {
    return ((num % 2) === 0);
}

export function getPlayer(turn) {
    if (isEven(turn)) {   
        return "O"
    }
    return "X";
}

/**
 * 
 * @param {*} squares Are key value pairs. See above.
 * @returns 
 */
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value ) {
      return squares[a].value;
    }
  }
  return null;
}

export function getStatus(winner, turn) {
  if (turn > 9 && !winner) {
    return "The game is a tie!";
  } else if (turn === 1) { 
    return  `The first player is ${getPlayer(turn)}.`;
  } else if (!winner) {
    return  `It is player ${getPlayer(turn)}'s turn.`;
  } else {
    return `Player ${winner} wins!` ;
  }
}