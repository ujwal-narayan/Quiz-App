import React, { Component } from 'react';
import './DeleteQuestion.css';

class AnswerQuiz extends Component {
  constructor() {
    super();
    this.state = {
      data: [], 
      len : 0,
      submitted : false,
      errors : false,
      score : 0
      
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
      console.log(this.props.match.params.id);
    const request = new Request('http://127.0.0.1:8080/quizquestions/'+this.props.match.params.id);
    fetch(request)
      .then(response => response.json())
        .then(data => { console.log(data);this.setState({data: data}); this.setState({len:data.length})});
  }
  handleSubmit (event) {
    event.preventDefault();
    var score=0;
    for(var i=0;i<this.state.len;i++)
    {
        var optiona = document.getElementById('a'+this.state.data[i].id).checked?true:false;
        var optionb = document.getElementById('b'+this.state.data[i].id).checked?true:false;
        var optionc = document.getElementById('c'+this.state.data[i].id).checked?true:false;
        var optiond = document.getElementById('d'+this.state.data[i].id).checked?true:false;
        if(this.state.data[i].correcta != optiona)
            continue;
            if(this.state.data[i].correctb != optionb)
            continue;
            if(this.state.data[i].correctc != optionc)
            continue;
            if(this.state.data[i].correctd != optiond)
            continue;    
        score+=this.state.data[i].actualpoints;
    }
    this.setState({score:score});   
    var sender = {
        username: localStorage.getItem('username'),
        points : score ,
        quiz : this.props.match.params.id
    };
   
    console.log(sender)

    fetch('http://localhost:8080/answered', {
        method: 'POST',
        body: JSON.stringify(sender),
      })
         .then(response => {
           if(response.status == 200 )
             {
               this.setState({errors: false});
               this.setState({submitted: true});
   
             }
           else if(response.status == 301)
           {
             this.setState({errors: true});
             this.setState({submitted: false});
   
           }
   
           
         });
    console.log("Score=",score);
  }

  handleFChange(event) {
    this.state.delete_id.id = event.target.value;
  }
  render() {
    var login = localStorage.getItem('username');
    if(login != undefined && login != null){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Answer the questions</h1>
        </header>
        
        <form onSubmit={this.handleSubmit}>
          <table className="table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th> Option A</th>
                <th> Correct  ?</th>
                <th> Option B</th>
                <th> Correct  ?</th>
                <th> Option C</th>
                <th> Correct  ?</th>
                <th> Option D</th>
                <th> Correct  ?</th>
                
              </tr>
            </thead>
            <tbody>{this.state.data.map((item, key) =>
                    <tr key = {key}>
                        <td >{item.id}</td>
                        <td><a href={"http://127.0.0.1:3000/quizzes/"+item.id}>{item.question}</a></td>
                        <td> {item.a}</td>
                        <td><input type="checkbox" id={'a'+item.id}></input></td>
                        <td> {item.b}</td>
                        <td><input type="checkbox" id={'b'+item.id}></input></td>
                        <td> {item.c}</td>
                        <td><input type="checkbox" id={'c'+item.id}></input></td>
                        <td> {item.d}</td>
                        <td><input type="checkbox" id={'d'+item.id}></input></td>
                    </tr>
                  
              )}
            </tbody>
        </table>

        {console.log(this.state.len)}
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      <button onClick={()=>alert("Powerup 1 redirects you to a website which has all the answers")}><a href="https://www.google.com"> Powerup 1 </a></button>
      <button onClick={()=>alert("Powerup 2 redirects you to another website  which can tell you the nswer ")}><a href="http://dheerajpreddy.github.io/"> Powerup 2 </a></button>
      {this.state.submitted &&
          <div>
            <h2>
              Submitted.
              Your score is {this.state.score}
            </h2>
          </div>
        }
        {this.state.errors &&
          <div>
            <h2>
            Error , you can only give this quiz once
            </h2>
          </div>
        }
      </div>
      

      
    );
  }
  else
  {
    return(
      <div> <h1>OnlyLogged in users can take quizzes</h1></div>
    );
  }
}
}
export default AnswerQuiz;
