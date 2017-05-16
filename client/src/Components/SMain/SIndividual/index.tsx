import * as React from 'react';
import SITopbar from './SITopbar';
import SITitle from './SITitle';
import SIUpdate from './SIUpdate';
import SITag from './SITag';

import './css/si.css';
import { Map } from 'immutable';
// var getSlug = require('speakingurl');




class SIndividual extends React.Component<SIndividualProps & SIndividualPassedProps, undefined> {


// own props - user, schedules, tags, updates
// passed props - NA 


/*
          COMPONENT STATE LOGIC
                                      */


    constructor() {
        super();
        this.handleSummaryActive = this.handleSummaryActive.bind(this);
        this.retrieveScheduleId = this.retrieveScheduleId.bind(this);
        this.retrieveUpdatesId = this.retrieveUpdatesId.bind(this);
        this.retrieveTagsId = this.retrieveTagsId.bind(this);
        this.getAllRelevantSchedules = this.getAllRelevantSchedules.bind(this);
        this.getAllRelevantUpdates = this.getAllRelevantUpdates.bind(this);
        this.getAllRelevantUpdateTags = this.getAllRelevantUpdateTags.bind(this);
        this.getAllRelevantTags = this.getAllRelevantTags.bind(this);
        this.loginStatus = this.loginStatus.bind(this);
        this.createElementsIfNewSchedule = this.createElementsIfNewSchedule.bind(this);
        this.createElementsIfExistingSchedule = this.createElementsIfExistingSchedule.bind(this);
        this.getCookie = this.getCookie.bind(this);
    }

    handleSummaryActive() {
        console.log("clicked")
        this.props.requestChangeEditActive(this.props.user.get('edit_active'));
    }

    retrieveScheduleId(schedule_url: string) {
        return this.props.schedules.filter(schedule => schedule.get('schedule_url') === schedule_url).getIn([0, 'schedule_id']); // .get('schedule_id')
    };  

    retrieveUpdatesId(schedule_url: string) {
        return this.props.schedules.filter(schedule => schedule.get('schedule_url') === schedule_url).getIn([0, 'updates_id']); // .get('updates_id')
    };

    retrieveTagsId(schedule_url: string) {
        return this.props.schedules.filter(schedule => schedule.get('schedule_url') === schedule_url).getIn([0, 'tags_id']); // .get('updates_id')
    };


    getAllRelevantSchedules(schedule_url: string) {
        return this.props.schedules.filter(schedule => schedule.get('schedule_url') === schedule_url).get(0); // this creates a Map{}
    }; 

    getAllRelevantUpdateTags(schedule_url: string) {
        return Map({tags: this.props.tags.filter(tag => tag.get('update_tag') === schedule_url && tag.get('update_tag') === true)});
    };

    getAllRelevantUpdates(schedule_url: string) {
        return Map({updates: this.props.updates.filter(update => update.get('schedule_url') === schedule_url),
                    update_text: "",
                    update_tags: this.getAllRelevantUpdateTags(schedule_url),
                    updateType: "link",
                    updateTypeValue: "kneel"
                    });
    };


    getAllRelevantTags(schedule_url: string) {
        return Map({tags: this.props.tags.filter(tag => tag.get('schedule_url') === schedule_url)});
    };

    createElementsIfNewSchedule(url, login_status_var) {
        let schedule_id, updates_id, tags_id;
        let sititle, siupdate, sitag;
        let urlSplit;
        let { user } = this.props;

        urlSplit = url.split('-'); // get url - ["", "juliusreade", "schedule", "when-react-redux-finally-makes-sense"]  
        schedule_id = urlSplit[4];
        updates_id = urlSplit[0];
        tags_id = urlSplit[1] + urlSplit[2];

        sititle = <SITitle
                        form={schedule_id}  
                        initialValues={undefined}

                        schedule_url={url}
                        user={this.props.user}
                        login_status_var={login_status_var}
                        />

        siupdate = <SIUpdate
                        form={updates_id} 
                        initialValues={undefined}

                        schedule_url={url}
                        schedule_id={schedule_id}
                        user={user}
                        login_status_var={login_status_var}

                        />

        sitag = <SITag
                        form={tags_id}
                        initialValues={undefined}
                        
                        schedule_url={url}
                        schedule_id={schedule_id}
                        user={user}
                        login_status_var={login_status_var}

                    />

        return {
            sititle: sititle,
            siupdate: siupdate,
            sitag: sitag
        }

    }

