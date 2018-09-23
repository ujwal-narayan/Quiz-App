import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons :  [
      {name : "Ujwal" , age : 18 },
      {name : "Rohan" , age : 20},
      {name : "Divyesh" , age : 19}
    ]
  }

  switchHandler = () => {
    this.setState({
      persons :  [
        {name : "Ujwal" , age : 18 },
        {name : "Rohan Bondra" , age : 20},
        {name : "Divyesh" , age : 20}
      ]
    })
  }
  nameChangeHandler = (newName) => {
    this.setState({
      persons :  [
        {name : newName , age : 18 },
        {name : "Rohan Bondra" , age : 20},
        {name : "Divyesh" , age : 20}
      ]
    })
  }
  }
  
  render() {
    return (
      <div className="App">
        <h1> Hi It's a me Reacc </h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <button onClick={this.switchHandler}> Switch </button>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change= {this.nameChangeHandler} >My Hobbies : Comp Programming </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
