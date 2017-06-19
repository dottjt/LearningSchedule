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
        this.createUpdateTagRenderProps = this.createUpdateTagRenderProps.bind(this);
    }

    removeUpdate(index) {
        const { requestRemoveUpdate, fields } = this.props;
        requestRemoveUpdate(fields.get(index).get('update_id')); fields.remove(index); 
    }

    requestChange(index) { 
        const { requestChangeUpdate, fields } = this.props;
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

        const {  si__update__display__none, si__update__border__none, fieldDis, login_status_var } = this.props;
        const { fields } = this.props;                                                                        


/*
             COMPONENT VIEW

                                      */
        // console.log('fields swap', fields.swap(0, 1))
        console.log('fields length', fields.length)

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
                                <button id={si__update__display__none} className="si__update__remove" title="Remove Update" onClick={(event) => { event.preventDefault(); this.removeUpdate(index) } }><span className="si__update__remove__x">x</span></button>

                                <div className="border__left"></div>



                                {/* TEXT UPDATE */}
                                {fields.get(index).get('update_type') === "text" && 
                                    <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                        <p className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')} - </p>
                                        
                                        <Field id={si__update__border__none} className="si__update__title__field si__update__title__field__relative" name={`${update}.update_title`} type="input" component="input" label="update_title" maxLength={50} onBlur={() => this.requestChange(index)} disabled={fieldDis}/>

                                        <FieldArray name="update_tags" component={SIUpdateTagRender} props={this.createUpdateTagRenderProps(index)} />

                                        <div className="si__update__text__container">
                                            <Field id={si__update__border__none} className="si__update__text__field" name={`${update}.update_text`} type="textarea" component="textarea" label="update_text" maxLength={400} onBlur={() => this.requestChange(index)} disabled={fieldDis}/>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                }

                                {/* LINK UPDATE */}
                                {fields.get(index).get('update_type') === "link" && 
                                    <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                        <p className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')} - </p>
                                        
                                        <Field id={si__update__border__none}  className="si__update__title__field si__update__title__field__relative" name={`${update}.update_title`} type="input" component="input" label="update_text" maxLength={60} onBlur={() => this.requestChange(index)} disabled={fieldDis}/>

                                        <FieldArray name="update_tags" component={SIUpdateTagRender} props={this.createUpdateTagRenderProps(index)} />

                                        <div className="si__update__link__container">
                                            <Field id={si__update__border__none}  className="si__update__link__field" name={`${update}.update_text`} type="textarea" component="textarea" label="update_text" maxLength={300} onBlur={() => this.requestChange(index)} disabled={fieldDis}/>
                                        </div>
                                        <div className="si__update__link__summary__container">
                                            <Field id={si__update__border__none}  className="si__update__link__summary__field" name={`${update}.update_summary`} type="textarea" component="textarea" label="update_text" maxLength={300} onBlur={() => this.requestChange(index)} disabled={fieldDis}/>
                                        </div>

                                    </div>
                                }

                                {/* MILESTONE UPDATE */}
                                {fields.get(index).get('update_type') === "milestone" && 
                                    <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                        <p className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')} - </p>
                                        
                                        <Field id={si__update__border__none} className="si__update__title__field si__update__title__field__relative" name={`${update}.update_title`} type="input" component="input" label="update_text" maxLength={60} onBlur={() => this.requestChange(index)} disabled={fieldDis}/>

                                        <FieldArray name="update_tags" component={SIUpdateTagRender} props={this.createUpdateTagRenderProps(index)} />

                                        <div className="si__update__milestone__container">
                                            <Field id={si__update__border__none} className="si__update__milestone__field" name={`${update}.update_text`} type="textarea" component="textarea" label="update_text" maxLength={300} onBlur={() => this.requestChange(index)} disabled={fieldDis}/>
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

import { requestChangeUpdate, requestRemoveUpdate } from '../../../../arcss/updates_ar';
import { connect } from 'react-redux';


const mapDispatchToRender = dispatch => { 
    return { 
        requestRemoveUpdate: (data) => dispatch(requestRemoveUpdate(data)), 
        requestChangeUpdate: (data) => dispatch(requestChangeUpdate(data)) 
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
    <Field className="update__start__date__field" name={`${update}.update_date`} component={renderDatePicker} type="text" onBlur={() => requestChange(index)}/>
</div>


const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);
*/                                      
