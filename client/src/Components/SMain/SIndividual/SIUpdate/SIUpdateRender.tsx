import * as React from 'react';
import { Field, FieldArray } from 'redux-form/immutable';
var moment = require('moment');

import './css/si__update.css';
import '../../STopbar/SM_Home/css/sm__update.css';
// import { Map } from 'immutable';

import SIUpdateTagRender from './SIUpdateTagRender';


class SIUpdateRender extends React.Component<SIUpdateRenderProps & SIUpdateRenderPassedProps, SIUpdateRenderState> {


// own props - user
// own props - requestRemoveUpdate
// passed props - schedule_id, form, topbar_active



/*
          COMPONENT STATE LOGIC

                                      */


    constructor(props) {
        super(props);
        this.removeUpdate = this.removeUpdate.bind(this);
        this.requestChange = this.requestChange.bind(this);
        // this.requestChangeLength = this.requestChangeLength.bind(this);
        this.createUpdateTagRenderProps = this.createUpdateTagRenderProps.bind(this);

        // // initial population. 
		// this.getSingleUpdateTitleLength = this.getSingleUpdateTitleLength.bind(this);
		// this.getSingleUpdateTextLength = this.getSingleUpdateTextLength.bind(this);
		// this.getSingleUpdateSummaryLength = this.getSingleUpdateSummaryLength.bind(this);


        // // changing functions. 
		// this.onSingleUpdateTitleLengthChange = this.onSingleUpdateTitleLengthChange.bind(this);        
        // this.onSingleUpdateTextLengthChange= this.onSingleUpdateTextLengthChange.bind(this);

		// this.onSingleUpdateTitleLinkLengthChange = this.onSingleUpdateTitleLinkLengthChange.bind(this);        
        // this.onSingleUpdateTextLinkLengthChange= this.onSingleUpdateTextLinkLengthChange.bind(this);
		// this.onSingleUpdateSummaryLinkLengthChange = this.onSingleUpdateSummaryLinkLengthChange.bind(this);

		// this.onSingleUpdateMilestoneTitleLengthChange = this.onSingleUpdateMilestoneTitleLengthChange.bind(this);
		// this.onSingleUpdateMilestoneTextLengthChange = this.onSingleUpdateMilestoneTextLengthChange.bind(this);


        // this.state = {
        //     update_single_title_length: this.props.initialValues.get('')
        // }

        // this.state = {
        //     update_single_title_length: 0,
        //     update_single_text_length: 0,

        //     update_single_link_title_length: 0,
        //     update_single_link_text_length: 0,
        //     update_single_link_summary_length: 0,

        //     update_single_milestone_title_length: 0,
        //     update_single_milestone_text_length: 0
        // }
    }


    // getSingleUpdateTitleLength() {
    //     return this.props.initialValues.get('update_title').length // 
    // }

    // getSingleUpdateTextLength() {
    //     return this.props.initialValues.get('update_text').length // 
    // }

    // getSingleUpdateSummaryLength() {
    //     return this.props.initialValues.get('update_summary').length // 
    // }



    // onSingleUpdateTitleLengthChange(index) {
    //     let { fields } = this.props;
    //     console.log(this.props.fields)
    //     let update_single_title = fields.get(index).get('update_title').length;
	// 	console.log(update_single_title);

	// 	this.setState({
	// 		update_single_title_length: update_single_title
	// 	})

    // }

    // onSingleUpdateTextLengthChange(index) {
    //     let { fields } = this.props;

    //     let update_single_text = fields.get(index).get('update_text').length;
	// 	console.log(update_single_text);

	// 	this.setState({
	// 		update_single_text_length: update_single_text
	// 	})

    // }

    // onSingleUpdateTitleLinkLengthChange(index) {
    //     let { fields } = this.props;

    //     let update_single_link_title = fields.get(index).get('update_title').length;
	// 	console.log(update_single_link_title);

	// 	this.setState({
	// 		update_single_link_title_length: update_single_link_title
	// 	})

    // }

    // onSingleUpdateTextLinkLengthChange(index) {
    //     let { fields } = this.props;

