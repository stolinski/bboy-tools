import React, { Component } from 'react';
import { autobind } from 'core-decorators';

import { PlayButton, PrevButton, NextButton, Progress, Timer, VolumeControl } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const clientId = '148e939ec8af3082a2ebfad45d65165d';
const resolve = 'https://soundcloud.com/emilie-mims/sets/breakbeat-mix';


export default class Mixtapes extends Component {
  render() {
    return (
      <div className="container">
        <div className="jukebox">
          <SoundPlayerContainer
            clientId={clientId}
            resolveUrl={resolve}
          >
            <Playlists {...this.props} />
          </SoundPlayerContainer>
        </div>
      </div>
    );
  }
}

@autobind
class Playlists extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0,
    };
  }

  nextIndex() {
    let { activeIndex } = this.state;
    const { playlist } = this.props;
    if (activeIndex >= playlist.tracks.length - 1) {
      return;
    }
    if (activeIndex || activeIndex === 0) {
      this.setState({ activeIndex: ++activeIndex });
    }
  }

  prevIndex() {
    let { activeIndex } = this.state;
    if (activeIndex <= 0) {
      return;
    }
    if (activeIndex || activeIndex === 0) {
      this.setState({ activeIndex: --activeIndex });
    }
  }
  render() {
    const { currentTime, duration, playlist } = this.props;
    console.log(currentTime, duration, playlist && playlist.playlistIndex);
    return (
      <div>
        <div className="jukebox-controlls">
          <PrevButton {...this.props} onPrevClick={this.prevIndex} />
          <PlayButton {...this.props} />
          <NextButton {...this.props} onNextClick={this.nextIndex} />
        </div>
        {playlist &&
          <h2>{playlist.tracks[this.state.activeIndex].title}</h2>
        }
        <Progress value={(currentTime / duration) * 100 || 0} {...this.props} />
        <Timer className="h6 mr1" duration={duration || 0} currentTime={currentTime} {...this.props} />
      </div>
    );
  }
}
