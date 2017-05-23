/// <reference path="./interfaces_nav.d.ts"/>

import * as React from 'react';
import { Link } from 'react-router-dom';
// import { Map } from 'immutable';

import STLogin from "./STLogin";
import STLogout from "./STLogout";
var getSlug = require('speakingurl');

// import STAddScheduleRedirect from "./STAddScheduleRedirect";

import './css/st__navbar.css';
var uuid = require('uuid');




class ST_Navbar extends React.Component<ST_NavbarProps & ST_NavbarPassedProps, ST_NavbarState> {


// own props - user, summaries, schedules, tags, updates 
// own props - requestAddSchedule, requestAddAvatar
// passed props - NA 


/*
          COMPONENT STATE LOGIC
                                      */


    constructor() {
        super();
        this.changeUuid = this.changeUuid.bind(this);
        this.addSchedule = this.addSchedule.bind(this);
        this.loginStatus = this.loginStatus.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.showPopUpFunction = this.showPopUpFunction.bind(this);

        this.state = { url_slug: uuid(), showProfileDrop: false, showPopup: false };
    }

   getCookie(name) {
            var value = "; " + document.cookie;
            var parts: any = value.split("; " + name + "=");
            if (parts.length == 2)  { 
                return parts.pop().split(";").shift(); 
            } else {
                return "";
            }
    }

    loginStatus() {
        let sessionCookieValue;
        
        sessionCookieValue = this.getCookie('yolo'); // might need to make [0] once we delete cookies :)

        if ( this.props.user.get('summaries_id') === sessionCookieValue) {
            return true;
        } else {
            return false;   
        }
    }

    changeUuid() { 
        let uuid_var = uuid(); 
        this.setState({ url_slug: uuid_var}) 
    }

    showProfileDropdown(e) {
        e.preventDefault();
        this.setState({ showProfileDrop: !this.state.showProfileDrop})
    }

    showPopUpFunction() {
        this.setState({ showPopup: !this.state.showPopup})
    }

    addSchedule = (e) => {    

            if (e.keyCode == 27) {
                this.setState({ showPopup: !this.state.showPopup});
            } 


            if (e.key === 'Enter') {

                let username = this.props.user.get('username');
                let schedule_title = (this.refs.schedule_title as HTMLInputElement).value;
                console.log(schedule_title)
                let schedule_url = getSlug(schedule_title);

                let url = this.state.url_slug;
                let splitUrl = url.split('-');
                let schedule_id = splitUrl[4]; 
                let updates_id = splitUrl[0];
                let tags_id = splitUrl[1] + splitUrl[2];

                this.changeUuid(); 

                let data = {
                        schedule_url,
                        username,
                        schedule_title,
                        schedule_id,
                        updates_id,
                        tags_id
                };

                this.props.requestAddSchedule(data); 
                window.location.href = "/" + username + "/schedule/" + schedule_url;
            }   

    }


