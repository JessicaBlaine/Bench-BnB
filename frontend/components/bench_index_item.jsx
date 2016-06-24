const React = require("react");

const BenchIndexItem = React.createClass({
  render() {
    return <div>
      <span>{this.props.bench.description}</span>
      <span>{this.props.bench.lat}</span>
      <span>{this.props.bench.lon}</span>
    </div>;
  }
});

module.exports = BenchIndexItem;
