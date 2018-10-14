import React, { Component } from 'react';
import NewComponent from './NewComponent';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Quizzing</h1>
        </header>
        <NewComponent text={"Welcome to the Quiz App. "}/>
        <NewComponent text={"This app was made as  part of the SSAD assignment "}/>
        <NewComponent text={"Made with <3 By ,  Ujwal Narayan"}/>
      </div>
    );
  }
}

export default Home;
