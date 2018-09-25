import React, { Component } from 'react';
import './NewPerson.css';

class Login_r extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
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
          event.preventDefault();
          fetch('http://localhost:8080/login', {
           method: 'POST',
           body: JSON.stringify(this.state.formData),
         })
            .then(response => {
              if(response.status >= 200 && response.status < 300)
                {
                  this.setState({errors: false});
                  this.setState({submitted: true});
                  sessionStorage.setItem('username',this.state.formData.username);
                  
      
                }
              else if(response.status == 300)
              {
                this.setState({errors: true});
                this.setState({submitted: false});
      
              }
      
              
            });
        
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
          <h1 className="App-title">Log In</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            
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
         
        {this.state.submitted &&
          <div>
            <h2>
             Logging you in 
            </h2>
          </div>
        }
        {this.state.errors &&
          <div>
            <h2>
             Incorrect Password
            
            </h2>
          </div>
        }


      </div>
    );
  }
}

export default Login_r;