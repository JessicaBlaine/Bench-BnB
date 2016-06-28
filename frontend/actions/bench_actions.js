const BenchApiUtil = require('../util/bench_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

module.exports = {
  fetchAllBenches(bounds) {
    BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
  },
  receiveAllBenches(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  createBench(bench) {
    BenchApiUtil.createBench(bench, this.receiveBench);
  },
  receiveBench(bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    });
  },
};
