const toggleNav = () => {
  Session.set('Meteor.loginButtons.dropdownVisible', !Session.set('Meteor.loginButtons.dropdownVisible'));
  return Session.set('navDrawer', !Session.get('navDrawer'));
};

const closeNav = () => {
  Session.set('Meteor.loginButtons.dropdownVisible', false);
  return Session.set('navDrawer', false);
};

export { toggleNav, closeNav };
