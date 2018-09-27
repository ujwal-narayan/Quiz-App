import React, { Component } from 'react';
import './NewQuestion.css';

class NewQuestion extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        Question: "",
        A:"",
        B:"",
        C:"",
        D:"",
        CorrectA: false,
        CorrectB : false,
        CorrectC : false,
        CorrectD : false,
        Quiz : "",
        Points : 0
      },
      submitted: false,
      error : false
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerAChange = this.handleAnswerAChange.bind(this);
    this.handleAnswerBChange = this.handleAnswerBChange.bind(this);
    this.handleAnswerCChange = this.handleAnswerCChange.bind(this);
    this.handleAnswerDChange = this.handleAnswerDChange.bind(this);
    this.handleAnswerACChange = this.handleAnswerACChange.bind(this);
    this.handleAnswerBCChange = this.handleAnswerBCChange.bind(this);
    this.handleAnswerCCChange = this.handleAnswerCCChange.bind(this);
    this.handleAnswerDCChange = this.handleAnswerDCChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handlePPChange = this.handlePPChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/questions', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status == 200)
          {
            this.setState({submitted: true});
            this.setState({error : false});
          }
        else
        {
          this.setState({submitted: false});
          this.setState({error : true});
        }
      });
  }

  handleQuestionChange(event) {
    this.state.formData.Question = event.target.value;
    
  }
  handleAnswerAChange(event) {
    this.state.formData.A = event.target.value;
  }
  handleAnswerBChange(event) {
    this.state.formData.B = event.target.value;
  }
  handleAnswerCChange(event) {
    this.state.formData.C = event.target.value;
  }
  handleAnswerDChange(event) {
    this.state.formData.D = event.target.value;
  }
  handleAnswerACChange(event) {
    this.state.formData.CorrectA = !(this.state.formData.CorrectA);
  }
  handleAnswerBCChange(event) {
    this.state.formData.CorrectB= !(this.state.formData.CorrectB);
  }
  handleAnswerCCChange(event) {
    this.state.formData.CorrectC = !(this.state.formData.CorrectC);
  }
  handleAnswerDCChange(event) {
    this.state.formData.CorrectD = !(this.state.formData.CorrectD);
  }

  
  handleCChange(event) {
    this.state.formData.Quiz = event.target.value;
  }
  handlePPChange(event) {
    this.state.formData.Points = event.target.value;
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
                <label> Question</label>
                <input type="text" className="form-control" value={this.state.question} onChange={this.handleQuestionChange}/>
            </div>
            <div className="form-group">
                <label>Option A </label>
                <input type="text" className="form-control" value={this.state.a} onChange={this.handleAnswerAChange}/>
            </div>
            <div className="form-group">
                <label>Option B</label>
                <input type="text" className="form-control" value={this.state.br} onChange={this.handleAnswerBChange}/>
            </div>
            <div className="form-group">
                <label>Option C</label>
                <input type="text" className="form-control" value={this.state.c} onChange={this.handleAnswerCChange}/>
            </div>
            <div className="form-group">
                <label>Option D</label>
                <input type="text" className="form-control" value={this.state.d} onChange={this.handleAnswerDChange}/>
            </div>
            <div className="form-group">
                <label>Tick the right answers</label>
                <div>
                <label>A</label>
                <input type="checkbox" className="form-control" value={this.state.correcta} onChange={this.handleAnswerACChange}/>
                <br/>
                </div>
                <div>
                <label>B</label>
                <input type="checkbox" className="form-control" value={this.state.correctb} onChange={this.handleAnswerBCChange}/>
                <br/>
                </div>
                <div>
                <label>C</label>
                <input type="checkbox" className="form-control" value={this.state.correctc} onChange={this.handleAnswerCCChange}/>
                <br/>
                </div>
                <div>
                <label>D</label>
                <input type="checkbox" className="form-control" value={this.state.correctd} onChange={this.handleAnswerDCChange}/>
                <br/>
                </div>
            </div>
            <div className="form-group">
                <label>Quiz ID</label>
                <input type="number" className="form-control" value={this.state.quiz} onChange={this.handleCChange}/>
            </div>
            <div className="form-group">
                <label>Points</label>
                <input type="number" className="form-control" value={this.state.points} onChange={this.handlePPChange}/>
            </div>
                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2>
              New question successfully added.
            </h2>
          </div>
        }
        {this.state.error &&
          <div>
            <h2>
              Quiz ID does not exist. Please refer to View Quizzes and enter a valid quiz id
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
export default NewQuestion;