import * as React from 'react';
import './css/sm__title.css';
var moment = require('moment');
import { Link } from 'react-router-dom';
// import SMTitleScrollRedirect from './SMTitleScrollRedirect';
import SMTag from './SMTag';
import SMUpdate from './SMUpdate';



class SMTitle extends React.Component<SMTitleProps, undefined> {
  
  
// own props - updates, tags, user
// passed props - schedule

    constructor() {
        super();
        this.getAllRelevantUpdates = this.getAllRelevantUpdates.bind(this);
        this.getAllRelevantTags = this.getAllRelevantTags.bind(this);
        this.updateWithScheduleId = this.updateWithScheduleId.bind(this);
        this.tagWithScheduleId = this.tagWithScheduleId.bind(this);
    };


		// need to update tags based on which client it is. 

	getAllRelevantUpdates = () => {
		return this.props.updates.filter(update => update.get('schedule_url') === this.props.schedule.get('schedule_url')); // this creates a Map{}
	}; 

	getAllRelevantTags = () => {
		return this.props.tags.filter(tag => tag.get('schedule_url') === this.props.schedule.get('schedule_url')); // this creates a Map{}
	};

    updateWithScheduleId(updates_id: string) {
        return this.props.updates.filter(update => update.get('updates_id') === updates_id);
    };


    tagWithScheduleId(tags_id: string) {
        return this.props.tags.filter(tag => tag.get('tags_id') === tags_id);
    };


/*
             COMPONENT LOGIC 
                                      */



	render() {

		var { schedule, user } = this.props; 

		return (




/*
             COMPONENT VIEW 
                                      */



			<div className="sm__title__container">
				
					<div className="sm__title__top_layer">


						{/* SMTitle Profile Picture */}


						<div className="sm__title__top_layer__left">
							<img className="sm__title__profile_picture" src={"/avatars/" + user.get('avatar_url')} alt={"/avatars/" + user.get('avatar_url')} />
							
							<div className="sm__title__top_layer__username__details">

								{/* SMTitle Username   onClick={() => updateReduxState()} */} 
									<a className="sm__title__username__link" href={"/" + user.get('username') }>
										<h4 className="sm__title__username">{user.get('display_name')}</h4>
									</a>

								{/* SMTitle Start Date */}
									<h5 className="sm__title__start_date__container">
											{moment(schedule.get('schedule_start_date')).format('MMMM Do')}
									</h5>

							</div>
						</div>

							{/* SMTitle Updates / Tags Size */}
								{/*<div className="sm__title__top_layer__right">*/}
									<div className="sm__title__top_layer__updates__container">
										<h4 className="sm__title__top_layer__updates__link">{"Updates " + "(" + this.getAllRelevantUpdates().size + ")"}</h4>
										<h4 className="sm__title__top_layer__tags__link">{"Tags " + "(" + this.getAllRelevantTags().size + ")"}</h4>
									</div>
								{/*</div>*/}
							
							<div className="clear"></div>

					</div>


					
						<h3 className="sm__title">
							{/* SMTitle Schedule Title */}
							
								{/*<SMTitleScrollRedirect user={user} schedule={schedule} />*/}
							<Link className="sm__title__a--link" to={"/" + user.get('username') + "/schedule/" + schedule.get('schedule_url')} >
								{schedule.get('schedule_title')}
							</Link>
						</h3>


						<p className="sm__title__schedule__summary">
							{schedule.get('schedule_summary')}
						</p>

						<SMTag 
							tags={this.tagWithScheduleId(schedule.get('tags_id')).slice(0, 9).sort((a, b) => { return b.get('tag_index') - (a.get('tag_index')); }) }
							/>

						<SMUpdate
							updates={this.updateWithScheduleId(schedule.get('updates_id')).slice(0, 4).sort((a, b) => { return +new Date(b.get('update_date')) - +new Date(a.get('update_date')); }) }
							/>



				<div className="clear"></div>
			</div>
		)
	}
}   


/*
          COMPONENT CONTAINER 
                                      */



export default SMTitle; 






/*

      <Field name="schedule_end_date" component={renderDatePicker} type="text" placeholder="What'cha learnin'?" />

				<DatePicker
					selected={this.state.startDate}
					onChange={this.handleChange.bind(this)}
				/>

				<DatePicker
					selected={this.state.endDate}
					onChange={this.handleChange.bind(this)}
				/>

*/