import React from "react";

const Display = ({ playingKey }) => {
  return (
    <div id="display">
      <span>{playingKey}</span>
    </div>
  );
};

export default Display;
