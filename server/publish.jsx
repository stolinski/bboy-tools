// Grabs current users moves
Meteor.publish("moves", (userId) => {
    return Moves.find({owner: userId});
});


// Grabs users profile and twitter info
Meteor.publish("users", () => {
    var currentUser = this.userId
    return Meteor.users.find({_id: currentUser}, {
      fields: {
        "services.twitter": 1,
        "profile": 1
      }
    });
});