const React = require("react");
const ReactDOM = require("react-dom");

const Search = require('./components/search');

const BenchStore = window.BenchStore = require('./stores/bench_store');
// const BenchApi = window.BenchApi = require('./util/bench_api_util');
//const BenchActions = window.BenchActions = require('./actions/bench_actions');

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Search/>, root);
});
