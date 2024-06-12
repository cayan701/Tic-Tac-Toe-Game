import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";



function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  ß

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName='Player 1' symbol='X' />
          <Player initialName='Player 2' symbol='O' />
        </ol>
        <GameBoard />
      </div>

      LOG
    </main>
  );
};

export default App;