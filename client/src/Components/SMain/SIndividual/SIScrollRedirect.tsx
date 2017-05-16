import * as React from 'react';
import { Redirect } from 'react-router-dom';
import './css/si__topbar.css';


class SIScrollRedirect extends React.Component<SIScrollRedirectPassedProps, SIRedirectState> {

  constructor() {
    super();
    this.state = {redirect: false};
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {

    scroll(0,0);

    this.setState({redirect: true});
    
  }

  render() {

    let { user } = this.props; 

    if (this.state.redirect) {
      return <Redirect className="navbar-brand" to={"/" + user.get('username')} />;
    }
    
    return <a className="navbar-brand"><h1 className="si__navbar__brand" onClick={this.handleOnClick}>Learning Schedule</h1></a>;
  }

}   

export default SIScrollRedirect;