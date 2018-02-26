import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function hasGetUserMedia() {
  return !!(
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
  );
}

export default class Webcam extends PureComponent {
  static defaultProps = {
    audio: true,
    height: 480,
    width: 640,
  };

  static propTypes = {
    audio: PropTypes.bool,
    onUserMedia: PropTypes.func,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
  constructor() {
    super();
    this.mountedInstances = [];
    this.userMediaRequested = false;
  }

  state = {
    hasUserMedia: false,
  };

  componentDidMount() {
    if (!hasGetUserMedia()) return;

    this.mountedInstances.push(this);

    if (!this.state.hasUserMedia && !Webcam.userMediaRequested) {
      this.requestUserMedia();
    }
  }

  requestUserMedia() {
    navigator.getUserMedia =
      navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    const sourceSelected = (audioSource, videoSource) => {
      const constraints = {
        video: {
          optional: [{ sourceId: videoSource }],
        },
      };

      if (this.props.audio) {
        constraints.audio = {
          optional: [{ sourceId: audioSource }],
        };
      }

      navigator.getUserMedia(
        constraints,
        (stream) => {
          this.mountedInstances.forEach(instance => instance.handleUserMedia(null, stream));
        },
        (e) => {
          this.mountedInstances.forEach(instance => instance.handleUserMedia(e));
        },
      );
    };

    if (this.props.audioSource && this.props.videoSource) {
      sourceSelected(this.props.audioSource, this.props.videoSource);
    } else {
      MediaStreamTrack.getSources((sourceInfos) => {
        let audioSource = null;
        let videoSource = null;

        sourceInfos.forEach((sourceInfo) => {
          if (sourceInfo.kind === 'audio') {
            audioSource = sourceInfo.id;
          } else if (sourceInfo.kind === 'video') {
            videoSource = sourceInfo.id;
          }
        });

        sourceSelected(audioSource, videoSource);
      });
    }

    Webcam.userMediaRequested = true;
  }

  handleUserMedia(error, stream) {
    if (error) {
      this.setState({
        hasUserMedia: false,
      });

      return;
    }
    const that = this;
    const src = window.URL.createObjectURL(stream);

    that.stream = stream;
    that.setState({
      hasUserMedia: true,
      src,
    });

    if (this.props.onUserMedia) {
      this.props.onUserMedia();
    }
    this.toCanvas();
  }

  componentWillUnmount() {
    const index = Webcam.mountedInstances.indexOf(this);
    Webcam.mountedInstances.splice(index, 1);

    if (Webcam.mountedInstances.length === 0 && this.state.hasUserMedia) {
      this.stream.stop();
      Webcam.userMediaRequested = false;
      window.URL.revokeObjectURL(this.state.src);
    }
  }

  getScreenshot() {
    if (!this.state.hasUserMedia) return;

    const canvas = this.getCanvas();
    return canvas.toDataURL('image/webp');
  }

  toCanvas() {
    const vid = document.getElementById('cam');
    // vid.play();
    const canvas = document.getElementById('canvas');
    canvas.height = vid.clientHeight;
    canvas.width = vid.clientWidth;
    context = canvas.getContext('2d');
    const that = this;
    vid.addEventListener(
      'play',
      function () {
        that.drawCanvas(this, context, canvas.width, canvas.height);
      },
      false,
    );
  }

  drawCanvas(vid, context, width, height) {
    (function (video) {
      setTimeout(() => {
        context.drawImage(video, 0, 0, width, height);
      }, 4000);
    }(vid));
    setTimeout(this.drawCanvas, 10, vid, context, width, height);
  }

  getCanvas() {
    if (!this.state.hasUserMedia) return;

    const video = React.findDOMNode(this);
    if (!this.ctx) {
      const canvas = document.createElement('canvas');
      canvas.height = video.clientHeight;
      canvas.width = video.clientWidth;
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
    }

    const { ctx, canvas } = this;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx2.drawImage(canvas, 0, 0, canvas.width, canvas.height);

    return canvas;
  }

  render() {
    return (
      <div>
        <video id="cam" autoPlay width={this.props.width} height={this.props.height} src={this.state.src} />
        <canvas id="canvas" />
      </div>
    );
  }
}
