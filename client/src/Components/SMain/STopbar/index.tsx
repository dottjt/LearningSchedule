/// <reference path="./interfaces_tb.d.ts"/>

import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import ST_Midbar from './ST_Midbar';
import ST_Navbar from './ST_Navbar';

import SM_HomeLinkRender from './SM_Home/SM_HomeLinkRender';
import SM_UpdateLinkRender from './SM_Home/SM_UpdateLinkRender';
import SM_TagLinkRender from './SM_Home/SM_TagLinkRender';

import './css/st.css';
import './css/st__colour.css';

class STopbar extends React.Component<STopbarProps & STopbarPassedProps, STopbarState> {


// own props - user, summaries, schedules, tags, updates 
// own props - requestAddSchedule, requestAddAvatar
// passed props - NA 


/*
          COMPONENT STATE LOGIC
                                      */


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


    render() {



/*
            COMPONENT LOGIC
                                      */


        var login_status_var, image, srci;;      
        var { match, user, summaries, schedules, updates, tags } = this.props; 
        

        if (user.get('summaries_id') !== undefined && document.cookie.length > 0) {
            login_status_var = this.loginStatus();
        } 

        if (user.get('avatar_url') !== undefined) {
           srci = "/avatars/" + user.get('avatar_url');
           image = <img className="navbar__profile" src={srci} alt=""/>
        }  


// okay, this is what gets rid of the STopbar when it goes to single view. 
// ["", "juliusreade", "schedule", "when-react-redux-finally-makes-sense"]
        // var removeContainer = location.pathname.split('/')[2];

        // console.log(removeContainer);
        
        return (




/*
            COMPONENT VIEW
                                      */
 
            <div>
                <div > {/*remove container*/}

                    <ST_Navbar user={user} />

                    <ST_Midbar user={user} summaries={summaries} />

                {/*     BOTTOM BAR      */}

                
                    <div className="row st__bottombar__container">

                        <div className="header__color__container">
                            <div className="header__color header__color1"></div>
                            <div className="header__color header__color2"></div>
                            <div className="header__color header__color3"></div>
                            <div className="header__color header__color4"></div>
                            <div className="header__color header__color5"></div>
                        </div>

                        <div className="st__bottombar__links__container">
                            {/* STopbar Home-Updates-Tags links  */}
                            <span className="st__bottombar__link"><Link className="st__bottombar__link--a" to={"/" + user.get('username')}>{"Schedules " + "(" + schedules.size + ")"}</Link></span>
                            <span className="st__bottombar__link"><Link className="st__bottombar__link--a" to={"/" + user.get('username') + "/updates"}>{"Updates " + "(" + updates.size + ")"}</Link></span>
                            <span className="st__bottombar__link"><Link className="st__bottombar__link--a" to={"/" + user.get('username') + "/tags"}>{"Tags " + "(" + tags.size + ")"}</Link></span>
                        </div>
                    </div>

                </div> {/* removeConatiner close*/}

                {/*     ROUTES      */}

                <div>
                    
                    {/* okay, so we need exact otherwise it doesn't work.  */}
                    <Route exact path={`${match.url}`} render={() => <SM_HomeLinkRender match={match} schedules={schedules} updates={updates} tags={tags} user={user} />  }  />   
                    <Route path={`${match.url}/updates`} render={() => <SM_UpdateLinkRender user={user} updates={updates} schedules={schedules} />  }  />   
                    <Route path={`${match.url}/tags`} render={() => <SM_TagLinkRender user={user} tags={tags} schedules={schedules} />  }  />

                    {/*<Route exact path={`${match.url}`} render={() => <SM_Home match={match} schedules={schedules} updates={updates} tags={tags} user={user} auth={auth} />  }  />*/}
                    {/* no index required */}
                </div>



            </div> // topbar_container end
        )
    };
};







/*
           COMPONENT CONTAINER
                                        */

   
import { requestAddSchedule } from '../../../arcss/schedules_ar';



import { connect } from 'react-redux';

export const mapDispatchToProps = (dispatch) => {
    return {
        requestAddSchedule: (data) => dispatch(requestAddSchedule(data))

    };
};

export default connect<{}, {}, STopbarPassedProps>(undefined, mapDispatchToProps)(STopbar as any);
