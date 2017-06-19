import * as React from 'react';
// import { Link } from 'react-router-dom';
import './css/sm__title.css';


class SMTitleScrollRedirect extends React.Component<SMTitleScrollRedirectPassedProps, SIRedirectState> {

  constructor() {
    super();
    this.state = {redirect: false};
  	this.handleOnClick = this.handleOnClick.bind(this);

  }

  handleOnClick = () => {

    scroll(0,0);

    this.setState({redirect: true});
    
  }

  render() {

    let { user, schedule } = this.props; 


    if (this.state.redirect) {
      return <a className="sm__title__schedule__title" href={"/" + user.get('username') + "/schedule/" + schedule.get('schedule_url')} />;
    }
    
    return <a className="sm__title__schedule__title" onClick={this.handleOnClick} type="button">{schedule.get('schedule_title')}</a>;
  }

}   

export default SMTitleScrollRedirect;