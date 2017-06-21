Migrations.add({
  version: 1, 
  name: 'Version 1',
  up: function() {}
});

Migrations.add({
  version: 2, 
  name: 'Adds default feature flags to people in the db',
  up: function() {
    Meteor.users.find().fetch().forEach(activateDefaultFeatures);
  },
}); 

Meteor.startup(function() {
  Migrations.migrateTo('latest');
});