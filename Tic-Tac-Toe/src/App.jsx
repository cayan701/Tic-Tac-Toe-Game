import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log";


function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currPlayer) => currPlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if( prevTurns.length > 0 && prevTurns[0].player == 'X') {
        currentPlayer = 'O';
      }

      const updpatedTurns = [ 
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer } ,
        ...prevTurns,
      ];
      
      return updpatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container" className="highlight-player">
        <ol id="players">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
};

export default App;