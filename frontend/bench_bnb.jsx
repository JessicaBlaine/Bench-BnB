const React = require("react");
const ReactDOM = require("react-dom");
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const Search = require('./components/search');
const BenchForm = require('./components/bench_form');

const BenchStore = window.BenchStore = require('./stores/bench_store');
const BenchApi = window.BenchApi = require('./util/bench_api_util');
//const BenchActions = window.BenchActions = require('./actions/bench_actions');

const App = React.createClass({

  render() {
    return <div>
      <header><h1>Bench BnB</h1></header>
      {this.props.children}
    </div>;
  }
});

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="benches/new" component={BenchForm}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(appRouter, root);
});
