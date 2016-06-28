const React = require("react");
const ReactDOM = require("react-dom");
const BenchStore = require("../stores/bench_store");
const BenchActions = require("../actions/bench_actions");
const hashHistory = require('react-router').hashHistory;

const BenchMap = React.createClass({
  getInitialState: function() {
    return {
      markers: []
    };
  },
  componentDidMount() {
    this.storeListener = BenchStore.addListener(this._onChange);
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', this.handleIdle);
    this.map.addListener('click', this.handleClick);
  },
  componentWillUnmount() {
    BenchStore.remove(this.storeListener);
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
  handleClick(event) {
    let lat = event.latLng.lat();
    let lon = event.latLng.lng();
    hashHistory.push({
      pathname: "benches/new",
      query: {lat: lat, lon: lon}
    });
  },
  render() {
    return <div className="map" ref="map"/>;
  }
});

module.exports = BenchMap;
