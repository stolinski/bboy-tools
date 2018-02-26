import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';

@autobind
export default class Timemachine extends PureComponent {
  componentDidMount() {
    const mediaSource = new MediaSource();
    mediaSource.addEventListener('sourceopen', handleSourceOpen, false);
    let mediaRecorder;
    let sourceBuffer;
    const delay = 10000;
    const gumVideo = document.querySelector('video#gum');
    const recordedVideo = document.querySelector('video#recorded');
    const recordButton = document.querySelector('button#record');
    recordButton.onclick = toggleRecording;
    const isSecureOrigin = location.protocol === 'https:' || location.hostname === 'localhost';

    if (!isSecureOrigin) {
      alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.');
      location.protocol = 'HTTPS';
    }

    const constraints = {
      audio: false,
      video: true,
    };

    function handleSuccess(stream) {
      window.stream = stream;
      if (window.URL) {
        gumVideo.src = window.URL.createObjectURL(stream);
      } else {
        gumVideo.src = stream;
      }
    }

    function handleError(error) {
      console.log('navigator.getUserMedia error: ', error);
    }

    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

    function handleSourceOpen(event) {
      console.log('MediaSource opened');
      sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
      console.log('Source buffer: ', sourceBuffer);
    }

    recordedVideo.addEventListener('error', (ev) => {
      console.error('MediaRecording.recordedMedia.error()');
      alert(`Your browser can not play\n\n${recordedVideo.src}\n\n media clip. event: ${JSON.stringify(ev)}`);
    }, true);

    function toggleRecording() {
      if (recordButton.textContent === 'Start Recording') {
        startRecording();
      } else {
        stopRecording();
        recordButton.textContent = 'Start Recording';
      }
    }

    function startRecording() {
      const recordedBlobs = [];
      var options = {
        mimeType: 'video/webm;codecs=vp9',
      };
      var options = {
        mimeType: 'video/webm;codecs=vp9',
      };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(`${options.mimeType} is not Supported`);
        options = {
          mimeType: 'video/webm;codecs=vp8',
        };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.log(`${options.mimeType} is not Supported`);
          options = {
            mimeType: 'video/webm',
          };
          if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(`${options.mimeType} is not Supported`);
            options = {
              mimeType: '',
            };
          }
        }
      }
      try {
        mediaRecorder = new MediaRecorder(window.stream, options);
      } catch (e) {
        console.error(`Exception while creating MediaRecorder: ${e}`);
        alert(`Exception while creating MediaRecorder: ${e}. mimeType: ${options.mimeType}`);
        return;
      }
      console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
      recordButton.textContent = 'Stop Recording';
      mediaRecorder.ondataavailable = (e) => {
        recordedBlobs.push(e.data);
      };
      mediaRecorder.start(10); // collect 10ms of data
      setTimeout(() => {
        stopRecording();
        play(recordedBlobs);
        startRecording();
      }, delay);
    }

    function stopRecording() {
      mediaRecorder.stop();
      recordedVideo.controls = true;
    }

    function play(recordedBlobs) {
      const superBuffer = new Blob(recordedBlobs, {
        type: 'video/webm',
      });
      recordedVideo.src = window.URL.createObjectURL(superBuffer);
    }
  }

  render() {
    return (
      <div className="comboizer practice-tools types">
        <h1>Timemachine Mirror</h1>
        <div>
          <div className="video-container">
            <video id="gum" autoPlay muted ref="gum" />
            <video id="recorded" className="recorded-video" autoPlay loop ref="loop" />
          </div>
          <div>
            <button id="record" className="btn">Start Recording</button>
          </div>
        </div>
      </div>
    );
  }
}
