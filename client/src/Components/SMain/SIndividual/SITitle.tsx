import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import './css/si__title.css';
import '../STopbar/SM_Home/css/sm__title.css';

var moment = require('moment');
var getSlug = require('speakingurl');

import SIRemoveRedirect from './SIRemoveRedirect';



class SITitle extends React.Component<SITitleProps & SITitlePassedProps, SITitleState> {


// own props - user
// own props - requestChangeSchedule
// passed props - form, initialValues, topbar_active, match 

	constructor() {
		super();

		this.changeScheduleTitle = this.changeScheduleTitle.bind(this);
		this.changeScheduleUrl = this.changeScheduleUrl.bind(this);
		this.changeScheduleSummary = this.changeScheduleSummary.bind(this);
		
		this.getScheduleTitleLength = this.getScheduleTitleLength.bind(this);
		this.getScheduleUrlLength = this.getScheduleUrlLength.bind(this);
		this.getScheduleSummaryLength = this.getScheduleSummaryLength.bind(this);

		this.onScheduleTitleLengthChange = this.onScheduleTitleLengthChange.bind(this);
		this.onScheduleUrlLengthChange = this.onScheduleUrlLengthChange.bind(this);
		this.onScheduleSummaryLengthChange = this.onScheduleSummaryLengthChange.bind(this);

		this.state = {
			schedule_title_length: 0,
			schedule_url_length: 0,
			schedule_summary_length: 0
		}

	}

	// populate initial schedule_title_length etc. 

	getScheduleTitleLength() {
		return this.props.initialValues.get('schedule_title').length // 40
	}

	getScheduleUrlLength() {
		return this.props.initialValues.get('schedule_url').length // 60
	}

	getScheduleSummaryLength() {
		return this.props.initialValues.get('schedule_summary').length // 300
	}


	// change number when URL length changes. 

	onScheduleTitleLengthChange(values) {
		let schedule_title = values.get('schedule_title').length
		console.log(schedule_title);

		this.setState({
			schedule_title_length: schedule_title
		})
	}

	onScheduleUrlLengthChange(values) {
		let schedule_url = values.get('schedule_url').length
		console.log(schedule_url);

		this.setState({
			schedule_url_length: schedule_url
		})
	}

	onScheduleSummaryLengthChange(values) {
		let schedule_summary = values.get('schedule_summary').length
		console.log(schedule_summary);

		this.setState({
			schedule_summary_length: schedule_summary
		})
	}


	// upload values to server when Fields change. 

	changeScheduleTitle(values) {

		let { initialValues, requestChangeSchedule, requestInitialIndicatorState } = this.props;

		let old_schedule_title = initialValues.get('schedule_title')
		let new_schedule_title = values.get('schedule_title');
	
		if (old_schedule_title !== new_schedule_title) {
			requestInitialIndicatorState();
			requestChangeSchedule(values);
		}
	}

	changeScheduleSummary(values) {

		let { initialValues, requestChangeSchedule, requestInitialIndicatorState } = this.props;

		let old_schedule_summary = initialValues.get('schedule_summary')
		let new_schedule_summary = values.get('schedule_summary');
	
		if (old_schedule_summary !== new_schedule_summary) {
			requestInitialIndicatorState();
			requestChangeSchedule(values);
		}
	}

	changeScheduleUrl(values) {

		let { requestChangeSchedule, requestInitialIndicatorState } = this.props;

		let old_schedule_url = window.location.href.split('/')[5];
		let new_schedule_url = getSlug(values.get('schedule_url'));

		if (old_schedule_url !== new_schedule_url) {
			values = values.set('schedule_url', new_schedule_url)
			
			requestInitialIndicatorState();
			requestChangeSchedule(values);
		}
	}



	/*
				COMPONENT LOGIC

										*/