    //     let update_single_link_text = fields.get(index).get('update_text').length;
	// 	console.log(update_single_link_text);

	// 	this.setState({
	// 		update_single_link_text_length: update_single_link_text
	// 	})

    // }

    // onSingleUpdateSummaryLinkLengthChange(index) {
    //     let { fields } = this.props;

    //     let update_single_link_summary = fields.get(index).get('update_summary').length;
	// 	console.log(update_single_link_summary);

	// 	this.setState({
	// 		update_single_link_summary_length: update_single_link_summary
	// 	})

    // }

    // onSingleUpdateMilestoneTitleLengthChange(index) {
    //     let { fields } = this.props;

    //     let update_single_milestone_title = fields.get(index).get('update_summary').length;
	// 	console.log(update_single_milestone_title);

	// 	this.setState({
	// 		update_single_milestone_title_length: update_single_milestone_title
	// 	})

    // }

    // onSingleUpdateMilestoneTextLengthChange(index) {
    //     let { fields } = this.props;

    //     let update_single_milestone_text = fields.get(index).get('update_summary').length;
	// 	console.log(update_single_milestone_text);

	// 	this.setState({
	// 		update_single_milestone_text_length: update_single_milestone_text
	// 	})

    // }


    // requestChangeLength(index) { 

    //     // const {schedule_url, schedule_id, user, form, requestChangeLengthUpdate } = this.props;
    //     const { requestChangeLengthUpdate, fields } = this.props;
        
    //     // console.log("hihihihi", fields.get(index))

    //     // console.log("see if it works", fields.get(index).get('update_title').length)


    //     let update_title_length, update_text_length, update_summary_length;
        
    //     if(fields.get(index).get('update_title')) {
    //         update_title_length = fields.get(index).get('update_title').length;
    //     } else {
    //         update_title_length = null;
    //     }

    //     if(fields.get(index).get('update_text')) {
    //         update_text_length = fields.get(index).get('update_text').length;
    //     } else {
    //         update_text_length = null;
    //     }

    //     if(fields.get(index).get('update_summary')) {
    //         update_summary_length = fields.get(index).get('update_summary').length;
    //     } else {
    //         update_summary_length = null;
    //     }


    //     requestChangeLengthUpdate(Map({ 
    //         // schedule_id: schedule_id, 
    //         // updates_id: form, // form is updates_id
    //         // schedule_url: schedule_url,
    //         // username: user.get('username'),
    //         update_id: fields.get(index).get('update_id'),
    //         // update_tags_id: uuid(),
    //         // update_title: values.get('update_title'),
    //         // update_text: values.get('update_text'),
    //         // update_summary: values.get('update_summary'),
    //         // update_type: update_type, // values.get('update_type') // need to get this... 
    //         // figure out which ones you don't want.


    //         // these might not work, given that they are
    //         update_title_length: update_title_length,
    //         update_text_length: update_text_length,
    //         update_summary_length: update_summary_length
    //     }));
 
    // }

    removeUpdate(index) {
        const { requestRemoveUpdate, fields } = this.props;
        requestRemoveUpdate(fields.get(index).get('update_id')); fields.remove(index); 
    }

    requestChange(index) {
        const { requestChangeUpdate, fields } = this.props;
        
        // console.log("seehere buddy", fields.get(index).toJS())
        requestChangeUpdate(fields.get(index)); 
    }

    createUpdateTagRenderProps(index) {
        let { fields, si__update__display__none, si__update__border__none, fieldDis } = this.props;
        let { schedule_url, schedule_id, updates_id, username } = this.props;

        return {
            currentUpdate: fields.get(index),
            si__update__display__none: si__update__display__none,
            si__update__border__none: si__update__border__none,
            fieldDis: fieldDis,
            schedule_url: schedule_url,
            schedule_id: schedule_id, 
            updates_id: updates_id,
            username: username
        }
    }

    // componentDidUpdate() {
    //     this.props.fields.swap(0, this.props.fields.get().size - 1 )
    // doesn't work. 
    // }

/*
             COMPONENT LOGIC

                                      */

