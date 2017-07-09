/// <reference path="./interfaces_up.d.ts"/>

import * as React from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form/immutable';
import { Map } from 'immutable';
import SIUpdateRender from './SIUpdateRender';
//import EmojiPicker from 'emojione-picker';
//import {emojify} from 'react-emojione';
// import './css/picker.css'; 
var uuid = require('uuid');

import './css/si__update__single.css';
import './css/si__update.css';
import '../css/si.css';
import '../../STopbar/SM_Home/css/sm__update.css';


class SIUpdate extends React.Component<SIUpdateProps & SIUpdatePassedProps, SIUpdateState> {


// own props - NA
// passed props - form, initialValues, schedule_id, topbar_active


/*
             COMPONENT LOGIC

                                      */

	constructor() {
	super();
		this.addUpdate = this.addUpdate.bind(this);
		this.changeLength = this.changeLength.bind(this);
		this.createUpdateTagsProps = this.createUpdateTagsProps.bind(this);
		// this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this._onSubmit = this._onSubmit.bind(this);

		this.onSingleUpdateTitleLengthChange = this.onSingleUpdateTitleLengthChange.bind(this);
		this.onSingleUpdateTextLengthChange= this.onSingleUpdateTextLengthChange.bind(this);
		this.onSingleUpdateLinkLengthChange= this.onSingleUpdateLinkLengthChange.bind(this);
		this.onSingleUpdateSummaryLengthChange = this.onSingleUpdateSummaryLengthChange.bind(this);
		this.onSingleUpdateMilestoneLengthChange = this.onSingleUpdateMilestoneLengthChange.bind(this);
        
        this.state = {
            fd: "yolo", 
            showEmoji: false,
            update_single_title_length: 0,
            update_single_text_length: 0,
            update_single_link_length: 0,
            update_single_summary_length: 0,
            update_single_milestone_length: 0
        }
	}

    onSingleUpdateTitleLengthChange(values) {
        let update_single_title = values.get('update_title').length
		console.log(update_single_title);

		this.setState({
			update_single_title_length: update_single_title
		})

    }

    onSingleUpdateTextLengthChange(values) {
        let update_single_text = values.get('update_text').length
		console.log(update_single_text);

		this.setState({
			update_single_text_length: update_single_text
		})

    }

    onSingleUpdateLinkLengthChange(values) {
        let update_single_link = values.get('update_text').length
		console.log(update_single_link);

		this.setState({
			update_single_link_length: update_single_link
		})
    }

    onSingleUpdateSummaryLengthChange(values) {
        let update_single_summary = values.get('update_summary').length
		console.log(update_single_summary);

		this.setState({
			update_single_summary_length: update_single_summary
		})
    }

    onSingleUpdateMilestoneLengthChange(values) {
        let update_single_milestone = values.get('update_text').length
		console.log(update_single_milestone);

		this.setState({
			update_single_milestone_length: update_single_milestone
		})

    }

    changeLength(values) { 

        // const {schedule_url, schedule_id, user, form, requestChangeLengthUpdate } = this.props;
        const { requestChangeLengthUpdate } = this.props;
        
        // console.log(values.toJS());

        // let update_type; 
        // if (this.props.update_type_value === undefined) {
        //     update_type = "text";
        // }


        requestChangeLengthUpdate(Map({ 
            // schedule_id: schedule_id, 
            // updates_id: form, // form is updates_id
            // schedule_url: schedule_url,
            // username: user.get('username'),
            update_id: values.get('update_id'),
            // update_tags_id: uuid(),
            // update_title: values.get('update_title'),
            // update_text: values.get('update_text'),
            // update_summary: values.get('update_summary'),
            // update_type: update_type, // values.get('update_type') // need to get this... 
            // figure out which ones you don't want.


            // these might not work, given that they are
            update__title__length: values.get('update_title').length,
            update__text__length: values.get('update_text').length,
            update__summary__length: values.get('update_summary').length
        }));
 
    }


