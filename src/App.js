import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

class App extends Component {

  render() {
    return (
      <Router>
        <PageWrapper>
            <Route 
              exact={true}
              path="/"
              component={Home}
            />

            <Route 
            path="/about"
            component={About}
            />

            <Route
            path="/contact"
            component={Contact}
            />

        </PageWrapper>
      </Router>
      
    );
  }
}

export default App;
