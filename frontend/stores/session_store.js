const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
let _currentUser = {};
const SessionStore = new Store(AppDispatcher);

const SessionConstants = require('../constants/session_constants');

const _login = function(user) {
  _currentUser = user;
  SessionStore.__emitChange();
};

const _logout = function() {
  _currentUser = {};
  SessionStore.__emitChange();
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      _logout();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function() {
  Boolean(Object.keys(_currentUser).length);
};

module.exports = SessionStore;
