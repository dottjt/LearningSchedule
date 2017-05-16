import * as React from 'react';
import { Link } from 'react-router-dom';
import './css/si__topbar.css';
import '../STopbar/ST_Navbar/css/st__login.css';
import SIScrollRedirect from './SIScrollRedirect';

import STLogin from "../STopbar/ST_Navbar/STLogin";
import STLogout from "../STopbar/ST_Navbar/STLogout";




class SITopbar extends React.Component<SITopbarPassedProps, any> {


// own props - user
// own props - requestAddSchedule
// passed props - NA 


    constructor() {
        super();
        this.loginStatus = this.loginStatus.bind(this);
        this.getCookie = this.getCookie.bind(this);
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


/*
             COMPONENT LOGIC

                                      */



    render() {

        let login_status_var;
        let { user } = this.props;


        if (user.get('summaries_id') !== undefined && document.cookie.length > 0) {
            login_status_var = this.loginStatus();
        } 


/*
             COMPONENT VIEW

                                      */



        return (
            
                <nav className="navbar navbar-default si__topbar__container">
                    
                    {/* STopbar Learning Schedule  onClick={() => updateReduxState()}*/}
                        {login_status_var ? (
                            <SIScrollRedirect user={user} />
                            ) : (
                            <Link className="navbar-brand" to={"/" + user.get('username')}>
                                <h1 className="si__navbar__brand">Learning Schedule</h1>
                            </Link> 
                            )
                        }           


                    <div className='navbar-form si__navbar__form__container'>

                        {/* STopbar Login Authentication */}
                            {login_status_var ? ( 
                                    <STLogout/>
                                ) : (
                                    <STLogin/>
                                )
                            }

                    </div>

                </nav>
   
        )
    };
};



/*
             COMPONENT CONTAINER

                                      */



export default SITopbar;
