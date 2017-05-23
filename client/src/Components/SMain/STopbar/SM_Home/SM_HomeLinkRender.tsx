import * as React from 'react';
import SMTitle from './SMTitle';
import SMUpdate from './SMUpdate';
import SMTag from './SMTag';

import { Link } from 'react-router-dom';
import './css/sm.css';

class SM_HomeLinkRender extends React.Component<SM_HomeLinkRenderProps, undefined> {
  
    constructor() {
        super();
        this.updateWithScheduleId = this.updateWithScheduleId.bind(this);
        this.tagWithScheduleId = this.tagWithScheduleId.bind(this);
    };

    updateWithScheduleId(updates_id: string) {
        return this.props.updates.filter(update => update.get('updates_id') === updates_id);
    };

    tagWithScheduleId(tags_id: string) {
        return this.props.tags.filter(tag => tag.get('tags_id') === tags_id);
    };

    render() {

    var { match } = this.props;
    var { schedules, updates, user, tags } = this.props;


    if(schedules.size > 0) {
        
        return (

            <div className="sm__homelink">
            
                <h3 className="sm__latest_schedules">Latest Schedules</h3>

                    {schedules.sort((a, b) => { return +new Date(b.get('schedule_start_date')) - +new Date(a.get('schedule_start_date')); }).map(schedule => // sort((a, b) => { return +new Date(b.get('schedule_start_date')) - +new Date(a.get('schedule_start_date')); }).

                        <div className="row sm__individual__container" 
                            key={schedule.get('schedule_id')}
                            >
                            
                            <SMTitle
                                schedule={schedule}
                                user={user}
                                updates={updates}
                                tags={tags}
                                />

                            <SMTag 
                                tags={this.tagWithScheduleId(schedule.get('tags_id')).slice(0, 9).sort((a, b) => { return b.get('tag_index') - (a.get('tag_index')); }) }
                                />

                            <SMUpdate
                                updates={this.updateWithScheduleId(schedule.get('updates_id')).slice(0, 4).sort((a, b) => { return +new Date(b.get('update_date')) - +new Date(a.get('update_date')); }) }
                                />

                            <Link className="sm__see_more__link" to={`${match.url}/schedule/` + schedule.get('schedule_url') } >
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
                        This is very serious.
                    </h3>
                    <h3 className="sm__homelink__individual__empty">
                        It appears that {user.get('display_name')} has an empty profile.
                    </h3>
                    <h3 className="sm__homelink__individual__empty">
                        y u do dis wun? :((((((                    
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