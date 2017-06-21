const DEFAULT_FEATURES = ['moves', 'practice-tools', 'battle-tools'];

activateDefaultFeatures = function(user){ 
  DEFAULT_FEATURES.forEach(function(feature){
    activateFeature(user, feature);
  })
}

Accounts.onCreateUser(function(options, user){
  user.features = [];
  DEFAULT_FEATURES.forEach(function(feature){
    user.features.push(feature);
  })
  return user;
})

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