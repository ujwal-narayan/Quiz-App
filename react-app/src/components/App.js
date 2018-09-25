import React, { Component } from 'react';
import NewQuestion from './NewQuestion';
import DeleteQuestion from './DeleteQuestion';
import ViewQuestions from './ViewQuestions' ;
import DeletePerson from './DeletePerson';
import ViewPeople from './ViewPeople';
import EditPerson from './EditPerson';
import NewPerson from './NewPerson';

import Home from './Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>React App</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/NewPerson'}>Create Person</Link></li>
                  <li><Link to={'/EditPerson'}>Edit Person</Link></li>
                  <li><Link to={'/DeletePerson'}>Delete Person</Link></li>
                  <li><Link to={'/ViewPeople'}>View People</Link></li>
                  <li><Link to={'/NewQuestion'}>Create Question</Link></li>
                  <li><Link to={'/EditQuestion'}>Edit Question</Link></li>
                  <li><Link to={'/DeleteQuestion'}>Delete Question</Link></li>
                  <li><Link to={'/ViewQuestions'}>View Questions</Link></li>
                </ul>
              </div>
            </nav>
            <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/NewPerson' component={NewPerson} />
                 <Route exact path='/EditPerson' component={EditPerson} />
                 <Route exact path='/DeletePerson' component={DeletePerson} />
                 <Route exact path='/ViewPeople' component={ViewPeople} />
                 <Route exact path='/NewQuestion' component={NewQuestion} />
                 <Route exact path='/EditQuestion' component={EditPerson} />
                 <Route exact path='/DeleteQuestion' component={DeleteQuestion} />
                 <Route exact path='/ViewQuestions' component={ViewQuestions} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
