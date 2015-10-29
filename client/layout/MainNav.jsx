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

  render() {
    var loggedIn;
    if(Meteor.userId()){
        loggedIn = (
            <ul>
                <li><a onClick={this.props.toggleMenu} href="/moves">My Moves</a></li>
                <li><a onClick={this.props.toggleMenu} href="/practice-tools">Practice Tools</a></li>
                <li><a onClick={this.props.toggleMenu} href="/battle-tools">Battle Tools</a></li>
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

    return (
        <nav className="main-nav">
            {loggedIn}
        </nav>
    );
  }

});