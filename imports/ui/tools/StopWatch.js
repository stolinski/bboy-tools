import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';

const audio = new Audio('/instantrapairhorn.mp3');
const audio1 = new Audio('/champ.mp3');

@autobind
export default class StopWatch extends PureComponent {

  state = {
    isStart: false,
    elapsed: 0,
    diff: 0,
    view: 'time',
    laps: [],
  }

  componentWillUnmount() {
    // clear timer
    clearInterval(this.state.timer);
    this.setState({ timer: undefined });
  }

  tick() {
    const elapsed = Date.now() - this.state.start + this.state.diff;
    const s = String(Math.floor((elapsed % (1000 * 60)) / 1000) + 100).substring(1);
    if (!(s % 30)) {
      audio1.play();
    }
    this.setState({ elapsed });
  }

  getTimeSpan(elapsed) {
    const m = String(Math.floor(elapsed / 1000 / 60));
    const s = String(Math.floor((elapsed % (1000 * 60)) / 1000) + 100).substring(1);
    return `${m}m ${s}s`;
  }

  getSeconds() {
    return Math.floor((this.state.elapsed % (1000 * 60)) / 1000);
  }

  getRounds(elapsed) {
    const m = Math.floor(elapsed / 1000 / 60);
    const s = Math.floor((elapsed % (1000 * 60)) / 1000);
    const ts = (m * 60) + s;
    return Math.floor(ts / 60);
  }

  onClick() {
    if (!this.state.isStart) {
      const timer = setInterval(this.tick, 33);
      this.setState({
        isStart: true,
        timer,
        start: new Date(),
      });
    } else { // pause
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
        isStart: false,
        diff: this.state.elapsed,
      });
    }
  }

  changeList(e) {
    this.setState({
      view: e.target.value,
    });
  }

  reset() {
    clearInterval(this.state.timer);
    this.setState({
      timer: undefined,
      isStart: false,
      elapsed: 0,
      diff: 0,
      rounds: 0,
      view: 'time',
      dancers: 0,
    });
  }

  render() {
    return (
      <div className="stopwatch practice-tools types">
        <h1>30/30's</h1>
        <section className="settings-panel">
          {/* <div className="form-row">
            <label htmlFor=""># of dancers</label>
            <input type="number" />
          </div> */}
          <div className="form-row">
            <label htmlFor="">View Mode</label>
            <select name="view" id="" onChange={this.changeList} value={this.state.view}>
              <option value="rounds">Rounds</option>
              <option value="time">Time</option>
            </select>
          </div>
        </section>
        <div className="types-wrapper">
          {this.state.view === 'time' ? <h3>{this.getTimeSpan(this.state.elapsed)}</h3> : null }
          {this.state.view === 'rounds' ?
            <div className="box-container">
              <div className="toggle-box">
                <h2>Time</h2>
                <h3>{this.getSeconds()}</h3>
              </div>
              <div className="toggle-box">
                <h2>Round</h2>
                <h3>{this.getRounds(this.state.elapsed)}</h3>
              </div>
            </div> : null}
          <button className="btn btn-start" onClick={this.onClick}>
            {this.state.isStart ? 'pause' : 'start'}
          </button>
          <button className="btn btn-cancel" onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}
