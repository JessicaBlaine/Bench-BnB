const React = require('react');
const BenchActions = require('../actions/bench_actions');


const BenchForm = React.createClass({
  getInitialState: function() {
    return {
      description: "",
      number_of_seats: "0",
      lat: this.props.location.query.lat,
      lon: this.props.location.query.lon
    };
  },
  handleChange(attribute, event) {
    this.setState({[attribute]: event.target.value});
  },
  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    BenchActions.createBench(this.state);
    this.setState(this.getInitialState());
  },
  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>Description:
        <textarea onChange={this.handleChange.bind(null, 'description')}
                     value={this.state.description}></textarea>
      </label>
      <label>Number of Seats:
        <input onChange={this.handleChange.bind(null, 'number_of_seats')}
                  value={this.state.number_of_seats}></input>
      </label>
      <label>Latitude & Longitude:
        <input disabled value={this.state.lat}></input>
                <input disabled value={this.state.lon}></input>
      </label>
      <button type="submit">Submit Bench</button>
    </form>;
  }
});

module.exports = BenchForm;
