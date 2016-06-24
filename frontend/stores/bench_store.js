const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
let _benches = {};
const BenchStore = new Store(AppDispatcher);
const BenchConstants = require('../constants/bench_constants');

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      this.resetAllBenches(payload.benches);
      break;
  }
};

BenchStore.all = function() {
  return Object.assign({}, _benches);
};

BenchStore.resetAllBenches = function(benches) {
  _benches = benches;
  BenchStore.__emitChange();
};

module.exports = BenchStore;
