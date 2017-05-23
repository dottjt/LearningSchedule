import * as React from 'react';

import ST_Navbar from '../STopbar/ST_Navbar';
import PUserDetails from './PUserDetails';
import PSocialDetails from './PSocialDetails';

class Profile extends React.Component<ProfilePassedProps, undefined> {


    constructor() {
        super();
        this.loginStatus = this.loginStatus.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.createPUserSocialElements = this.createPUserSocialElements.bind(this);
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


    createPUserSocialElements(login_status_var) {

        let { user } = this.props;
        let p_user_details, p_social_details;

        p_user_details = <PUserDetails form="yolotehe" initialValues={user} user={user} login_status_var={login_status_var}/>

        p_social_details = <PSocialDetails form="yolotehe2" initialValues={user} user={user} login_status_var={login_status_var}/>

        return {
            p_social_details: p_social_details,
            p_user_details: p_user_details
        }

    }

    render() {
        let { user } = this.props;
        let login_status_var;

        if (user.get('summaries_id') !== undefined && document.cookie.length > 0) {
            login_status_var = this.loginStatus();
        } 


        if (user !== undefined) {
            var { p_user_details, p_social_details } = this.createPUserSocialElements(login_status_var); 
        }


        return (
            <div className="profile__container">

                <ST_Navbar user={user} />

                <div className="profile__main">
                    <h2 className="profile__heading">
                        Profile Settings
                    </h2>

                    <div className="p__user__container">

                        {p_user_details}

                        {p_social_details}

                    </div>

                </div>

            </div>
        )
    }

}

export default Profile;

