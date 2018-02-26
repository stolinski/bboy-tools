import Moves from "imports/api/moves/moves";

// Grabs current users moves
Meteor.publish("moves", function() {
  return Moves.find({ owner: this.userId });
});

// Grabs users profile and twitter info
Meteor.publish("user", function() {
  var currentUser = this.userId;
  return Meteor.users.find(
    { _id: currentUser },
    {
      fields: {
        "services.twitter": 1,
        profile: 1
      }
    }
  );
});
