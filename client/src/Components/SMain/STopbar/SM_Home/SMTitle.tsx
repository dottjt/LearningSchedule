import * as React from 'react';
import './css/sm__title.css';
var moment = require('moment');
import { Link } from 'react-router-dom';
// import SMTitleScrollRedirect from './SMTitleScrollRedirect';



class SMTitle extends React.Component<SMTitleProps, undefined> {
  
  
// own props - updates, tags, user
// passed props - schedule

    constructor() {
        super();
        this.getAllRelevantUpdates = this.getAllRelevantUpdates.bind(this);
        this.getAllRelevantTags = this.getAllRelevantTags.bind(this);
    };


		// need to update tags based on which client it is. 

	getAllRelevantUpdates = () => {
		return this.props.updates.filter(update => update.get('schedule_url') === this.props.schedule.get('schedule_url')); // this creates a Map{}
	}; 

	// I assume works
	getAllRelevantTags = () => {
		return this.props.tags.filter(tag => tag.get('schedule_url') === this.props.schedule.get('schedule_url')); // this creates a Map{}
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
							<img className="sm__title__profile_picture" src={"/avatars/" + user.get('avatar_url')} alt={"/avatars/" + user.get('avatar_url')} />
							
							<div className="sm__title__top_layer__right">

								{/* SMTitle Username   onClick={() => updateReduxState()} */} 
									<a className="sm__title__username__link" href={"/" + user.get('username') }>
										<h4 className="sm__title__username">{user.get('display_name')}</h4>
									</a>

								{/* SMTitle Start Date */}
									<h5 className="sm__title__start_date__container">
											{moment(schedule.get('schedule_start_date')).format('MMMM Do')}
									</h5>

							</div>

							{/* SMTitle Updates / Tags Size */}
								<div className="sm__title__top_layer__updates">
									<h4 className="sm__title__top_layer__updates__link">{"Updates " + "(" + this.getAllRelevantUpdates().size + ")"}</h4>
									<h4 className="sm__title__top_layer__updates__link">{"Tags " + "(" + this.getAllRelevantTags().size + ")"}</h4>
								</div>
							
							<div className="clear"></div>

					</div>


					
						<h3 className="sm__title__container">
							{/* SMTitle Schedule Title */}
							
								{/*<SMTitleScrollRedirect user={user} schedule={schedule} />*/}
							<Link className="sm__title__a--link" to={"/" + user.get('username') + "/schedule/" + schedule.get('schedule_url')} >
								{schedule.get('schedule_title')}
							</Link>
						</h3>


							<p className="sm__title__schedule__summary">
								{schedule.get('schedule_summary')}
							</p>



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