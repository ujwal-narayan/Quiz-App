import React, { Component } from 'react';
import NewQuestion from './NewQuestion';
import DeleteQuestion from './DeleteQuestion';
import ViewQuestions from './ViewQuestions' ;
import DeletePerson from './DeletePerson';
import ViewPeople from './ViewPeople';
import EditPerson from './EditPerson';
import NewPerson from './NewPerson';
import Login_r from './Login_r';
import Home from './Home';
import Quiz from './mcq';
import NewQuiz from './NewQuiz'
import DeleteQuiz from './DeleteQuiz'
import ViewQuizzes from './ViewQuizzes'
import QuizTaker from './TakeQuiz'
import AnswerQuiz from './AnswerQuiz'
import Leaderboard from './Leaderboard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function logout() {
  window.location.reload();
  localStorage.removeItem('username');
}
class App extends Component {
 
  render() {
    var login = localStorage.getItem('username');
    var loginButton1 , loginButton2;
    if(login !=undefined && login !=null && login !="undefined")
    {
      console.log("hI")
      console.log(login)
      
      
      if(login === "admin"){
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
                  <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Person <span className="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><Link to={'/NewPerson'}>Create Person</Link></li>
                      <li><Link to={'/DeletePerson'}>Delete Person</Link></li>
                      <li><Link to={'/ViewPeople'}>View People</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Questions <span className="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><Link to={'/NewQuestion'}>Create Question</Link></li>
                      <li><Link to={'/DeleteQuestion'}>Delete Question</Link></li>
                      <li><Link to={'/ViewQuestions'}>View Questions</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Quizzes <span className="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><Link to={'/NewQuiz'}>Create Quiz</Link></li>
                      <li><Link to={'/DeleteQuiz'}>Delete Quiz</Link></li>
                      <li><Link to={'/ViewQuizzes'}>View Quizzes</Link></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">  
                 <li onClick = {() => logout()} ><Link to ={'/'}><span  className="glyphicon glyphicon-log-out"></span> Log out</Link></li>
                  
                </ul>
              </div>
            </nav>  
            <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/NewPerson' component={NewPerson} />
                 <Route exact path='/DeletePerson' component={DeletePerson} />
                 <Route exact path='/ViewPeople' component={ViewPeople} />
                 <Route exact path='/NewQuestion' component={NewQuestion} />
                 <Route exact path='/DeleteQuestion' component={DeleteQuestion} />
                 <Route exact path='/ViewQuestions' component={ViewQuestions} />
                 <Route exact path='/Login_r' component={Login_r} />
                 <Route exact path='/Quiz' component={Quiz} />
                 <Route exact path='/NewQuiz' component={NewQuiz} />
                 <Route exact path='/DeleteQuiz' component={DeleteQuiz} />
                 <Route exact path='/ViewQuizzes' component={ViewQuizzes} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  } 
  else
  {
    return (
      <div>
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to={'/'}>Quiz App</Link>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to={'/'}>Home</Link></li>
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Quiz <span className="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><Link to={'/QuizTaker'}>Take a quiz</Link></li>
                    <li><Link to={'/ViewQuestions'}>View Questions</Link></li>
                    <li><Link to={'/Leaderboard'}>Leaderboard</Link></li>


                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">  
               <li onClick = {() => logout()}><Link to ={'/'}><span className="glyphicon glyphicon-log-out"></span> Log out</Link></li>
                
              </ul>
            </div>
          </nav>
          <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/NewPerson' component={NewPerson} />
               <Route exact path='/DeletePerson' component={DeletePerson} />
               <Route exact path='/ViewPeople' component={ViewPeople} />
               <Route exact path='/NewQuestion' component={NewQuestion} />
               <Route exact path='/DeleteQuestion' component={DeleteQuestion} />
               <Route exact path='/ViewQuestions' component={ViewQuestions} />
               <Route exact path='/Login_r' component={Login_r} />
               <Route exact path='/Quiz' component={Quiz} />
               <Route exact path='/QuizTaker' component={QuizTaker} />
               <Route exact path = '/quizzes/:id' component={AnswerQuiz} />
               <Route exact path = '/leaderboard' component={Leaderboard} />

          </Switch>
        </div>
      </Router>
    </div>
  );

  }
}
    else
    {
      loginButton2 = <li><Link to={'/Login_r'}><span className="glyphicon glyphicon-log-in"></span> Log in </Link></li>

      
      return (
      <div>
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to={'/'}>React App</Link>
              </div>
              <ul className="nav navbar-nav navbar-right">  
              <li><Link to={'/NewPerson'}>Sign Up</Link></li>
              {loginButton1}
              {loginButton2 }
                
              </ul>
            </div>
          </nav>
          <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/Login_r' component={Login_r} />
               <Route exact path='/NewPerson' component={NewPerson} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
    }
   
     
} 

export default App;
