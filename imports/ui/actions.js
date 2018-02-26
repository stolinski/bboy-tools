const toggleNav = () => Session.set('navDrawer', !Session.get('navDrawer'));
const toggleAccounts = () => Session.set(
  'Meteor.loginButtons.dropdownVisible',
  !Session.set('Meteor.loginButtons.dropdownVisible')
);

const closeNav = () => Session.set('navDrawer', false);
const closeAccounts = () => Session.set('Meteor.loginButtons.dropdownVisible', false);


export { toggleNav, closeNav, closeAccounts, toggleAccounts };
