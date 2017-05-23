import * as React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import './css/profile.css';
import '../STopbar/ST_Navbar/css/st__navbar.css';



class PUserDetails extends React.Component<PUserDetailsProps & PUserDetailsPassedProps, PUserDetailsState> {


// own props - user
// own props - requestChangeSchedule
// passed props - form, initialValues, topbar_active, match 

	constructor() {
	super();
		this.changeUserDetails = this.changeUserDetails.bind(this);
		this.changePassword = this.changePassword.bind(this);
        this.showPopUpFunction = this.showPopUpFunction.bind(this);
		this.removeUser = this.removeUser.bind(this);
        this.state = { showPopup: false };

	}

    showPopUpFunction() {
        this.setState({ showPopup: !this.state.showPopup})
    }

    changePassword(data) {
		let { requestChangePassword } = this.props;

        requestChangePassword(data);

    }

	changeUserDetails(values) { // username
        
        console.log(values)

		let { requestChangeUserDetails } = this.props;

		requestChangeUserDetails(values);

	}

	removeUser() {

		let { requestRemoveUser } = this.props;

		requestRemoveUser();

	}



	/*
				COMPONENT LOGIC

										*/


	render() {
		
		const { user, handleSubmit, initialValues, login_status_var } = this.props;

		let si__title__display__none, si__title__border__none;  // style to disable forms. 
		let fieldDis;
		
		if (login_status_var === false) {
			si__title__display__none = "si__title__display__none"; // this one for making div disappear?
            si__title__border__none = "si__title__border__none"; // this one for making border disappear?
			fieldDis = true;
		}
		// true means you're logged in. 
        console.log(user)

        console.log(initialValues)

/*
             COMPONENT VIEW
                                      */

        if(login_status_var === false) {
            return (
                <div></div>
            )
        } else {

            return (
                    <form className="p__user__details__container" onBlur={handleSubmit(values => this.changeUserDetails(values) )}>
                    
                    
                            {/* Schedule Title */}
                            <div className="p__user__details__fields__container">

                                <h3 className="p__user__field__title">Change your username:</h3>
                                <Field className="p__user__field__username" 
                                            name="username" 
                                            component="input" 
                                            type="text" 
                                            placeholder="username."
                                            disabled={fieldDis}
                                            />
                            
                                <div className="p__user__field__text">
                                    <a className="p__user__field__text__link" onClick={() => this.showPopUpFunction()}>Change password</a> 
                                </div>

                                <div className="p__user__field__text">
                                    <a className="p__user__field__text__link" onClick={() => this.showPopUpFunction()}>Delete account</a> 
                                </div>

                            </div>




                    <div className={`overlay-${this.state.showPopup}`}  >
                        <div id="popup__container__password" className="popup__container">
                            <div className="popup__top">
                                {/*<h2 className="popup__title">New Schedule</h2>*/}
                                <a className="popup__close" onClick={() => this.showPopUpFunction()}>&times;</a>
                            </div>

                            <label className="popup__title">New password.</label>

                            <div className="popup__input__password__container">
                                <input className="popup__input__password" name="schedule_title" ref="password" placeholder="Schedule Title." onKeyPress={(e) => this.changePassword(e)} />
                            </div>

                            {/*<div className="popup__textarea__summary__container">
                                <textarea className="popup__textarea__summary" ref="schedule_summary" placeholder="Schedule Summary."></textarea>
                            </div>
*/}
                            {/*<div className="popup__submit__container">
                                <a className="popup__submit">create <span className="popup__submit__plus"></span> + </a>
                            </div>*/}

                        </div>
                    </div>
             

             
                            
                    <div className="clear"></div>
                </form>
            )
        }
	}
}   



/*
             COMPONENT CONTAINER

                                      */

import { requestChangeUserDetails, requestChangePassword, requestRemoveUser } from '../../../arcss/users_ar';
import { connect } from 'react-redux';
// import { Map } from 'immutable';


const mapDispatchToProps = dispatch => { 
	return { 
		requestChangeUserDetails: (data) => dispatch(requestChangeUserDetails(data)),
		requestChangePassword: (data) => dispatch(requestChangePassword(data)),
		requestRemoveUser: () => dispatch(requestRemoveUser())
	} 
};


const PUserDetailsProps = connect<{}, {}, PUserDetailsPassedProps>(null, mapDispatchToProps)(PUserDetails);

export default reduxForm({
    enableReinitialize : true,
 })(PUserDetailsProps);

