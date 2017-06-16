
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import './css/si.css';


class SIRedirect extends React.Component<SIRedirectPassedProps, SIRedirectState> {

  constructor() {
    super();
    this.state = {redirect: false};
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    let { requestRemoveSchedule, requestRemoveAllUpdates, schedule_id } = this.props;
    console.log(schedule_id);
    console.log('remove sent');
    requestRemoveSchedule(schedule_id);
    requestRemoveAllUpdates();

    scroll(0,0);
    this.setState({redirect: true});
  }

  render() {

    let {user} = this.props; 

    if (this.state.redirect) {
      return <Redirect className="si__title__remove__schedule btn-danger btn-sm" to={"/" + user.get('username')} />;
    }

    return <button className="si__title__remove__schedule btn-danger btn-sm" onClick={this.handleOnClick} type="button"><span className="si__title__remove__schedule__text">Delete Schedule</span><span className="si__title__remove__schedule__x">   X</span></button>;
  }

}   

export default SIRedirect;