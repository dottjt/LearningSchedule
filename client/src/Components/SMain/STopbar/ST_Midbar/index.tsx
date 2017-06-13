/// <reference path="./interfaces_md.d.ts"/>

import * as React from 'react';
//import * as Dropzone from 'react-dropzone';
var Dropzone = require('react-dropzone');

// import request from 'superagent';

import { Map } from 'immutable';

import STSummary from './STSummary';
import STSummaryActive from './STSummaryActive';

import STDisplay from './STDisplay';
import STDisplayActive from './STDisplayActive';

import STWebsite from './STWebsite';
import STWebsiteActive from './STWebsiteActive';

import './css/st__midbar.css';

class ST_Midbar extends React.Component<ST_MidbarProps & ST_MidbarPassedProps, ST_MidbarState> {


// own props - user, summaries, schedules, tags, updates 
// own props - requestAddSchedule, requestAddAvatar
// passed props - NA 


/*
          COMPONENT STATE LOGIC
                                      */


    constructor() {
        super();
        this.handleSummaryActive = this.handleSummaryActive.bind(this);
        this.summaryWithScheduleId = this.summaryWithScheduleId.bind(this);
        this.summaryWithReduxForm = this.summaryWithReduxForm.bind(this);
        this.loginStatus = this.loginStatus.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.onDrop = this.onDrop.bind(this);
        
        this.state = { topbar_active: true, edit_title: "edit" }
    }

    handleSummaryActive() { 
        this.setState({ topbar_active: !this.state.topbar_active });

        if (this.state.edit_title === "edit") {
            this.setState({edit_title: "save"});
        } else {
            this.setState({edit_title: "edit"});
        }
    }

    // transform functions 
    summaryWithScheduleId = (summaries_id: string) => {
        return this.props.summaries.filter(summary => summary.get('summaries_id') === summaries_id);
    };

    summaryWithReduxForm = (summaries_id: string) => {
        return Map({summaries: this.props.summaries.filter(summary => summary.get('summaries_id') === summaries_id)});
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


    onDrop(acceptedFiles, rejectedFiles) {
        var username = this.props.user.get('username');
        console.log(this.props.user)
        var photo = new FormData();
        photo.append('avatar', acceptedFiles[0]);
        
        this.props.requestAddAvatar(photo, username);
    }

    render() {



/*
            COMPONENT LOGIC
                                      */

        var login_status_var, profilepicture, srci;
        var { user } = this.props; 
        var { topbar_active } = this.state;


        if (user.get('summaries_id') !== undefined && document.cookie.length > 0) {
            login_status_var = this.loginStatus();
        } 

        if (user.get('avatar_url') !== undefined) {
           srci = "/avatars/" + user.get('avatar_url');
           profilepicture = <img className="st__midbar__profile_picture" src={srci} alt=""/>
        }  



        return (




/*
            COMPONENT VIEW
                                      */

                
                <div className="row st__midbar__container">
                    <div className="st__midbar__top">
                        
                    {/* STopbar Profile Picture */}
                        {topbar_active ? (
                             profilepicture
                             ) : (
                                <Dropzone className="st__midbar__react__dropzone" multiple={false} accept={'image/*'} onDrop={this.onDrop}>
                                    {profilepicture}
                                    <div className="st__dropzone__overlay"></div>
                                    <div className="st__dropzone__plus">+</div>
                                </Dropzone>
                             )
                        }

                        <div className="st__midbar__top__right">

                            <div className="st__midbar__top__top">
                                
                                {/* STopbar Website Link */}
                                    {topbar_active ? (
                                        <STWebsite user={user} />
                                        ) : (
                                        <STWebsiteActive initialValues={  Map({ website: user.get('website') }) } form={"WebsiteForm"}
                                        /> )
                                    }                        

                                {/* STopbar Edit Button */}
                                    {login_status_var ? (
                                        <button className="st__midbar__edit__button" onClick={this.handleSummaryActive}>
                                            
                                            <span className="st__midbar__edit__button__text">
                                                {this.state.edit_title}
                                            </span>
                                        </button>
                                        ) : (
                                        <button className="st__midbar__edit__button--na"></button>
                                        )
                                    }   

                            </div>

                        {/* STopbar Display Name */}
                            {topbar_active ? (
                                <STDisplay user={user} />
                                ) : (
                                <STDisplayActive initialValues={  Map({ display_name: user.get('display_name') }) } form={"DisplayForm"}
                                /> )
                            }                        
                        </div>
                    </div>




{/*
         COMPONENT MIDBAR BOTTOM
                                      */}


                    <div className="st__midbar__bottom">
                        <div className="st__midbar__social_icons__container">

                        {/* STopbar Social Media Icons */}
                            <a href={"https://facebook.com/" + user.get('facebook')}><img className="st__midbar__social_icons" src="static/images/social-icons/facebook.png" alt=""/></a>
                            <a href={"https://twitter.com/" + user.get('twitter')}><img className="st__midbar__social_icons" src="static/images/social-icons/twitter.png" alt=""/></a>
                            <a href={"https://github.com/" + user.get('github')}><img className="st__midbar__social_icons" src="static/images/social-icons/github.png" alt=""/></a>
                        
                        </div>

                        <div className="st__midbar__summary">
                        
                        {/* STopbar Summaries */}
                            {topbar_active ? (
                                <STSummary
                                    summaries={this.summaryWithScheduleId(user.get('summaries_id'))}
                                /> ) : (
                                <STSummaryActive
                                    initialValues={this.summaryWithReduxForm(user.get('summaries_id'))}
                                    form={"SummaryActiveForm"}
                                /> )
                            }
                        </div>
                    </div>
                </div>

        )
    };
};



/*
           COMPONENT CONTAINER
                                        */

   
import { requestAddAvatar } from '../../../../arcss/users_ar';

import { connect } from 'react-redux';

export const mapDispatchToProps = (dispatch) => {
    return {
        requestAddAvatar: (data, username) => dispatch(requestAddAvatar(data, username))
    };
};

export default connect<{}, {}, ST_MidbarPassedProps>(undefined, mapDispatchToProps)(ST_Midbar as any);
