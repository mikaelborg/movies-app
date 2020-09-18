import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return <div className="App">
      <Router>
        <Switch>
          <Route path="/movies-app/" exact component={MovieList}/>
          <Route path="/movies-app/:key" component={MovieDetail}/>
        </Switch>
      </Router>
    </div>
  }
}

export default App;
