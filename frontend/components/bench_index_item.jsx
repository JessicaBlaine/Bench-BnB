const React = require("react");

const BenchIndexItem = React.createClass({
  render() {
    return <div>
      <label>Description:
        <span>{this.props.bench.description}</span>
      </label>
      <label>Location:
        <span>{this.props.bench.lat}</span>
        <span>{this.props.bench.lon}</span>
      </label>

    </div>;
  }
});

module.exports = BenchIndexItem;
