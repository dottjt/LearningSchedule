/// <reference path="./interfaces_up.d.ts"/>

import * as React from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form/immutable';
import { Map } from 'immutable';
import SIUpdateRender from './SIUpdateRender';
// import SIUpdateSingle from './SIUpdateSingle';
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

        const requestAddObject = Map({ 
            schedule_id: schedule_id, 
            updates_id: form, // form is updates_id
            schedule_url: schedule_url,
            username: user.get('username'),
            update_id: uuid(),
            update_title: "",
            update_text: ""
        });

        console.log("add Update sending"); 
        console.log(values.toJS()); 
        requestAddUpdate(requestAddObject); 
    }


    render() {

        const { handleSubmit, schedule_id, form, user, login_status_var, updateTypeValue } = this.props;
                            // form is updates_id, I think?

		let field_disable_id, fieldDis;  // style to disable forms. 
		
		if (login_status_var === false) {
			field_disable_id = "field_disabled_style_si__update";
			fieldDis = true;
		}

        const updateTagsProps = {
            schedule_id: schedule_id, 
            updates_id: form, 
            username: user.get('username'),
            field_disable_id: field_disable_id,
            fieldDis: fieldDis
        }


/*
             COMPONENT VIEW

                                      */


        return (

                <form className="si__update__container">

                    <div className="si__update__single__container">
                        
                        <div id={field_disable_id}>
                            <Field name="updateType" component="select">
                                <option value="text">Text update</option>
                                <option value="link">Post a link</option>
                                <option value="milestone">Learning milestone</option>
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

                            {updateTypeValue === "text" && 
                                    <div>
                                        <Field className="update__single__text__field" 
                                                name="update_text" 
                                                component="textarea" 
                                                type="text" 
                                                placeholder="Text."
                                                maxLength={300}
                                                />
                                    </div> }

                                {updateTypeValue === "link" && 
                                    <div className="update__single__link__container">
                                        <Field className="update__single__link__field" 
                                                name="update_text" 
                                                component="input" 
                                                type="text" 
                                                placeholder="Link."
                                                />
                                    </div>
                                }

                                {updateTypeValue === "milestone" && 
                                    <div className="update__single__milestone__container">
                                        <Field 
                                            className="update__single__milestone__field" 
                                            name="update_text" 
                                            component="input" 
                                            type="text" 
                                            placeholder="Achievement."
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
      updateTypeValue: selector(initialProps.form, state, 'updateType'),
    }
}


const mapDispatchToProps = dispatch => { 
    return { 
        requestAddUpdate: (data) => dispatch(requestAddUpdate(data))
    }
}


let SIUpdatePropsComponent = connect<{}, {}, SIUpdateSinglePassedProps>(mapStateToProps, mapDispatchToProps)(SIUpdate as any)


export default reduxForm({ enableReinitialize : true, form: '22345678' })(SIUpdatePropsComponent);





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