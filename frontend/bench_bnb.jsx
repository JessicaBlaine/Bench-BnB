const React = require("react");
const ReactDOM = require("react-dom");

const BenchIndex = require('./components/bench_index');

// const BenchStore = window.BenchStore = require('./stores/bench_store');
// const BenchApi = window.BenchApi = require('./util/bench_api_util');
//const BenchActions = window.BenchActions = require('./actions/bench_actions');

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<BenchIndex/>, root);
});
