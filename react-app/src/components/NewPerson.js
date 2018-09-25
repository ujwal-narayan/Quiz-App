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
      username_null :false,
      password_null : false,
      passwords_donotmatch : false,
      passwordre : "",
      submitted: false,
      errors : false,
      
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleLChange = this.handleLChange.bind(this);
    this.handleUChange = this.handleUChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.handlePrChange = this.handlePrChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    if(this.state.formData.username !=="")
    {
      
      if(this.state.formData.password !=="")
      {
      
        if(this.state.passwordre === this.state.formData.password)
        {
          
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
            this.setState({passwords_donotmatch:false});
        }
        else
      {
        this.setState({passwords_donotmatch:true});
      }
      this.setState({password_null:false});

      }
      else

      {
        this.setState({password_null:true});
      }
      
   
      this.setState({username_null:false});
      }
      else

      {
        this.setState({username_null:true});
      }
    

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
  handlePrChange(event) {
    this.state.passwordre = event.target.value;
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
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" value={this.passwordre} onChange={this.handlePrChange}/>
            </div>

                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

       
       {this.state.username_null &&
         <div>
         <h2>
         {alert(" Username cannot be empty.Retry")}
          
         </h2>
       </div>
        }
         {this.state.password_null &&
         <div>
         <h2>
           {alert("Password cannot be empty. Retry")}
         </h2>
       </div>
        }
         {this.state.passwords_donotmatch &&
         <div>
         <h2>
           {alert("Passwords do not match, Retry")}
           
         </h2>
       </div>
        }
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