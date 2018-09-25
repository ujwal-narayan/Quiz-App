import React, { Component } from 'react';
import './DeleteQuestion.css';

class DeleteQuestion extends Component {
  constructor() {
    super();
    this.state = {
      data: [], 
      submitted : false,
      delete_id : {
        id:0
      }
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/questions/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }
  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/questions/' + this.state.delete_id.id , {
     method: 'DELETE',
     //body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
  }

  handleFChange(event) {
    this.state.delete_id.id = event.target.value;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Delete a Person</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <table className="table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>{this.state.data.map((item, key) =>
                    <tr key = {key}>
                        <td ><input type="radio" value = {item.id} name = "radio"  onChange={this.handleFChange}/></td>
                        <td>{item.id}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.city}</td>
                    </tr>
                  
              )}
            </tbody>
        </table>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </div>
    );
  }
}

export default DeleteQuestion;