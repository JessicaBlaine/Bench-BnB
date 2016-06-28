
module.exports = {
  signup(user, onSuccess, onError) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: {user},
      success: onSuccess,
      error: onError
    });
  },
  login(user, onSuccess, onError) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: {user},
      success: onSuccess,
      error: onError
    });
  },
  logout(onSuccess, onError) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success: onSuccess,
      error: onError
    });
  }
};
