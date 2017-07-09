import * as React from 'react';
import SMTitle from './SMTitle';

import { Link } from 'react-router-dom';
import './css/sm.css';

class SM_HomeLinkRender extends React.Component<SM_HomeLinkRenderProps, undefined> {

    render() {

    var { match } = this.props;
    var { schedules, updates, user, tags } = this.props;


    if(schedules.size > 0) {
        
        return (

            <div className="sm__homelink">
            
                <h3 className="sm__latest_schedules">Latest Schedules</h3>

                    {schedules.sort((a, b) => { return +new Date(b.get('schedule_start_date')) - +new Date(a.get('schedule_start_date')); }).map(schedule => // sort((a, b) => { return +new Date(b.get('schedule_start_date')) - +new Date(a.get('schedule_start_date')); }).

                        <div className="sm__individual__container" 
                            key={schedule.get('schedule_id')}
                            >
                            
                            <SMTitle
                                schedule={schedule}
                                user={user}
                                updates={updates}
                                tags={tags}
                                />

                            <Link className="sm__see_more__link" to={`${match.url}schedule/` + schedule.get('schedule_url') } >
                                See more...
                            </Link>

                        </div> 

                    )}

            </div> 
        )

    } else {

        if (user.get('display_name') !== "" ) {
            return (
                <div className="sm__homelink__empty">
                    <h3 className="sm__homelink__individual__empty">
                        No schedules have been created.
                    </h3>
                    <h3 className="sm__homelink__individual__empty">
                        That makes me sad.                  
                    </h3>
                </div>
            )
        } else {
            return (
                <div className="sm__homelink__empty">
                    <h3 className="sm__homelink__individual__empty">
                        This is very serious.
                    </h3>
                    <h3 className="sm__homelink__individual__empty">
                        It appears that an unidentified stranger has an empty profile.
                    </h3>
                    <h3 className="sm__homelink__individual__empty">
                        y u do dis wun? :((((((
                        {/*I mean it's not quite as bad as the situation in Syria atm, but it ain't great.*/}
                    </h3>
                </div>
            )
        }

    }
    
    }
}

export default SM_HomeLinkRender; 