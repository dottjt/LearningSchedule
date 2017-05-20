import * as React from 'react';
import axios from 'axios';

import './css/st__login.css';

class STLogin extends React.Component<any, undefined>  {

  constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
      const email = (this.refs.email as HTMLInputElement);
      const password = (this.refs.password as HTMLInputElement);
      // const creds = { email: email.value.trim(), password: password.value.trim() }
      
      return axios({
          method: 'post',
          url: 'auth/login',
          data: {
              email: email,
              password: password
          }
      });
  }

  render() {

    // const { errorMessage } = this.props 

    return (
      <form className="st__login__container" method="post" action="auth/login">
        <input type='text' ref='email' name='email' className="form-control st__login__email" placeholder='Email'/>
        <input type='password' ref='password' name='password' className="form-control st__login__password" placeholder='Password'/>
        <button type="submit" className="st__login__submit btn btn-primary" onClick={(event) => this.handleClick(event)}>
          Login
        </button>

        {/*{errorMessage &&
          <p>{errorMessage}</p>
        }*/}
      </form>
    )
  }
}


export default STLogin; 



/*
import * as React from 'react';
import './css/st__login.css';

class STLogin extends React.Component<any, undefined>  {


    // handleClick(event) {
    //     const email = (this.refs.email as HTMLInputElement);
    //     const password = (this.refs.password as HTMLInputElement);
    //     const creds = { email: email.value.trim(), password: password.value.trim() }
        
    //     console.log('component sending')

    //     this.props.onLoginClick(creds);
    // }

  render() {

    // const { errorMessage } = this.props

    return (
      <div className="st__login__container">
        <input type='text' ref='email' className="form-control st__login__email" placeholder='Email'/>
        <input type='password' ref='password' className="form-control st__login__password" placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Login
        </button>

        {errorMessage &&
          <p>{errorMessage}</p>
        }
      </div>
    )
  }
}


export default STLogin; 

*/