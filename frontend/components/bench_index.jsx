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
    BenchActions.fetchAllBenches();
  },
  _onChange() {
    this.setState({ benches: BenchStore.all() });
  },
  render() {
    return <div>
      {
        Object.keys(this.state.benches).map(key => {
          return <BenchIndexItem key={key} bench={this.state.benches[key]}/>;
        })
      }
    </div>;
  }
});

module.exports = BenchIndex;