    createElementsIfExistingSchedule(url, login_status_var) {
        let relevant_updates, relevant_update_tags, relevant_schedules, relevant_tags;
        let schedule_id, updates_id, tags_id;
        let sititle, siupdate, sitag;
        let { user } = this.props;

        schedule_id = this.retrieveScheduleId(url);
        updates_id = this.retrieveUpdatesId(url);
        tags_id = this.retrieveTagsId(url);
        relevant_updates = this.getAllRelevantUpdates(url);
        relevant_update_tags = this.getAllRelevantUpdateTags(url);
        relevant_schedules = this.getAllRelevantSchedules(url);
        relevant_tags = this.getAllRelevantTags(url);

        sititle = <SITitle
                    form={schedule_id}  
                    initialValues={relevant_schedules}

                    schedule_url={url}
                    user={user}      
                    login_status_var={login_status_var}     
                    />

        siupdate = <SIUpdate
                        form={updates_id} 
                        initialValues={relevant_updates}
                        // sorting this doesn't work. hmmmm 
                        //.sort((a, b) => { return +new Date(b.get('update_date')) - +new Date(a.get('update_date')); })
                        schedule_url={url}
                        schedule_id={schedule_id}
                        user={user}

                        login_status_var={login_status_var}

                        // this comes in a map, maybe not okay. 
                        />

        sitag = <SITag
                        form={tags_id}
                        initialValues={relevant_tags}
                        
                        schedule_url={url}
                        schedule_id={schedule_id}
                        user={user}

                        login_status_var={login_status_var}

                    />

        return {
            sititle: sititle,
            siupdate: siupdate,
            sitag: sitag
        }

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
    

s
/*
            COMPONENT LOGIC
                                      */


    render() {

        let url, login_status_var;
        let { schedules, user } = this.props;

        url = location.pathname.split('/')[3];

        if (user.get('summaries_id') !== undefined && document.cookie.length > 0) {
            login_status_var = this.loginStatus();
        } 


        // create components 
        if (schedules.toJS().length > 0 && url !== undefined ) {  

            if ( url.length === 36 && url[8] === '-' && url[13] === '-') {

                var { sititle, siupdate, sitag } = this.createElementsIfNewSchedule(url, login_status_var);
                
            } else {

                var { sititle, siupdate, sitag } = this.createElementsIfExistingSchedule(url, login_status_var);

            }
        }



/*
            COMPONENT VIEW
                                      */


      return (

        <div>

            <SITopbar user={user} /> 

            <div>
                
                <div className="si__elements__container">

                    {sititle}

                    {sitag}

                    {siupdate}

                </div>

            </div> 
        </div>  

        )
    };
};





/*
                START OF CONTAINER 
                                            */


import { requestChangeEditActive } from '../../../arcss/users_ar';

import { connect } from 'react-redux';
// import { Map } from 'immutable';


const mapDispatchToProps = dispatch => { 
	return { 
        requestChangeEditActive: (data) => dispatch(requestChangeEditActive(data))
	} 
};


export default connect<{}, {}, SIndividualPassedProps>(undefined, mapDispatchToProps)(SIndividual);




/*

    si edit button

    {user.get('edit_active') ? (
        <button className="navbar__edit_schedule btn btn-default btn-md" onClick={this.handleSummaryActive}>edit</button>
        ) : (
        <button className="navbar__edit_schedule--na btn btn-default btn-md" onClick={this.handleSummaryActive}>save</button>
        )
    }   *




      const removeSchedule = (schedule_id) => {
		  console.log(schedule_id);
		  this.props.requestRemoveSchedule(schedule_id);
      }


            <SITitle
                form={schedule.get('schedule_id')} 
                initialValues={schedule}
                
                display_name={user.get('display_name')}
                avatar_url={user.get('avatar_url')}

                updates={updateWithScheduleId(schedule.get('updates_id'))}
                tags={tagWithScheduleId(schedule.get('tags_id'))}
                />

					<RemoveSchedule onClick={(event) => { event.preventDefault(); removeSchedule(this.props.form);}}></RemoveSchedule>

/*************************************************

            UNUSED COMPONENTS

**************************************************/

/*


                    {this.props.updates.map(
                    update => {
                        if(update.get('schedule_id') === schedule.get('schedule_id')) {
                            <SchedulesUpdate
                                form={schedule.get('schedule_id')}
                                initialValues={update}
                            />
                        }
                    }
                    )// end of props.updates.map (one below) 
                    }



                    <SchedulesUpdate
                        form={schedule.get('schedule_id')}
                        initialValues={
                            this.props.updates.map( update => {
                                if(update.get('schedule_id') === schedule.get('schedule_id')) {
                                    return update
                                }
                            })
                        }
                    />

                    {
                        this.props.requestInitialUpdates('schedule_id');

                        // how to dynamically create new updates. 
                        // would you create a new updates object in the state? If so, it's genius, because then it's also flat. 
                    }



                    <SchedulesUpdate
                        form={schedule.get('schedule_id')}
                        updates={this.props.updates}
                    />
*/


