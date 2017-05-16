import * as React from 'react';
import { Field } from 'redux-form/immutable';
import { Map } from 'immutable';

import './css/si__update.css';
import '../SITag/css/si__tag.css';

class SIUpdateTagRender extends React.Component<SIUpdateTagRenderProps & SIUpdateTagRenderPassedProps, SIUpdateRenderState> {




// own props - user
// own props - requestRemoveUpdate
// passed props - schedule_id, form, topbar_active update_tags


/*
          COMPONENT STATE LOGIC

                                      */



/*
             COMPONENT LOGIC

                                      */

    render() {

        const { fields } = this.props; 
        const { requestRemoveTag, requestAddTag } = this.props;
        const { schedule_id, updates_id, username, fieldDis, field_disable } = this.props;

        const addTag = (e) => {
            
            e.preventDefault();

            var val = (document.getElementById('add_input_id') as HTMLInputElement);

            if (e.key === 'Enter') {
                let tag_text_value = val.value;

                let requestAddObject = Map({
                    schedule_id,
                    updates_id,
                    username,
                    tag_text_value
                });
                
                requestAddTag(requestAddObject);

                fields.push(Map({tag_text: tag_text_value}));// need to put it in here!
            }
        }

        const removeTag = (index) => {

            requestRemoveTag(fields.get(index).get('tag_id'));

            fields.remove(index);

        }


/*
             COMPONENT VIEW

                                      */


        return (

            <div className="si__update__tag__individual__container">                

                {/* SIUpdates Begin */}
                {fields.map((update, index) => 
                    <div className="si__update__tag__inner" key={index}>
                        <span className="si__update__relevant_tags">Relevant Tags:</span>
                        <div className="si__update__tag__group">
                            <button id={field_disable} className="si__tag__remove" type="button" title="Remove Tag" onClick={() => removeTag(index)}>
                                x
                            </button>

                            <Field className="si__tag__title__field" name={`${fields}.tag_text`} type="text" component="input" label="Tag Title" maxLength={50} disable={fieldDis} onKeyPress={addTag}/>

                        </div>
                    </div>
                )}

                            {/*<button className="si__tag__add" id={`${field_disable} add_input_id`} type="text" onKeyPress={addTag}/>*/}

            </div> // SIUpdate outer container end 
        )
    }
}


/*
             COMPONENT CONTAINER

                                      */

import { requestRemoveTag, requestAddTag } from '../../../../arcss/tags_ar';
import { connect } from 'react-redux';


const mapDispatchToRender = dispatch => { 
    return { 
        requestRemoveTag: (data) => dispatch(requestRemoveTag(data)), 
        requestAddTag: (data) => dispatch(requestAddTag(data)) 
    } 
}

export default connect(null, mapDispatchToRender)(SIUpdateTagRender);

 


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