    render() {



/*
            COMPONENT LOGIC
                                      */


        // import props and state 
        var login_status_var, removeContainer, image, srci;
        var { user } = this.props; 
        // var { url_slug } = this.state;


        removeContainer = location.pathname.split('/')[2];
        // okay, this is what gets rid of the STopbar when it goes to single view. 
        // ["", "juliusreade", "schedule", "when-react-redux-finally-makes-sense"]


        if (user.get('summaries_id') !== undefined && document.cookie.length > 0) {
            login_status_var = this.loginStatus();
        } 

        if (user.get('avatar_url') !== undefined) {
           srci = "/avatars/" + user.get('avatar_url');
           image = <div className="st__navbar__profile__container">
                        <a  onClick={(e) => this.showProfileDropdown(e)}><img className="st__navbar__profile" src={srci} alt=""/></a>

                        <div id={`${this.state.showProfileDrop}-update_profile`}>
                            <ul className="st__navbar__profile__ul">
                                <Link to={"/" + user.get('username')} onClick={(e) => this.showProfileDropdown(e)} ><li className="st__navbar__profile__li">profile.</li></Link>
                                <Link to={"/" + user.get('username') + "/profile"} onClick={(e) => this.showProfileDropdown(e)} ><li className="st__navbar__profile__li">settings.</li></Link>
                                <li className="st__navbar__profile__li" onClick={(e) => this.showProfileDropdown(e)}>published.</li>
                                <li className="st__navbar__profile__li" onClick={(e) => this.showProfileDropdown(e)}><STLogout/></li>
                            </ul>
                        </div>
                    </div>

        }  
    

        return (




/*
            COMPONENT VIEW
                                      */



/*
            COMPONENT NAVBAR 
                                      */


            <nav className={`navbar navbar-default st__navbar__container ${removeContainer}`}>
                        


                        {/* STopbar Learning Schedule */}
                            {login_status_var ? (
                                <Link className="navbar-brand" to={"/" + user.get('username')}><h1 className="st__navbar__brand">Learning Schedule</h1></Link> 
                                ) : (
                                <Link className="navbar-brand" to={"/" + user.get('username')}><h1 className="st__navbar__brand">Learning Schedule</h1></Link> 
                                )
                            }           
                        


                        <div className='navbar-form st__navbar__form__container'>

                            {/* STopbar Login Authentication */}
                                        {/*<STLogout/> */}
                                {login_status_var ? ( 
                                        <div></div> 
                                    ) : (
                                        <STLogin/>
                                    )
                                }

                        </div>



                            {/* STopbar Profile */}
                                {login_status_var ? (
                                    image
                                    ) : (
                                    <a><h3 className="st__navbar__profile"></h3></a>
                                    )
                                }                            



                        {/* STopbar Add Schedule */}
                            {login_status_var ? (
                                <a className="st__navbar__add__container"><div className="st__navbar__add button" onClick={() => this.showPopUpFunction()}>New Schedule <span className="st__navbar__add__plus">+</span></div></a>
                                //    <STAddScheduleRedirect onClick={() => this.showPopUpFunction()}/></div>
                                // <div className="st__navbar__add__container"><Link className="st__navbar_st__navbar__add__container_add" onClick={() => this.addSchedule(url_slug, user.get('username'))} to={"/" +  user.get('username') + "/schedule/" + url_slug}>New Schedule <span className="st__navbar__add__plus">+</span></Link></div>

                                ) : (
                                <a><h3 className="st__navbar__add"></h3></a>
                                )
                            }               

                        {/* STopbar Add Schedule */}

                    <div className={`overlay-${this.state.showPopup}`}  >
                        <div className="popup__container">
                            <div className="popup__top">
                                {/*<h2 className="popup__title">New Schedule</h2>*/}
                                <a className="popup__close" onClick={() => this.showPopUpFunction()}>&times;</a>
                            </div>

                            {/*<label className="popup__title">Schedule Title.</label>*/}

                            <div className="popup__input__title__container">
                                <input className="popup__input__title" name="schedule_title" ref="schedule_title" placeholder="Schedule Title." onKeyPress={(e) => this.addSchedule(e)} />
                            </div>

                            {/*<div className="popup__textarea__summary__container">
                                <textarea className="popup__textarea__summary" ref="schedule_summary" placeholder="Schedule Summary."></textarea>
                            </div>
*/}
                            {/*<div className="popup__submit__container">
                                <a className="popup__submit">create <span className="popup__submit__plus"></span> + </a>
                            </div>*/}

                        </div>
                    </div>
             
            </nav>


        )
    };
};







/*
           COMPONENT CONTAINER
                                        */

   
import { requestAddSchedule } from '../../../../arcss/schedules_ar';
// import { requestLogin, requestLogout } from '../../../../arcss/auth_ar';



import { connect } from 'react-redux';

export const mapDispatchToProps = (dispatch) => {
    return {
        requestAddSchedule: (data) => dispatch(requestAddSchedule(data)),

        // requestLogin: (cred) => dispatch(requestLogin(cred)),
        // requestLogout: () => dispatch(requestLogout())
    };
};

export default connect<{}, {}, ST_NavbarPassedProps>(undefined, mapDispatchToProps)(ST_Navbar as any);
