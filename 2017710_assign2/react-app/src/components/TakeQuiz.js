import React, { Component } from 'react';
import './DeleteQuestion.css';

class QuizTaker extends Component {
  constructor() {
    super();
    this.state = {
      data: [], 
      len : 0,
      submitted : false,
      answers : [] ,
      
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/quizzes/');
    fetch(request)
      .then(response => response.json())
        .then(data => { this.setState({data: data}); this.setState({len:data.len})});
  }
  /*
  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/questions/' + this.state.selectq.id , {
     method: 'post',
     //body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
  }
*/
handleSubmit (event)
{

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
                <th> Genre</th>
                
              </tr>
            </thead>
            <tbody>{this.state.data.map((item, key) =>
                    <tr key = {key}>
                        <td >{item.id}</td>
                        <td><a href={"http://127.0.0.1:3000/quizzes/"+item.id}>{item.name}</a></td>
                        <td> {item.genre}</td>
                    </tr>
                  
              )}
            </tbody>
        </table>
        {console.log(this.state.len)}
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
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
export default QuizTaker;
