/// <reference path="./interfaces_nav.d.ts"/>

import * as React from 'react';
import { Link } from 'react-router-dom';

import STLogin from "./STLogin";
import STLogout from "./STLogout";

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

        this.state = { url_slug: uuid() };
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
        this.setState({ url_slug: uuid_var }) 
    }

    addSchedule = (schedule_url, username) => {            
        this.changeUuid(); 
        this.props.requestAddSchedule(schedule_url, username);   
    }


    render() {



/*
            COMPONENT LOGIC
                                      */


        // import props and state 
        var login_status_var, removeContainer, image, srci;
        var { user } = this.props; 
        var { url_slug } = this.state;


        removeContainer = location.pathname.split('/')[2];
        // okay, this is what gets rid of the STopbar when it goes to single view. 
        // ["", "juliusreade", "schedule", "when-react-redux-finally-makes-sense"]


        if (user.get('summaries_id') !== undefined && document.cookie.length > 0) {
            login_status_var = this.loginStatus();
        } 

        if (user.get('avatar_url') !== undefined) {
           srci = "/avatars/" + user.get('avatar_url');
           image = <img className="st__navbar__profile" src={srci} alt=""/>
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
                                {login_status_var ? ( 
                                        <STLogout/>
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
                                <Link className="st__navbar__add" onClick={() => this.addSchedule(url_slug, user.get('username'))} to={"/" +  user.get('username') + "/schedule/" + url_slug}>New Schedule</Link> 
                                ) : (
                                <a><h3 className="st__navbar__add"></h3></a>
                                )
                            }               

             
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
        requestAddSchedule: (data, username) => dispatch(requestAddSchedule(data, username)),

        // requestLogin: (cred) => dispatch(requestLogin(cred)),
        // requestLogout: () => dispatch(requestLogout())
    };
};

export default connect<{}, {}, ST_NavbarPassedProps>(undefined, mapDispatchToProps)(ST_Navbar as any);
