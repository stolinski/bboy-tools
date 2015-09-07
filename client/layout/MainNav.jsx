_ = lodash
MainNav = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {};
    var postId = this.props.postId;
    var handle = Meteor.subscribe('users');
    if(handle.ready()) {
      data.user = Meteor.users.findOne({_id: Meteor.userId()});
    }
    return data;
  },

  getContent() {
    return (
        <img src={this.data.user.services.twitter.profile_image_url} />
    );
  },

  render() {
    var loggedIn;
    var userPhoto;
    if(Meteor.userId()){
        loggedIn = (
            <ul>
                <li><a href="/moves">My Moves</a></li>
                <li><a href="/thirties">30/30s</a></li>
                {<li><a href="/battle-mode">Battle Mode</a></li>}
                {/*<li><a href="/battle-mode">Mixtape Boombox</a></li> */}
                {/*<li><a href="/battle-mode">Video Delay Mirror</a></li> */}
                <li><AccountsUIWrapper /></li>
            </ul>
        )
    } else {
        loggedIn = (
            <ul>
                <li><AccountsUIWrapper /></li>
            </ul>  
        )      
    }
    if ( FlowRouter.subsReady('users') ) {
        
    } else {
        userPhoto = false;
    }

    return (
        <nav className="main-nav">
            {loggedIn}
            {this.data.user ? this.getContent() : ''}
        </nav>
    );
  }

});