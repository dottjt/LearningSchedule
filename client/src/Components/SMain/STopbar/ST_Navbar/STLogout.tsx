import * as React from 'react';
import axios from 'axios';

import './css/st__login.css';


class STLogout extends React.Component<any, undefined>  {

  constructor() {
      super();
      this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick = (event) => {
    console.log('logout');
    return axios.get('auth/logout');
  }

  render() {
    
    return (
      <form method="post" action="auth/logout"> 
        <button type="submit" className="btn btn-primary" onClick={(event) => this.onLogoutClick(event)}>
          Logout
        </button>
      </form>
    )
  }

}

export default STLogout;