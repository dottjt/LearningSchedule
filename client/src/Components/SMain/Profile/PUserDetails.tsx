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
        this.showPopUpPasswordFunction = this.showPopUpPasswordFunction.bind(this);
        this.showPopUpRemoveFunction = this.showPopUpRemoveFunction.bind(this);
		this.removeUser = this.removeUser.bind(this);
        this.state = { showPopupPassword: false, showPopupRemove: false };
	}

    showPopUpPasswordFunction() {
        this.setState({ showPopupPassword: !this.state.showPopupPassword})
    }

    showPopUpRemoveFunction() {
        this.setState({ showPopupRemove: !this.state.showPopupRemove})
    }

    changePassword(e) {

      const password = (this.refs.password as HTMLInputElement).value;

		let { requestChangePassword } = this.props;

        requestChangePassword(password);

    }

	changeUserDetails(values) { // username

		let { initialValues, requestChangeUserDetails } = this.props;
        
        let old_username = initialValues.get('username');
        let new_username = values.get('username').toLowerCase();

        console.log(old_username)
        console.log(new_username)

        let old_email = initialValues.get('email');
        let new_email = values.get('email').toLowerCase();

		if (old_username !== new_username || old_email !== new_email) {
		    requestChangeUserDetails(new_username, new_email);
		}

	}

	removeUser() {

		let { requestRemoveUser } = this.props;

		requestRemoveUser();

	}



	/*
				COMPONENT LOGIC

										*/


	render() {
		
		const { handleSubmit, login_status_var } = this.props;

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

        if(login_status_var === false) {
            return (
                <div></div>
            )
        } else {

            return (
                    <form className="p__user__details__container">
                    
                    
                            {/* Schedule Title */}
                            <div className="p__user__details__fields__container">

                                <h3 className="p__user__field__title">Change your username:</h3>
                                <Field className="p__user__field__username" 
                                            name="username" 
                                            component="input" 
                                            type="text" 
                                            placeholder="username."
                                            disabled={fieldDis}
                                            maxLength={35}
                                            onBlur={ handleSubmit(values => this.changeUserDetails(values) )}
                                            />
                                            {/* must have at least one character && can't be the same as another one. && if no change, don't do anything*/}

                                <h3 className="p__user__field__title">Change your email:</h3>
                                <Field className="p__user__field__username" 
                                            name="email" 
                                            component="input" 
                                            type="email" 
                                            placeholder="email."
                                            maxLength={35}
                                            disabled={fieldDis}
                                            onBlur={ handleSubmit(values => this.changeUserDetails(values) )}
                                            />
                                            {/* must have at least one character && valid email (confirmation perhaps?) && can't be the same as another one. && if no change, don't do anything*/}


                                <div className="p__user__field__text">
                                    <a className="p__user__field__text__link" onClick={() => this.showPopUpPasswordFunction()}>Change password</a> 
                                </div>

                                <div className="p__user__field__text">
                                    <a className="p__user__field__text__link" onClick={() => this.showPopUpRemoveFunction()}>Delete account</a> 
                                </div>

                            </div>



                    {/* Show Pop Up Password */}
                    <div className={`overlay-${this.state.showPopupPassword}`}  >
                        <div id="popup__container__password" className="popup__container">
                            <div className="popup__top">
                                <a className="popup__close" onClick={() => this.showPopUpPasswordFunction()}>&times;</a>
                            </div>

                            <label className="popup__password__title">New password.</label>

                            <div className="popup__input__password__container">
                                <input className="popup__input__password" name="password" ref="password" type="password" max="100" />
                            </div>

                            <div className="popup__password__submit__container" onClick={(e) => this.changePassword(e)}>
                                <a className="popup__password__submit">create</a>
                            </div>

                        </div>
                    </div>
             

                    {/* Show Pop Up Remove */}
                    <div className={`overlayRemove-${this.state.showPopupRemove}`}  >
                        <div id="popup__container__remove" className="popup__container">
                            <div className="popup__top">
                                <a className="popup__close" onClick={() => this.showPopUpRemoveFunction()}>&times;</a>
                            </div>

                            <label className="popup__password__title">Are you sure?</label>

                            <div className="popup__remove__submit__container" onClick={() => this.removeUser()}>
                                <a className="popup__submit">delete</a>
                            </div>
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
		requestChangeUserDetails: (username, email) => dispatch(requestChangeUserDetails(username, email)),
		requestChangePassword: (data) => dispatch(requestChangePassword(data)),
		requestRemoveUser: () => dispatch(requestRemoveUser())
	} 
};


const PUserDetailsProps = connect<{}, {}, PUserDetailsPassedProps>(null, mapDispatchToProps)(PUserDetails);

export default reduxForm({
    enableReinitialize : true,
 })(PUserDetailsProps);

