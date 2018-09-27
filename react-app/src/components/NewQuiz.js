import React, { Component } from 'react';
import './NewQuestion.css';

class NewQuiz extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        Name: "",
        Genre: "",
        Likes : 0,
      },
      submitted: false,
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/quizzes', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
  }

  handleQuestionChange(event) {
    this.state.formData.Name = event.target.value;
    
  }
  handleAnswerChange(event) {
    this.state.formData.Genre = event.target.value;
  }
  handleCChange(event) {
    this.state.formData.By = event.target.value;
  }
 

  render() {
    var login = localStorage.getItem('username');
    if(login == "admin"){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create a New Question</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label> Quiz Name </label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.handleQuestionChange}/>
            </div>
            <div className="form-group">
                <label>Genre</label>
                <input type="text" className="form-control" value={this.state.genre} onChange={this.handleAnswerChange}/>
            </div>
           
        
                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2>
              New Quiz successfully added.
            </h2>
          </div>
        }

      </div>
    );
  }
  else
  {
    return (
      <div> <h1> Only admin can create </h1></div>
    );
  }
}
}
export default NewQuiz;