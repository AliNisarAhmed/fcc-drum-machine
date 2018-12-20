import React from "react";

import Drum from "./Drum";

const DrumBoard = ({ sounds, setPlayingKey }) => {
  return (
    <div id="drum-board">
      {sounds.map(sound => (
        <Drum key={sound.key} sound={sound} setPlayingKey={setPlayingKey} />
      ))}
    </div>
  );
};

export default DrumBoard;
