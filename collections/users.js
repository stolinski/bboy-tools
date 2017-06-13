hasFeature = function(feature){
  if(Meteor.user())
    return Meteor.user().features.includes(feature);
  return false;
}