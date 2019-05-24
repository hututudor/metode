import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Greedy from './Greedy';
import Backtracking from './Backtracking';
import Dynamic from './Dynamic.jsx';
import Problems from './Problems';
import Problem from './Problem';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/m/greedy" component={Greedy} />
          <Route exact path="/m/backtracking" component={Backtracking} />
          <Route exact path="/m/dynamic" component={Dynamic} />
          <Route exact path="/problems" component={Problems} />
          <Route exact path="/p/:id" component={Problem} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Content;
