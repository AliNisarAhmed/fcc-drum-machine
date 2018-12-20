import React from "react";

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.toggleActive = this.toggleActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.keyboardEventHandler = this.keyboardEventHandler.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  toggleActive() {
    this.setState(state => ({ active: !state.active }));
  }

  handleClick(sound) {
    this.playSound(sound);
  }

  keyboardEventHandler(e) {
    if (e.key === this.props.sound.key.toLowerCase()) {
      this.playSound(this.props.sound);
    }
  }

  playSound(sound) {
    let el = document.getElementById(this.props.sound.key);
    el.startTime = 0;
    el.play();
    this.toggleActive();
    setTimeout(this.toggleActive, 100);
    this.props.setPlayingKey(sound.name);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyboardEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyboardEventHandler);
  }

  render() {
    let { sound } = this.props;
    let { active } = this.state;
    return (
      <div
        className={`drum-pad ${active ? "active" : ""}`}
        onClick={() => this.handleClick(sound)}
        id={sound.id}
        onKeyPress={this.keyboardEventHandler}
      >
        <p>{sound.key}</p>
        <audio
          type="audio/mp3"
          src={sound.url}
          preload="auto"
          className="clip"
          id={sound.key}
        />
      </div>
    );
  }
}

export default Drum;
