// import * as React from 'react';
// // import { Link } from 'react-router-dom';
// import './css/sm__title.css';


// class STAddScheduleRedirect extends React.Component<STAddScheduleRedirectPassedProps, STAddScheduleRedirectState> {

//   constructor() {
//     super();
//     this.state = {redirect: false};
//   	this.handleOnClick = this.handleOnClick.bind(this);

//   }

//   handleOnClick = () => {

//     scroll(0,0);

//     this.setState({redirect: true});
    
//   }

//   render() {

//     let { user, schedule } = this.props; 


//     if (this.state.redirect) {
//       return <a className="sm__title__a--link" href={"/" + user.get('username') + "/schedule/" + schedule.get('schedule_url')} />;
//     }
    
//     return  <a className="st__navbar__add button" onClick={() => this.showPopUpFunction()}>New Schedule <span className="st__navbar__add__plus">+</span></a>;
//   }

// }   

// export default STAddScheduleRedirect;