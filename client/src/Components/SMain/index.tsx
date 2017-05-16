import * as React from 'react';
import { Route } from 'react-router-dom';

import STopbar from './STopbar';
import SIndividual from './SIndividual';

// import SM_HomeLinkRender from './SM_Home/SM_HomeLinkRender';
// import IndexTag from './STopbar/indexTag';
// import IndexUpdate from './STopbar/indexUpdate';

// import SM_HomeLinkRender from './STopbar/SM_Home/SM_HomeLinkRender';
// import SM_UpdateLinkRender from './STopbar/SM_Home/SM_UpdateLinkRender';
// import SM_TagLinkRender from './STopbar/SM_Home/SM_TagLinkRender';



class SMain extends React.Component<SMainProps & SMainPropsPassed, any> {
  
// own props - schedules, updates, tags, user
// passed props - NA


/*
             COMPONENT LOGIC 
                                      */



    render() {

        var { match } = this.props;

        var { schedules, updates, tags, summaries, user, auth } = this.props;


      return (



/*
             COMPONENT VIEW 
                                      */
        /*<div>
            <Route path={`${match.url}`} render={() => <STopbar match={match} schedules={schedules} updates={updates} summaries={summaries} tags={tags} user={user} auth={auth}/>  }  />

            <Route path={`${match.url}/schedule/:article_title`} render={() => <SIndividual match={match} schedules={schedules} updates={updates} tags={tags} summaries={summaries} user={user} auth={auth} />  } />
        </div>*/

           <div>
                <Route exact path={`${match.url}/`} render={() => <STopbar match={match} schedules={schedules} updates={updates} summaries={summaries} tags={tags} user={user} auth={auth}/>  }  />

                <Route path={`${match.url}/schedule/:article_title`} render={() => <SIndividual match={match} schedules={schedules} updates={updates} tags={tags} summaries={summaries} user={user} />  } />


     {/*maybe take a look to see if this is faster... currently, we have a removeContainer variable which makes display: none on change. Take a look :) */}

                <Route path={`${match.url}/updates`} render={() => <STopbar match={match} schedules={schedules} updates={updates} summaries={summaries} tags={tags} user={user} auth={auth}/>  }  />

                <Route path={`${match.url}/tags`} render={() => <STopbar match={match} schedules={schedules} updates={updates} summaries={summaries} tags={tags} user={user} auth={auth}/>  }  />


{/*figure out remove container, if you can. it's currently in navbar, perhaps it should be at the homelink instead? */}

            </div>



        )
    };
};




/*
           COMPONENT CONTAINER 
                                      */


import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        schedules: state.get('schedules'),
        summaries: state.get('summaries'),
        updates: state.get('updates'),
        tags: state.get('tags'),
        user: state.get('user'),
        auth: state.get('auth')
    };
};

// this is only here to get rid of the undefined error. ya. 

export default connect<{}, {}, SMainPropsPassed>(mapStateToProps)(SMain);


/*


                    {   
                    /*
                    <SMTag
                        form={schedule.get('tags_id')}
                        schedule_id={schedule.get('schedule_id')}
                        username={schedule.get('username')}

                        initialValues={tagWithScheduleId(schedule.get('tags_id'))}
                        />
                    */
                        
