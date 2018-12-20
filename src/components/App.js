import React from "react";

import DrumBoard from "./DrumBoard";
import Display from "./Display";

import sounds from "../sounds/sounds";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sounds: sounds,
      playingKey: ""
    };

    this.setPlayingKey = this.setPlayingKey.bind(this);
  }

  setPlayingKey(key) {
    this.setState({ playingKey: key.toLowerCase() });
  }

  keyHandler(e) {
    console.log(e.key);
  }

  render() {
    return (
      <div className="App" id="drum-machine" onKeyDown={this.keyHandler}>
        <DrumBoard
          sounds={this.state.sounds}
          setPlayingKey={this.setPlayingKey}
        />
        <Display playingKey={this.state.playingKey} />
      </div>
    );
  }
}

export default App;
