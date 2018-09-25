import React, { Component } from 'react';
import './NewPerson.css';

class NewPerson extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        username:"",
        password: "",

      },
      submitted: false,
      errors : false,
      
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleLChange = this.handleLChange.bind(this);
    this.handleUChange = this.handleUChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/people', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          {
            this.setState({errors: false});
            this.setState({submitted: true});

          }
        else if(response.status == 300)
        {
          this.setState({errors: true});
          this.setState({submitted: false});

        }

        
      });
  }

  handleFChange(event) {
    this.state.formData.firstName = event.target.value;
  }
  handleLChange(event) {
    this.state.formData.lastName = event.target.value;
  }
  handlePChange(event) {
    this.state.formData.password = event.target.value;
  }
  handleUChange(event) {
    this.state.formData.username = event.target.value;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create a New Person</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" value={this.state.firstName} onChange={this.handleFChange}/>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" value={this.state.lastName} onChange={this.handleLChange}/>
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" value={this.state.username} onChange={this.handleUChange}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={this.handlePChange}/>
            </div>

                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2>
              New person successfully added.
            </h2>
          </div>
        }
        {this.state.errors &&
          <div>
            <h2>
             Username is already taken. Try another username
            
            </h2>
          </div>
        }


      </div>
    );
  }
}

export default NewPerson;