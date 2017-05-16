import * as React from 'react';
import './css/sm.css';
import * as moment from 'moment';


class SM_UpdateLinkRender extends React.Component<SM_UpdateLinkRenderProps, undefined> {
  
// own props -  updates
// passed props - NA

    constructor() {
        super();
        this.getScheduleName = this.getScheduleName.bind(this);
    };

    getScheduleName = (schedule_id: string) => {
        let { schedules } = this.props;

        return schedules.filter(schedule => schedule.get('schedule_id') === schedule_id);
    };


/*
           COMPONENT LOGIC
                                      */



    render() {

        var { updates } = this.props;



      return (



/*
           COMPONENT VIEW
                                      */

          
        <div className="sm__updatelink">

            <h3 className="sm__latest_updates">Latest Updates</h3>

                {updates.sort((a, b) => { return +new Date(b.get('update_date')) - +new Date(a.get('update_date')); }).map(update =>
                    
                    <div className="row sm__updatelink__inner__container" key={update.get('update_id')}>
                        
                        <h3 className="sm__updatelink__schedule__name">
                            {/*{this.getScheduleName(update.get('schedule_id')).getIn([0, 'schedule_title'])}*/}
                            {update.get('update_title')}
                        </h3>

                        <p className="sm__updatelink__update">
                            {moment(update.get('update_date')).format('MMM DD') + " - " +update.get('update_text')}
                        </p>
                    </div> 

                )}
        </div> 
        )
    };
};



/*
           COMPONENT CONTAINER
                                      */


export default SM_UpdateLinkRender;