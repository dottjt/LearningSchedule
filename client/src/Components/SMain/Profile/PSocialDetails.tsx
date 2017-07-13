import * as React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import './css/profile.css';



class PSocialDetails extends React.Component<PSocialDetailsProps & PSocialDetailsPassedProps, undefined> {


// own props - user
// own props - requestChangeSchedule
// passed props - form, initialValues, topbar_active, match 

	constructor() {
	super();
		this.changeSocialDetails = this.changeSocialDetails.bind(this);
	}




	changeSocialDetails = (values) => {

		let { requestChangeSocial } = this.props;

		requestChangeSocial(values);

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



/*
             COMPONENT VIEW
                                      */

        if(login_status_var === false) {
            return (
                <div></div>
            )
        } else {
            return (
                    <form className="p__user__social__container" onBlur={handleSubmit(values => this.changeSocialDetails(values))}>
                    
                    
                            {/* Schedule Title */}
                            <div className="p__user__details__fields__container">

                                <h3 className="p__user__field__title">Facebook username</h3> 
                                {/*<span className="p__user__field__title__small">i.e. smithyj38</span>*/}
                                <Field className="p__user__field__social" 
                                            name="facebook" 
                                            component="input" 
                                            type="text" 
                                            placeholder="facebook."
                                            maxLength={35}
                                            disabled={fieldDis}
                                            />

                                
                                <h3 className="p__user__field__title">Twitter username</h3>

                                <Field className="p__user__field__social" 
                                            name="twitter" 
                                            component="input" 
                                            type="text" 
                                            placeholder="twitter."
                                            maxLength={35}
                                            disabled={fieldDis}
                                            />


                                <h3 className="p__user__field__title">Github username</h3>

                                <Field className="p__user__field__social"
                                            name="github"
                                            component="input"
                                            type="text"
                                            placeholder="github."
                                            maxLength={35}
                                            disabled={fieldDis}
                                            />

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

import { requestChangeSocial } from '../../../arcss/users_ar';
import { connect } from 'react-redux';
// import { Map } from 'immutable';


const mapDispatchToProps = dispatch => { 
	return { 
		requestChangeSocial: (data) => dispatch(requestChangeSocial(data))
	} 
};


const PSocialDetailsProps = connect<{}, {}, PSocialDetailsPassedProps>(null, mapDispatchToProps)(PSocialDetails);

export default reduxForm({
    enableReinitialize : true,
 })(PSocialDetailsProps);

