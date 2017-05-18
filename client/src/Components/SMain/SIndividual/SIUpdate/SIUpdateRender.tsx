import * as React from 'react';
import { Field, FieldArray } from 'redux-form/immutable';
var moment = require('moment');

import './css/si__update.css';
// import { Map } from 'immutable';

import SIUpdateTagRender from './SIUpdateTagRender';


class SIUpdateRender extends React.Component<SIUpdateRenderProps & SIUpdateRenderPassedProps, SIUpdateRenderState> {




// own props - user
// own props - requestRemoveUpdate
// passed props - schedule_id, form, topbar_active update_tags


/*
          COMPONENT STATE LOGIC

                                      */


    constructor(props) {
        super(props);
        // this.handleSummaryActive = this.handleSummaryActive.bind(this);
    }

    // handleSummaryActive() { this.setState({ topbar_active: !this.state.topbar_active }) }



/*
             COMPONENT LOGIC

                                      */

    render() {

        const { fields } = this.props; 
        const { requestRemoveUpdate, requestChangeUpdate } = this.props;
        const {  si__update__display__none, si__update__border__none, fieldDis } = this.props;
                //       schedule_id, updates_id, username,  
        const { schedule_url } = this.props;                                                                        
        const removeUpdate = (index) => { requestRemoveUpdate(fields.get(index).get('update_id')); fields.remove(index); }

        const requestChange = (index) => { requestChangeUpdate(fields.get(index)); }



        const updateTagRenderProps = (index) => {
            return {
                currentUpdate: fields.get(index),
                si__update__display__none: si__update__display__none,
                si__update__border__none: si__update__border__none,
                fieldDis: fieldDis,
                schedule_url: schedule_url

            }
        }

        // let updateTagRenderProps = {
        //     schedule_id,
        //     updates_id,
        //     username,
        //     si__update__display__none,
        //     si__update__border__none,
        //     fieldDis,
        //     currentUpdate
        // }

/*
             COMPONENT VIEW

                                      */


        return (

            <div className="si__update__individual__container">                

                {/* SIUpdates Begin */}
                {fields.map((update, index) => 
                    <div className="si__update__inner" key={index}> 

                        {/* SIUpdate Remove Button */}
                            <button id={si__update__display__none} className="si__update__remove" title="Remove Update" onClick={(event) => { event.preventDefault(); removeUpdate(index) } }><span className="si__update__remove__x">x</span></button>

                            <div className="border__left"></div>

                            {/* TEXT UPDATE */}
                            {fields.get(index).get('update_type') === "text" && 
                                <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                    <p id={si__update__border__none} className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')} - </p>
                                    
                                    <Field id={si__update__border__none} className="si__update__title__field" name={`${update}.update_title`} type="input" component="input" label="update_text" maxLength={60} onBlur={() => requestChange(index)} disabled={fieldDis}/>

                                    <div className="si__update__text__container">
                                        <Field id={si__update__border__none} className="si__update__text__field" name={`${update}.update_text`} type="textarea" component="textarea" label="update_text" maxLength={300} onBlur={() => requestChange(index)} disabled={fieldDis}/>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            }

                            {/* LINK UPDATE */}
                            {fields.get(index).get('update_type') === "link" && 
                                <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                    <p className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')} - </p>
                                    
                                    <Field id={si__update__border__none}  className="si__update__title__field" name={`${update}.update_title`} type="input" component="input" label="update_text" maxLength={60} onBlur={() => requestChange(index)} disabled={fieldDis}/>

                                    <div className="si__update__link__container">
                                        <Field id={si__update__border__none}  className="si__update__link__field" name={`${update}.update_text`} type="textarea" component="textarea" label="update_text" maxLength={300} onBlur={() => requestChange(index)} disabled={fieldDis}/>
                                    </div>
                                </div>
                            }

                            {/* MILESTONE UPDATE */}
                            {fields.get(index).get('update_type') === "milestone" && 
                                <div className="si__update__top__container">  {/*className="si__update__date__underline" */} 
                                    <p className="si__update__date">{moment(fields.get(index).get('update_date')).format('DD MMM Y')} - </p>
                                    
                                    <Field id={si__update__border__none} className="si__update__title__field" name={`${update}.update_title`} type="input" component="input" label="update_text" maxLength={60} onBlur={() => requestChange(index)} disabled={fieldDis}/>

                                    <div className="si__update__milestone__container">
                                        <Field id={si__update__border__none} className="si__update__milestone__field" name={`${update}.update_text`} type="textarea" component="textarea" label="update_text" maxLength={300} onBlur={() => requestChange(index)} disabled={fieldDis}/>
                                    </div>
                                </div>
                            }

                            {/*<SIUpdateTagRender schedule_id={schedule_id}/>*/}

                                <FieldArray name="update_tags" component={SIUpdateTagRender} props={updateTagRenderProps(index)} />


        {/* maybe implement something to this effect */}
        
        {/*<div className="si__tag__container">
            <form>
                <FieldArray name="tags" component={SITagRender} props={propsObject}/>
            </form>
        </div>*/}



                            
                            {/*<SIUpdateTagRender
                                updates_id={updates_id}
                                username={username}
                                si__update__display__none={si__update__display__none }
                                si__update__border__none={ si__update__border__none}
                                fieldDis={fieldDis}
                                update_tags={update_tags}
   
                             /> */}

                    </div> // SIUpdate inner container end 
                )}
            </div> // SIUpdate outer container end 
        )
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
