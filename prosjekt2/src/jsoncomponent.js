import React, { Component } from "react";
import Sound from "react-sound";
import axios from "axios";

export default class TestComponent extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         error:    null,
  //         isLoaded: false,
  //         items:    []
  //     };
  // }

  state = {
    images: [],
    texts: [],
    audio: []
  };

  componentDidMount() {
    axios.get(`/json/resources.json`).then(res => {
      const images = res.data.images;
      this.setState({ images });
      const texts = res.data.texts;
      this.setState({ texts });
      const audio = res.data.audio;
      this.setState({ audio });
    });
  }

  render() {
    let imageIndex = Math.floor(
      (Math.random() - 0.00001) * Math.floor(this.state.images.length)
    );
    let textIndex = Math.floor(
      (Math.random() - 0.00001) * Math.floor(this.state.texts.length)
    );
    let audioIndex = Math.floor(
      (Math.random() - 0.00001) * Math.floor(this.state.audio.length)
    );

    return (
      <div>
        <svg>
          <image
            width="100"
            height="100"
            href={this.state.images[imageIndex]}
          />
        </svg>
        <p>{this.state.texts[textIndex]}</p>
        <Sound
          url={this.state.audio[audioIndex]}
          playStatus={Sound.status.PLAYING}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
          volume={30}
        />
      </div>
    );
  }
}

//<audio ref="audio_tag" src={this.state.audio[audioIndex]}  autoPlay={true} />