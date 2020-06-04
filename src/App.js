import React from 'react';
import Log from './Component/Login'
import SignUp from './Component/sign-up'

import View from './Component/All-reimbursement'


import Nav from './Component/Nav'
import Parent from './Component/parent'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';



function App(props) {
  console.log(props)
  return (
    
    <Router>
    <div className="App">
      <Nav />
     
      <Switch>
     < Route path="/" exact component={Log} />
     
     < Route path="/sign-up" exact component={SignUp} />
     
     < Route path="/view" exact component={View} />
     
     
     < Route path="/parent/:id/:name" component={Parent} />
    
    
     </Switch>
     
    </div>
    </Router>
  );
}

export default App;
