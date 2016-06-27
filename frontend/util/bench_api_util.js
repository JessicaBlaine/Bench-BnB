
module.exports = {
  fetchAllBenches(bounds, onSuccess) {
    $.ajax({
      url: 'api/benches',
      dataType: 'json',
      data: {bounds: bounds},
      success: onSuccess
    });
  }
};
