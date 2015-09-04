Meteor.publish("moves", function () {
    return Moves.find();
});

Meteor.publish("users", function () {
    var currentUser = this.userId
    if (currentUser) {
        return Meteor.users.find({_id: currentUser}, {
          fields: {
            "services.twitter": 1,
            "profile": 1
          }
        });
    } else {
        this.ready();
    }

});