import * as React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import './css/si__title.css';
var moment = require('moment');
var getSlug = require('speakingurl');

import SIRemoveRedirect from './SIRemoveRedirect';



class SITitle extends React.Component<SITitleProps & SITitlePassedProps, SITitleState> {


// own props - user
// own props - requestChangeSchedule
// passed props - form, initialValues, topbar_active, match 

	constructor() {
	super();
		this.changeSchedule = this.changeSchedule.bind(this);
	}

	changeSchedule = (values) => {
	// values is a map with all relevant data from the selected schedule.
		let { requestChangeSchedule } = this.props;
		
		let old_schedule_url = window.location.href.split('/')[5];
		let new_schedule_url = getSlug(values.get('schedule_url'));

		values = values.set('schedule_url', new_schedule_url)

		console.log(values.toJS())

		requestChangeSchedule(values);

		if (new_schedule_url !== old_schedule_url) {
	    	window.location.href = "/" + this.props.user.get('username') + "/schedule/" + new_schedule_url;
		}

											{/*onKeyPress={(e) => this.changeSchedule(e)}
											onKeyPress={handleSubmit(values => this.changeSchedule(values))}*/}


	}



	/*
				COMPONENT LOGIC

										*/


	render() {
		
		const { handleSubmit, user, login_status_var, requestRemoveSchedule, form /* schedule_id */ } = this.props;

		let si__title__display__none, si__title__border__none;  // style to disable forms. 
		let fieldDis;
		
		if (login_status_var === false) {
			si__title__display__none = "si__title__display__none"; // this one for making div disappear?
            si__title__border__none = "si__title__border__none"; // this one for making border disappear?
			fieldDis = true;
		}
		// true means you're logged in. 




/*
             COMPONENT VIEW
                                      */


		return (
				<form className="si__title__container" onBlur={handleSubmit(values => this.changeSchedule(values) )}>
					<div className="si__title__top_layer">
						{/* Display Profile Picture, Date and Username */}

							{/* Profile Picture */}
							<img className="si__title__profile_picture" src={"/avatars/" + user.get('avatar_url')} alt={"/avatars/" + user.get('avatar_url')} />

							<div className="si__title__profile_picture__right">

									{/* Username */}
									<a className="si__title__username__link" href={"/" + user.get('username') }>
										<h4 className="si__title__username">
											{user.get('display_name')}
										</h4>
									</a>

									{/* Date */}
									<h5 className="si__title__start_date__container">
											{moment(Date.now()).format('MMM DD')}
									</h5>
							</div>

							<div className="clear"></div>

					</div>

					<div className="si__title__top_layer__right">
						     		{/* Remove Schedule Button */}
							{login_status_var ? (
								<SIRemoveRedirect user={user} requestRemoveSchedule={requestRemoveSchedule} schedule_id={form}/>
									) : (
								<div className="si__title__remove__schedule--na"></div>
								)
							}   
					</div>


						{/* Schedule Title */}
						<div className="si__title__fields__container">
							
							<Field id={si__title__border__none} className="si__title__schedule_title__field" 
										name="schedule_title" 
										component="input" 
										type="text" 
										placeholder="Schedule Title."
										disabled={fieldDis}
										/>
							<div id={si__title__display__none} className="si__title__schedule_url__field__container">
								<p className="si__title__schedule_url__field__pre">URL:</p>
								<Field className="si__title__schedule_url__field" 
											name="schedule_url" 
											component="input" 
											type="text" 
											placeholder="Schedule Url."
											disabled={fieldDis}
											/>
							</div>


							<div className="si__title__summary__container">

								<Field id={si__title__border__none} className="si__title__summary__field" 
											name="schedule_summary" 
											component="textarea" 
											type="text" 
											placeholder="Schedule Overview."
											disabled={fieldDis}

											/>
              				</div>

						</div>
				<div className="clear"></div>
			 </form>
		)
	}
}   



/*
             COMPONENT CONTAINER

                                      */

import { requestChangeSchedule, requestRemoveSchedule } from '../../../arcss/schedules_ar';
import { connect } from 'react-redux';
// import { Map } from 'immutable';


const mapDispatchToProps = dispatch => { 
	return { 
		requestChangeSchedule: (data) => dispatch(requestChangeSchedule(data)),
		requestRemoveSchedule: (data) => dispatch(requestRemoveSchedule(data))
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