	render() {
		let { schedule_title_length, schedule_url_length, schedule_summary_length } = this.state;
		const { initialValues, handleSubmit, user, login_status_var, requestRemoveSchedule, requestRemoveAllUpdates, form /* schedule_id */ } = this.props;

		let si__title__display__none, si__title__border__none;  // style to disable forms. 
		let fieldDis;
		
		if (login_status_var === false) {
			si__title__display__none = "si__title__display__none"; // this one for making divs disappear
            si__title__border__none = "si__title__border__none"; // this one for making borders disappear
			fieldDis = true; // true means you're logged in. s
		}

		if(initialValues !== undefined && this.state.schedule_url_length === 0) {
			this.setState({
				schedule_title_length: this.getScheduleTitleLength(),
				schedule_url_length: this.getScheduleUrlLength(), 
				schedule_summary_length: this.getScheduleSummaryLength()
			})
		}

/*
             COMPONENT VIEW
                                      */


		return (
				<form className="sm__title__container">
					<div className="sm__title__top_layer">
						{/* Display Profile Picture, Date and Username */}
							{/* Profile Picture */}
						<div className="sm__title__top_layer__left">
							<img className="sm__title__profile_picture" src={"/avatars/" + user.get('avatar_url')} alt={"/avatars/" + user.get('avatar_url')} />
							
							<div className="sm__title__top_layer__username__details">

								{/* SMTitle Username   onClick={() => updateReduxState()} */} 
									<a className="sm__title__username__link" href={"/" + user.get('username') }>
										<h4 className="sm__title__username">{user.get('display_name')}</h4>
									</a>

								{/* SMTitle Start Date */}
									<h5 className="sm__title__start_date__container">
											{moment(initialValues.get('schedule_start_date')).format('MMMM Do')}
									</h5>
							</div>
						</div>


						<div className="sm__title__top_layer__updates__container sm__title__top_layer__updates__container__resize">
										{/* Remove Schedule Button */}
								{login_status_var ? (
									<SIRemoveRedirect user={user} requestRemoveSchedule={requestRemoveSchedule} requestRemoveAllUpdates={requestRemoveAllUpdates} schedule_id={form}/>
										) : (
									<div className="si__title__remove__schedule--na"></div>
									)
								}   
						</div>
					</div>




						{/* Schedule Title */}
						<div className="sm__title sm__title__remove__margin">
							
							<Field id={si__title__border__none} className="sm__title__schedule__title si__title__input__resize" 
									name="schedule_title"
									component="textarea"
									type="text"
									wrap="soft"
									placeholder="Schedule Title."
									disabled={fieldDis}
									maxLength={40}
									onBlur={handleSubmit(values => this.changeScheduleTitle(values))}
									onChange={handleSubmit(values => this.onScheduleTitleLengthChange(values))}
									/>
							<span>{schedule_title_length}</span>
									
						</div>

						{/* Schedule Url */}
						<div id={si__title__display__none} className="si__schedule__url">
							
							<p className="si__schedule__url__pre">URL:</p>

							<Field className="si__title__schedule_url" 
									name="schedule_url" 
									component="textarea" 
									type="text" 
									placeholder="Schedule Url."
									disabled={fieldDis}
									maxLength={60}
									onBlur={handleSubmit(values => this.changeScheduleUrl(values))}
									/>
							<span>{schedule_url_length}</span>

						</div>

						{/* Schedule Summary */}
						<div className="sm__schedule">

							<Field id={si__title__border__none} className="sm__title__schedule__summary sm__title__schedule__summary__resize" 
									name="schedule_summary" 
									component="textarea" 
									type="text" 
									placeholder="Schedule Overview."
									disabled={fieldDis}
									maxLength={300}
									onBlur={handleSubmit(values => this.changeScheduleSummary(values))}
									/>
							<span>{schedule_summary_length}</span>

						</div>

			 </form>
		)
	}
}   



/*
             COMPONENT CONTAINER

                                      */

import { requestChangeSchedule, requestRemoveSchedule } from '../../../arcss/schedules_ar';
import { requestRemoveAllUpdates } from '../../../arcss/updates_ar';
import { requestInitialIndicatorState } from '../../../arcss/indicator_ar';
import { connect } from 'react-redux';
// import { Map } from 'immutable';


const mapDispatchToProps = dispatch => { 
	return { 
		requestChangeSchedule: (data) => dispatch(requestChangeSchedule(data)),
		requestRemoveSchedule: (data) => dispatch(requestRemoveSchedule(data)),
		requestRemoveAllUpdates: () => dispatch(requestRemoveAllUpdates()),
		requestInitialIndicatorState: () => dispatch(requestInitialIndicatorState())
	} 
};


const SITitleProps = connect<{}, {}, SITitlePassedProps>(null, mapDispatchToProps)(SITitle);

export default reduxForm({
    enableReinitialize : true,
	// initialValues: Map({ schedule_title: "hello" })
 })(SITitleProps);



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


var DatePicker = require('react-datepicker');
var moment = require('moment');



const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);

*/
