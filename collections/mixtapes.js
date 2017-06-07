// import React, { PureComponent } from 'react';

// import SoundPlayerComponents, { PlayButton, Timer, Progress, Icons } from 'react-soundplayer/components';
// import SoundPlayerAddons, { SoundPlayerContainer } from 'react-soundplayer/addons';

// const clientId = '148e939ec8af3082a2ebfad45d65165d';
// const resolve = 'https://soundcloud.com/sayloulou/nothing-but-a-heartbeat';


// export default class Mixtapes extends PureComponent {
//   render() {
//     const { track, currentTime } = this.props;
//     return (
//       <div className="container">
//         <div className="types practice-tools">
//           <h1>Mixtapes</h1>
//           <SoundPlayerContainer
//             clientId={clientId}
//             resolveUrl={resolve}
//           >
//             <PlayButton {...this.props} />
//             <h2>{track ? track.title : 'Loading...'}</h2>
//             <Timer className="h6 mr1" duration={track ? track.duration / 1000 : 0} currentTime={currentTime} />
//           </SoundPlayerContainer>
//         </div>
//       </div>
//     );
//   }
// }
