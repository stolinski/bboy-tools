activateFeature = function(user, feature){
  console.log("Adding " + feature + " to user with id " + user._id);
  Meteor.users.update(
    { _id: user._id },
    { $addToSet: { features: feature } }
  );
}

deactivateFeature = function(user, feature){
  console.log("Removing " + feature + " to user with id " + user._id);
  Meteor.users.update(
    { _id: user._id },
    { $pull: { features: feature } }
  );
}