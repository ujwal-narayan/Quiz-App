import React, { Component } from 'react';
import './NewQuestion.css';

class NewQuestion extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        Question: "",
        Answer: "",
        By: "",
        Likes : 0,
        Right : 0,
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
    fetch('http://localhost:8080/questions', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
  }

  handleQuestionChange(event) {
    this.state.formData.Question = event.target.value;
    
  }
  handleAnswerChange(event) {
    this.state.formData.Answer = event.target.value;
  }
  handleCChange(event) {
    this.state.formData.By = event.target.value;
  }
 

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create a New Question</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label> Question</label>
                <input type="text" className="form-control" value={this.state.question} onChange={this.handleQuestionChange}/>
            </div>
            <div className="form-group">
                <label>Answer</label>
                <input type="text" className="form-control" value={this.state.answer} onChange={this.handleAnswerChange}/>
            </div>
            <div className="form-group">
                <label>By</label>
                <input type="text" className="form-control" value={this.state.by} onChange={this.handleCChange}/>
            </div>
                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2>
              New question successfully added.
            </h2>
             This has been printed using conditional rendering.
          </div>
        }

      </div>
    );
  }
}

export default NewQuestion;