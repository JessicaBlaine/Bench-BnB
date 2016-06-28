const React = require("react");
const BenchActions = require('../actions/bench_actions');
const BenchStore = require('../stores/bench_store');
const BenchIndexItem = require('./bench_index_item');

const BenchIndex = React.createClass({
  getInitialState() {
    return { benches: BenchStore.all() };
  },
  componentDidMount() {
    BenchStore.addListener(this._onChange);
  },
  _onChange() {
    this.setState({ benches: BenchStore.all() });
  },
  render() {
    return <div className="bench-index">
      {
        this.state.benches.map(bench => {
          return <BenchIndexItem key={bench.id} bench={bench}/>;
        })
      }
    </div>;
  }
});

module.exports = BenchIndex;
