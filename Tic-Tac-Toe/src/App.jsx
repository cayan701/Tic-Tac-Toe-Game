import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";



function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currPlayer) => currPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container" className="highlight-player">
        <ol id="players">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

      LOG
    </main>
  );
};

export default App;