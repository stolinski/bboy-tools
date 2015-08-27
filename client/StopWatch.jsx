var audio = new Audio('/instantrapairhorn.mp3');

StopWatch = React.createClass({
  getInitialState: function() {
    return {
      isStart: false,
      elapsed: 0,
      diff: 0,
      laps: [],
    };
  },
  componentWillUnmount: function() { // clear timer
    clearInterval(this.state.timer);
    this.setState({timer: undefined});
  },
  tick: function() {
    var elapsed = Date.now() - this.state.start + this.state.diff;
    var s = String(Math.floor((elapsed%(1000*60))/1000)+100).substring(1); 
    if(!(s % 30)) {
      audio.play();
    }
    this.setState({elapsed: elapsed});
  },
  getTimeSpan: function(elapsed) { // 754567(ms) -> "12:34.567"
    var m = String(Math.floor(elapsed/1000/60)+100).substring(1);
    var s = String(Math.floor((elapsed%(1000*60))/1000)+100).substring(1);
    // var ms = String(elapsed % 1000 + 1000).substring(1);
    return m+":"+s;
  },
  onClick: function() {
    if(!this.state.isStart) { // start
      var timer = setInterval(this.tick, 33);
      this.setState({
        isStart: true,
        timer: timer,
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
  },
  setLap: function() {
    var lapElapsed = this.state.laps.length ? this.state.laps[0].elapsed : 0;
    var lapTitle = "Lap"+(this.state.laps.length+1);
    var lapTime = lapTitle+": "+this.getTimeSpan(this.state.elapsed - lapElapsed)
    var lapElem = { label: lapTime, elapsed: this.state.elapsed };
    this.setState({laps: [lapElem].concat(this.state.laps)});
  },
  reset: function() {
    clearInterval(this.state.timer);
    this.setState({
      timer: undefined,
      isStart: false,
      elapsed: 0,
      diff: 0,
      laps: [],
    });
  },
  render: function() {
    return (
      <div className="stopwatch">
        <h3>{this.getTimeSpan(this.state.elapsed)}</h3>
        <button className="btn btn-start" onClick={this.onClick}>
          {this.state.isStart ? "pause" : "start"}
        </button>
        <button className="btn" onClick={this.setLap}>lap</button>
        <button className="btn btn-cancel" onClick={this.reset}>reset</button>
        <ul>
          {this.state.laps.map(function(lap) {
            return <li key={lap.id}>{lap.label}</li>;
          })}
        </ul>
      </div>
    );
  }
});