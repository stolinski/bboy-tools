var PlayButton = SoundPlayerComponents.PlayButton;
var Timer = SoundPlayerComponents.PlayButton;
var Progress = SoundPlayerComponents.Progress;

// icons are components too!
var SoundCloudLogoSVG = SoundPlayerComponents.Icons.SoundCloudLogoSVG

var SoundPlayerContainer = SoundPlayerAddons.SoundPlayerContainer;

const clientId = '148e939ec8af3082a2ebfad45d65165d';
const resolve = 'https://soundcloud.com/sayloulou/nothing-but-a-heartbeat';


Mixtapes = React.createClass({
  render: function() {
    let { track, currentTime } = this.props;
    return (
      <div className="container">
        <div className="types practice-tools">
            <h1>Mixtapes</h1>
            <SoundPlayerContainer
                clientId={clientId}
                resolveUrl={resolve}>
                    <PlayButton {...this.props} />
                    <h2>{track ? track.title : 'Loading...'}</h2>
                    <Timer className="h6 mr1" duration={track ? track.duration / 1000 : 0} currentTime={currentTime} />
            </SoundPlayerContainer>
        </div>
      </div>
    );
  }
});