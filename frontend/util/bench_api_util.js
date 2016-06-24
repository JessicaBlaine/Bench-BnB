
module.exports = {
  fetchAllBenches(onSuccess) {
    $.ajax({
      url: 'api/benches',
      dataType: 'json',
      success: onSuccess
    });
  }
};
