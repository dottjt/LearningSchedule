/// <reference path="./interfaces_up.d.ts"/>

import * as React from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form/immutable';
import { Map } from 'immutable';
import SIUpdateRender from './SIUpdateRender';
var uuid = require('uuid');

import './css/si__update__single.css';
import './css/si__update.css';


class SIUpdate extends React.Component<SIUpdateProps, SIUpdateState> {


// own props - NA
// passed props - form, initialValues, schedule_id, topbar_active  


/*
             COMPONENT LOGIC

                                      */

	constructor() {
	super();
		this.addUpdate = this.addUpdate.bind(this);
		this.state = {fd: "yolo"}
	}

    addUpdate(values) { 

        const {schedule_url, schedule_id, user, form, requestAddUpdate} = this.props;

        requestAddUpdate(Map({ 
            schedule_id: schedule_id, 
            updates_id: form, // form is updates_id
            schedule_url: schedule_url,
            username: user.get('username'),
            update_id: uuid(),
            update_tags_id: uuid(),
            update_title: values.get('update_title'),
            update_text: values.get('update_text'),
            update_summary: values.get('update_summary'),
            update_type: values.get('update_type')
        })); 
    }


    render() {

        const { handleSubmit, schedule_id, form, user, login_status_var, update_type_value, update_tags } = this.props;
                            // form is updates_id, I think?

		let si__update__display__none, si__update__border__none, fieldDis;  // style to disable forms. 
		
		if (login_status_var === false) {
			si__update__display__none = "si__update__display__none"; // this one for making div disappear?
            si__update__border__none = "si__update__border__none"; // this one for making border disappear?
			fieldDis = true;
		}

        const updateTagsProps = {
            schedule_id: schedule_id, 
            updates_id: form, 
            username: user.get('username'),
            si__update__display__none: si__update__display__none,
            si__update__border__none: si__update__border__none,
            fieldDis: fieldDis,
            update_tags: update_tags
        }


/*
             COMPONENT VIEW

                                      */


        return (

                <form className="si__update__container">

                    <div className="si__update__single__container">
                        
                        <div id={si__update__display__none}>
                            <Field className="si__update__select" name="update_type" component="select">
                                <option value="text">Text</option>
                                <option value="link">Link</option>
                                <option value="milestone">Milestone</option>
                            </Field>

                        {/* SIUpdate Add Button */}
                            <button className="si__update__add" type="button" onClick={ handleSubmit(values => this.addUpdate(values)) }>Add Update</button>

                            <div className="update__single__field__container">
                                <Field className="update__single__title__field" 
                                        name="update_title" 
                                        component="input" 
                                        type="text" 
                                        placeholder="Title."
                                        maxLength={300}
                                        />

                            {update_type_value === "text" && 
                                    <div className="update__single__text__container">
                                        <Field className="update__single__text__field" 
                                                name="update_text" 
                                                component="textarea" 
                                                type="text" 
                                                placeholder="Text."
                                                maxLength={300}
                                                />
                                    </div> }

                                {update_type_value === "link" && 
                                    <div className="update__single__link__container">
                                            <Field className="update__single__link__field" 
                                                    name="update_text" 
                                                    component="input" 
                                                    type="text" 
                                                    placeholder="Link."
                                                    />
                                        <Field className="update__single__link__field update__single__link__field__bottom" 
                                                name="update_summary" 
                                                component="input" 
                                                type="text" 
                                                placeholder="Link Summary."
                                                />
                                    </div>
                                }

                                {update_type_value === "milestone" && 
                                    <div className="update__single__milestone__container">
                                        <Field 
                                            className="update__single__milestone__field" 
                                            name="update_text" 
                                            component="input" 
                                            type="text" 
                                            placeholder="Milestone."
                                            />
                                    </div> }
                            </div> {/* end of update */}
                        </div>

                        <FieldArray name="updates" component={SIUpdateRender} props={updateTagsProps} />
                       
                    </div>  {/* si__update__single__container */}
                </form>
        )
    }
}


/*
             COMPONENT CONTAINER

                                      */

import { connect } from 'react-redux'
import { requestAddUpdate } from '../../../../arcss/updates_ar';


const selector = (form, ...other) => (formValueSelector(form))(...other);

const mapStateToProps = (state, initialProps) => {
    // const updateTypeValue = selector(state, 'updateType')
    return {
      update_type_value: selector(initialProps.form, state, 'update_type'),
    }
}


const mapDispatchToProps = dispatch => { 
    return { 
        requestAddUpdate: (data) => dispatch(requestAddUpdate(data))
    }
}


let SIUpdatePropsComponent = connect<{}, {}, SIUpdateRenderPassedProps>(mapStateToProps, mapDispatchToProps)(SIUpdate as any)


export default reduxForm({ enableReinitialize : true })(SIUpdatePropsComponent);





// var formID = uuid();
// really not too sure about this.  

// const selector = formValueSelector(SIUpdate) // <-- same as form name

// const mapStateToProps = (state, initialProps) => {
//   return {
//     myField: selector(initialProps.form, state, 'myField'),
//   };
// };

// const mapStateToProps = (state, initialProps) => {
//     const updateTypeValue = selector(state, 'updateType')
//     return {
//       updateTypeValue
//     }
// }