import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Person from './components/Person';
import Comment from './components/Comment';

class App extends Component {
    
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Person' component={Person} />
                    <Route path='/:comment_id' component={Comment} />
                </Switch>
                
            </div>
        </BrowserRouter>
    );
  }
}

export default App;