    addUpdate(values) { 

        const {schedule_url, schedule_id, user, form, requestAddUpdate } = this.props;

        // console.log(values.toJS())

        let update_type; 
        if (this.props.update_type_value === undefined) {
            update_type = "text";
        }


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
            update_type: update_type, // values.get('update_type') // need to get this... 

            // these might not work, given that they are
            update__title__length: values.get('update_title').length,
            update__text__length: values.get('update_text').length,
            update__summary__length: values.get('update_summary').length
        }));
 
    }

    createUpdateTagsProps(si__update__display__none, si__update__border__none, fieldDis) {
        let { schedule_id, schedule_url, form, user, login_status_var } = this.props;

        return {
            schedule_id: schedule_id, 
            schedule_url: schedule_url,
            updates_id: form, 
            username: user.get('username'),
            si__update__display__none: si__update__display__none,
            si__update__border__none: si__update__border__none,
            fieldDis: fieldDis,
            login_status_var: login_status_var
        }
    }


    _onSubmit(e) {
        e.preventDefault();
    }

    // showEmojiPicker(e) {
    //     e.preventDefault();
    //     this.setState({ showEmoji: !this.state.showEmoji})
    // }

    render() {
		// let { update_single_title_length, update_single_text_length, update_single_link_length, update_single_summary_length, update_single_milestone_length } = this.state;
        let { handleSubmit, login_status_var, update_type_value } = this.props;
		let si__update__display__none, si__update__border__none, fieldDis;  // style to disable forms. 

		if (login_status_var === false) {
			si__update__display__none = "si__update__display__none"; // this one for making div disappear?
            si__update__border__none = "si__update__border__none"; // this one for making border disappear?
			fieldDis = true;
		}





/*
             COMPONENT VIEW
                                      */


        // console.log("check this", this.props.update_type_value)

        return (

                <form className="sm__update__outer__container" onSubmit={this._onSubmit}>

                    <div className="sm__update__text__container">
                        
                        <div id={si__update__display__none} className="si__update__select__container">
                            
                            <div className="si__update__select__container__top">
                                <Field className="si__update__select" name="update_type" type="text" component="select" ref="update_type_ref">
                                    <option default value="text">Text</option>
                                    <option value="link">Link</option>
                                    <option value="milestone">Milestone</option>
                                </Field>

                            {/* SIUpdate Add Button */}
                                <button className="si__update__add" type="button" onClick={handleSubmit(values => this.addUpdate(values))}>Add Update</button>
                            </div>
                            

                            {/* emoji things that I decided to get rid of */}

                            {/*<div className="emoji-picker-container-reade">
                                <a className="emoji-picker-button" onClick={(e) => this.showEmojiPicker(e)}>{emojify(":)")}</a>

                                <div id={`${this.state.showEmoji}-update_emoji`}>
                                    <EmojiPicker className="emojipicker-reade" 
                                                onChange={function(data){
                                                            console.log(data)
                                                                    }} />
                                </div>
                            </div>*/}

                            <div className="update__single__field__container">
                                
                                <Field className="update__single__title__field si__update__generic__field" 
                                        name="update_title" 
                                        component="textarea" 
                                        type="text" 
                                        placeholder="Title."
                                        maxLength={80}    
                                        onChange={handleSubmit(values => this.changeLength(values))}
                                        />
                                        {/*onFocus={handleSubmit(values => this.onSingleUpdateTitleLengthChange(values))}*/}
                                        
                                {/*<span>{update_single_title_length}</span>*/}


                                {(update_type_value === "text" || update_type_value === undefined) && 

                                    <div className="si__update__generic__field__container update__single__text__container">

                                        <Field className="update__single__text__field si__update__generic__field" 
                                                name="update_text"
                                                component="textarea"
                                                type="text"
                                                placeholder="Text."
                                                maxLength={400}
                                                onChange={handleSubmit(values => this.changeLength(values))}

                                                />
                                        {/*<span>{update_single_text_length}</span>*/}

                                    </div> 
                                }

                                {update_type_value === "link" && 
                                
                                    <div className="si__update__generic__field__container">

                                        <Field className="update__single__link__field si__update__generic__field" 
                                                name="update_text" 
                                                component="input" 
                                                type="text" 
                                                placeholder="Link."
                                                maxLength={350}
                                                onChange={handleSubmit(values => this.changeLength(values))}
                                                />
                                        {/*<span>{update_single_link_length}</span>*/}

                                        <Field className="update__single__link__summary__field si__update__generic__field update__single__link__field__bottom" 
                                                name="update_summary" 
                                                component="textarea" 
                                                type="text" 
                                                placeholder="Link Summary."
                                                maxLength={200}
                                                onChange={handleSubmit(values => this.changeLength(values))}
                                                />
                                        {/*<span>{update_single_summary_length}</span>*/}

                                    </div>
                                }

                                {update_type_value === "milestone" && 

                                    <div className="si__update__generic__field__container update__single__milestone__container">
                                        
                                        <Field 
                                            className="update__single__milestone__field si__update__generic__field" 
                                            name="update_text" 
                                            component="input" 
                                            type="text" 
                                            placeholder="Milestone."
                                            maxLength={80}
                                            onChange={handleSubmit(values => this.changeLength(values))}
                                            />
                                        {/*<span>{update_single_milestone_length}</span>*/}

                                    </div> 
                                }

                            </div> {/* end of update */}

                        </div>

                        <FieldArray name="updates" component={SIUpdateRender} props={this.createUpdateTagsProps(si__update__display__none, si__update__border__none, fieldDis)} />
                       
                    </div>  
                </form>
        )
    }
}


/*
             COMPONENT CONTAINER

                                      */

import { connect } from 'react-redux'
import { requestAddUpdate, requestChangeLengthUpdate } from '../../../../arcss/updates_ar';


const selector = (form, ...other) => (formValueSelector(form))(...other);

const mapStateToProps = (state, initialProps) => {
    // const updateTypeValue = selector(state, 'updateType')
    return {
      update_type_value: selector(initialProps.form, state, 'update_type'),
    }
}


const mapDispatchToProps = dispatch => { 
    return { 
        requestAddUpdate: (data) => dispatch(requestAddUpdate(data)),
        requestChangeLengthUpdate: (data) => dispatch(requestChangeLengthUpdate(data))
    }
}


let SIUpdatePropsComponent = connect<{}, {}, SIUpdateRenderPassedProps>(mapStateToProps, mapDispatchToProps)(SIUpdate as any)


export default reduxForm({ 
    
    enableReinitialize : true

 })(SIUpdatePropsComponent);





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