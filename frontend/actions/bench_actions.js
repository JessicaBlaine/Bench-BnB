const BenchApiUtil = require('../util/bench_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

module.exports = {
  fetchAllBenches() {
    BenchApiUtil.fetchAllBenches(this.recieveAllBenches);
  },
  recieveAllBenches(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};
