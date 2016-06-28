const React = require("react");

const BenchIndexItem = React.createClass({
  render() {
    return <div >
      <label>Description:
        <span>{this.props.bench.description}</span>
      </label>
      <label>Number of Seats:
        <span>{this.props.bench.number_of_seats}</span>
      </label>
      <label>Location:
        <span>{this.props.bench.lat}</span>
        <span>{this.props.bench.lon}</span>
      </label>

    </div>;
  }
});

module.exports = BenchIndexItem;
