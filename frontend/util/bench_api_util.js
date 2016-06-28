
module.exports = {
  fetchAllBenches(bounds, onSuccess) {
    $.ajax({
      url: 'api/benches',
      dataType: 'json',
      data: {bounds: bounds},
      success: onSuccess
    });
  },
  createBench(bench, onSuccess) {
    $.ajax({
      url: 'api/benches',
      method: 'POST',
      data: {bench: bench},
      success: onSuccess
    });
  }
};
