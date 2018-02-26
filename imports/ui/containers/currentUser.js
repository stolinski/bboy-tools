import { withData } from 'meteor/orionsoft:react-meteor-data';

export default withData(() => {
  const userSub = Meteor.subscribe('user');
  const user = Meteor.user();
  return {
    user,
    userSub: userSub.ready(),
  };
});
