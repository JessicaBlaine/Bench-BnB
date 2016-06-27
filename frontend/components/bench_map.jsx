const React = require("react");
const ReactDOM = require("react-dom");
const BenchStore = require("../stores/bench_store");
const BenchActions = require("../actions/bench_actions");

const BenchMap = React.createClass({
  getInitialState: function() {
    return {
      markers: []
    };
  },
  componentDidMount() {
    BenchStore.addListener(this._onChange);
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', this.handleIdle);
  },
  handleIdle() {
    let bounds = this.map.getBounds();
    bounds = {
            northEast: {
              lat: bounds.getNorthEast().lat(),
              lng: bounds.getNorthEast().lng()
            },
            southWest: {
              lat: bounds.getSouthWest().lat(),
              lng: bounds.getSouthWest().lng()
            }
          };
    BenchActions.fetchAllBenches(bounds);
  },
  _onChange() {
    this.state.markers.forEach(marker => {
      marker.setMap(null);
    });

    this.setState ({ markers: BenchStore.all().map(bench => {
      return new google.maps.Marker({
        position: { lat: bench.lat, lng: bench.lon },
        map: this.map
      });
    })
    });
  },
  render() {
    return <div className="map" ref="map"/>;
  }
});

module.exports = BenchMap;