    render() {
		// let { update_single_title_length, update_single_text_length, update_single_link_title_length, update_single_link_text_length, update_single_link_summary_length, update_single_milestone_title_length, update_single_milestone_text_length } = this.state;
        let { si__update__display__none, si__update__border__none, fieldDis, login_status_var } = this.props;
        let { fields } = this.props;                                                                        

        // okay, I need to figure out how to populate these based on 

		// if(initialValues !== undefined && this.state.update_single_title_length === 0) {
		// 	this.setState({
        //         update_single_title_length: 0,
        //         update_single_text_length: 0,

        //         update_single_link_title_length: 0,
        //         update_single_link_text_length: 0,
        //         update_single_link_summary_length: 0,

        //         update_single_milestone_title_length: 0,
        //         update_single_milestone_text_length: 0,
		// 	})
		// }



/*
             COMPONENT VIEW

                                      */
        // console.log('fields swap', fields.swap(0, 1))
        // console.log('fields length', fields.length)

        if(fields.length < 0 && login_status_var === false) {
            
            return (
            <div className="si__update__individual__container">                
                <h3 className="si__update__individual__empty">
                    "Well, well, it seems like this person hasn't created any updates yet."
                </h3>
            </div>
            )

        } else {
            return (
                
                <div className="si__update__individual__container">                

                    {/* SIUpdates Begin */}
                    
                    {fields.map((update, index) => 

                        <div className="si__update__inner" key={index}> 

                            {/* SIUpdate Remove Button */}

                                <div className="border__left"></div>                            

                                {/* TEXT UPDATE */}
                                {fields.get(index).get('update_type') === "text" && 
                                    <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                        <div className="si__update__top_layer__left">

                                            <div className="si__update__top_layer__left__thing">
                                                <span className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')}</span> / <span style={{color: "#6699FF"}}>{fields.get(index).get('update_type')}</span>
                                                
                                                <Field id={`${si__update__border__none}`}
                                                    className="si__update__title__field"
                                                    name={`${update}.update_title`}
                                                    type="textarea"
                                                    placeholder="Title."
                                                    component="textarea"
                                                    label="update_title"
                                                    maxLength={40}
                                                    onBlur={(e) => this.requestChange(index)}
                                                    // see if there's an onActive attribute.../
                                                    disabled={fieldDis}
                                                />
                                            </div>

                                            <div>
                                                <button id={si__update__display__none} className="si__update__remove" title="Remove Update" onClick={(event) => { event.preventDefault(); this.removeUpdate(index) } }><span className="si__update__remove__x">x</span></button>
                                            </div>
                                        <FieldArray name="update_tags" component={SIUpdateTagRender} props={this.createUpdateTagRenderProps(index)} />

                                            {/*<Field 
                                                   className="update_length update_single_title_length"
                                                   name={`${update}.update_title_length`} 
                                                   type="input" 
                                                   component="input" 
                                                   disabled={fieldDis}                                            
                                            />*/}
                                            
                                            {/*<span className="update_single_title_length">{fields.get(index).get('update__title__length')}</span>*/}
                                            {/*<span className="update_single_title_length">{fields.get(index).get('update_title').length}</span>*/} 
                                            {/*<span>{this.state.update_single_title_length}</span>*/}

                                        </div>

                                        <div className="si__update__generic__field__container">
                                            <Field id={si__update__border__none} 
                                                   className="si__update__generic__field si__update__text__field" 
                                                   name={`${update}.update_text`} 
                                                   type="textarea"
                                                   component="textarea"
                                                   placeholder="Text."                                                   
                                                   label="update_text" 
                                                   maxLength={400} 
                                                   onBlur={(e) => this.requestChange(index)} 
                                                   //onKeyPress={() => this.requestChangeLength(index)}                                                    
                                                   disabled={fieldDis}
                                            />
                                            {/*<Field 
                                                   className="update_length update_single_text_length"
                                                   name={`${update}.update_text_length`} 
                                                   type="input" 
                                                   component="input" 
                                                   disabled={fieldDis}                                            
                                            />*/}
                                            {/*<span className="update_single_text_length">{fields.get(index).get('update_text').length}</span>*/}
                                            {/*<span>{fields.get(index).get('update_text').length}</span>*/}

                                        </div>


                                        {/*<div className="clear"></div>*/}
                                    </div>
                                }

                                {/* LINK UPDATE */}
                                {fields.get(index).get('update_type') === "link" && 
                                    <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                        <div className="si__update__top_layer__left">                                              
                                            <div className="si__update__top_layer__left__thing">                                                                                  
                                                <span className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')}</span> / <span style={{color: "#07faa0"}}>{fields.get(index).get('update_type')}</span>
                                                
                                                <Field id={si__update__border__none}  
                                                    className="si__update__title__field" 
                                                    name={`${update}.update_title`} 
                                                    type="textarea" 
                                                    placeholder="Title."                                                
                                                    component="textarea" 
                                                    label="update_text" 
                                                    maxLength={40} 
                                                    onBlur={() => this.requestChange(index)} 
                                                    //onKeyPress={() => this.requestChangeLength(index)}                                             
                                                    disabled={fieldDis}

                                                />
                                            </div>

                                            <div>
                                                <button id={si__update__display__none} className="si__update__remove" title="Remove Update" onClick={(event) => { event.preventDefault(); this.removeUpdate(index) } }><span className="si__update__remove__x">x</span></button>
                                            </div>
                                            
                                            <FieldArray name="update_tags" component={SIUpdateTagRender} props={this.createUpdateTagRenderProps(index)} />
                                            
                                            {/*<Field 
                                                   className="update_length update_single_link_title_length"
                                                   name={`${update}.update_title_length`} 
                                                   type="input" 
                                                   component="input" 
                                                   disabled={fieldDis}                                            
                                            />*/}
                                            
                                            {/*<span className="update_single_title_length">{fields.get(index).get('update_title').length}</span>*/}
                                            {/*<span>{fields.get(index).get('update_title').length}</span>*/}
                                            
                                        </div>

                                        <div className="si__update__generic__field__container">
                                            <div className="si__update__top_layer">                                                                                    
                                                <Field id={si__update__border__none}  
                                                    className="si__update__link__field si__update__generic__field" 
                                                    name={`${update}.update_text`} 
                                                    type="textarea" 
                                                    placeholder="Link."                                                                                                       
                                                    component="textarea" 
                                                    label="update_text" 
                                                    maxLength={300} 
                                                    onBlur={() => this.requestChange(index)} disabled={fieldDis}
                                                    //onKeyPress={() => this.requestChangeLength(index)}                                                    
                                                />
                                            {/*<Field 
                                                   className="update_length update_single_link_text_length"
                                                   name={`${update}.update_text_length`} 
                                                   type="input" 
                                                   component="input" 
                                                   disabled={fieldDis}                                            
                                            />*/}
                                                
                                                {/*<span className="update_single_text_length">{fields.get(index).get('update_text_length').length}</span>*/}
                                            {/*<span>{fields.get(index).get('update_text').length}</span>*/}
                                                
                                            </div>
                                        </div>
                                        <div className="si__update__generic__field__container">
                                            <Field id={si__update__border__none}  
                                                   className="si__update__link__summary__field si__update__generic__field" 
                                                   name={`${update}.update_summary`} 
                                                   type="textarea" 
                                                   component="textarea" 
                                                   placeholder="Link Text."                                                                                                      
                                                   label="update_text" 
                                                   maxLength={300} 
                                                   onBlur={() => this.requestChange(index)} 
                                                   //onKeyPress={() => this.requestChangeLength(index)}                                                    
                                                   disabled={fieldDis}
                                            />
                                            {/*<Field 
                                                   className="update_length update_single_link_summary_length"
                                                   name={`${update}.update_summary_length`} 
                                                   type="input" 
                                                   component="input" 
                                                   disabled={fieldDis}                                            
                                            />*/}
                                            
                                            {/*<span className="update_single_link_summary_length">{fields.get(index).get('update__summary__length')}</span>*/}
                                            {/*<span className="update_single_summary_length">{fields.get(index).get('update_summary').length}</span>*/}

                                        </div>

                                    </div>
                                }

                                {/* MILESTONE UPDATE */}
                                {fields.get(index).get('update_type') === "milestone" && 
                                    <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                        <div className="si__update__top_layer__left">  
                                            <div className="si__update__top_layer__left__thing">                                                                                                                                                                                                                
                                                <span className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')}</span> / <span style={{color: "#f60"}}>{fields.get(index).get('update_type')}</span>
                                                
                                                <Field id={si__update__border__none} 
                                                        className="si__update__title__field" 
                                                        name={`${update}.update_title`} 
                                                        type="textarea"
                                                        placeholder="Title."
                                                        component="textarea" 
                                                        label="update_text" 
                                                        maxLength={40} 
                                                        onBlur={() => this.requestChange(index)} 
                                                        //onKeyPress={() => this.requestChangeLength(index)}                                                 
                                                        disabled={fieldDis}
                                                />
                                            </div>

                                            <div>
                                                <button id={si__update__display__none} className="si__update__remove" title="Remove Update" onClick={(event) => { event.preventDefault(); this.removeUpdate(index) } }><span className="si__update__remove__x">x</span></button>
                                            </div>

                                            <FieldArray name="update_tags" component={SIUpdateTagRender} props={this.createUpdateTagRenderProps(index)} />

                                            {/*<Field 
                                                   className="update_length update_single_milestone_title_length"
                                                   name={`${update}.update_summary_length`} 
                                                   type="input" 
                                                   component="input" 
                                                   disabled={fieldDis}                                            
                                            />*/}
                                            
                                            {/*<span className="update_single_milestone_title_length">{fields.get(index).get('update__title__length')}</span>*/}
                                            {/*<span className="update_single_summary_length">{fields.get(index).get('update_title').length}</span>*/}
                                            
                                        </div>

                                        <div className="si__update__generic__field__container">
                                            <Field id={si__update__border__none} 
                                                   className="si__update__milestone__field si__update__generic__field" 
                                                   name={`${update}.update_text`} 
                                                   type="textarea" 
                                                   component="textarea" 
                                                   placeholder="Milestone."                                                   
                                                   label="update_text" 
                                                   maxLength={300}
                                                   onBlur={(e) => this.requestChange(index)} 
                                                   //onKeyPress={() => this.requestChangeLength(index)}
                                                   disabled={fieldDis}
                                            />
                                            {/*<Field 
                                                   className="update_length update_single_milestone_text_length"
                                                   name={`${update}.update_text`} 
                                                   type="input" 
                                                   component="input" 
                                                   disabled={fieldDis}                                            
                                            />                                            */}
                                            {/*<span className="update_single_milestone_text_length">{fields.get(index).get('update__text__length')}</span>*/}
                                            {/*<span className="update_single_text_length">{fields.get(index).get('update_text').length}</span>*/}

                                        </div>

                                    </div>
                                }

                                {/* where the FieldArray used to be. */}

                        </div> // SIUpdate inner container end 
                    )}
                </div> // SIUpdate outer container end 
            )
        }

    }
}

/*const renderField = props => (
    <div>
      <textarea {...props}/>
    </div>
)


/*
             COMPONENT CONTAINER

                                      */

import { requestChangeUpdate, requestRemoveUpdate, requestChangeLengthUpdate } from '../../../../arcss/updates_ar';

import { connect } from 'react-redux';


const mapDispatchToRender = dispatch => { 
    return { 
        requestRemoveUpdate: (data) => dispatch(requestRemoveUpdate(data)), 
        requestChangeUpdate: (data) => dispatch(requestChangeUpdate(data)),
        requestChangeLengthUpdate: (data) => dispatch(requestChangeLengthUpdate(data))

    } 
}

export default connect(undefined, mapDispatchToRender)(SIUpdateRender);

 


/*
             PAID FEATURES
                                      */                                      


//var DatePicker = require('react-datepicker');
// var moment = require('moment');


/*
<div className="update__start__date">
    <Field className="update__start__date__field" name={`${update}.update_date`} component={renderDatePicker} type="text" onKeyPress={() => requestChange(index)}/>
</div>


const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);
*/                                      
