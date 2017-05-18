import * as React from 'react';
import { Field } from 'redux-form/immutable';
import { Map } from 'immutable';

import './css/si__update.css';
import '../SITag/css/si__tag.css';

class SIUpdateTagRender extends React.Component<SIUpdateTagRenderProps & SIUpdateTagRenderPassedProps, SIUpdateRenderState> {

// own props - user
// own props - requestRemoveUpdate
// passed props - schedule_id, form, topbar_active update_tags


	constructor() {
	    super();
        this.addTag = this.addTag.bind(this);  
        this.removeTag = this.removeTag.bind(this);  
        this.changeTag = this.changeTag.bind(this);  
	}

    addTag = (e) => {
        let { fields, schedule_id, form, username, schedule_url, requestAddTag } = this.props; 

        e.preventDefault();

        let tag_id = uuid();
        let tags_id = form;
        let tag_text = "";

        let fieldLength = fields.get().length;
        let tag_index = fieldLength + 1;

        let update_tag = false;
        let update_tags_id = ""
        // let update_tags_id = fields.get(index).get('update_tags_id');

        requestAddTag(Map({
            schedule_id,
            schedule_url,
            username,
            tag_text,
            tag_id, 
            tags_id,
            tag_index,
            update_tag,
            update_tags_id
        }));

        fields.push(Map({tag_text: tag_text}));// need to put it in here!

    }

    changeTag = (e, index) => {

        e.preventDefault();

        let { fields, schedule_id, schedule_url, username, requestChangeTag } = this.props; 

        console.log(fields.get(index).toJS())
        // currently there is no tag_index property 
        // also need tag_id
        
        let tag_id = fields.get(index).get('tag_id'); 
        let tags_id = fields.get(index).get('tags_id'); 
        let tag_text = fields.get(index).get('tag_text');
        let tag_index = fields.get(index).get('tag_index');
        let update_tag = fields.get(index).get('update_tag');
        let update_tags_id = fields.get(index).get('update_tags_id');
        
        if (tag_text.length > 0 && tag_text.indexOf('#') !== 0 ) {
            tag_text = "#" + tag_text;
        }

        requestChangeTag(Map({
            schedule_id,
            schedule_url,
            username,
            tag_text,
            tag_id, 
            tags_id,
            tag_index,
            update_tag,
            update_tags_id
        }));

        fields.get(index).set('tag_text', tag_text);

    }

    removeTag = (index) => {

        let {fields, requestRemoveTag} = this.props;

        // Okay, I need to figure out a way to rearrange all the tags when I remove a tag. 

        // for(var i = 0; i < fields.length ; i++ ) {
        //     fields.
        // }
        requestRemoveTag(fields.get(index).get('tag_id'));

        fields.remove(index);

    }





/*
          COMPONENT STATE LOGIC

                                      */



/*
             COMPONENT LOGIC

                                      */

    render() {

        const { fields } = this.props; 
        const { currentUpdate } = this.props;
        const { si__update__display__none, si__update__border__none, fieldDis } = this.props;
        



/*
             COMPONENT VIEW

                                      */

        console.log(fields)

        return (
                <div className="si__update__tag__individual__container">                
                            {/*<p id={si__update__display__none} className="si__update__relevant_tags">Relevant Tags:</p>*/}

                    {/* SIUpdates Begin */}
                    {fields.map((tag, index) => {

                        if (fields.get(index).get('update_tags_id') === currentUpdate.get('update_tags_id')) {
                            return (
                                <div className="si__update__tag__inner" key={index}>
                                    <div id={si__update__border__none} className="si__update__tag__group">
                                        <button id={si__update__display__none} className="si__tag__remove" type="button" title="Remove Tag" onClick={() => this.removeTag(index)}>
                                            x
                                        </button>

                                        <Field id={si__update__border__none} className="si__tag__title__field" name={`${tag}.tag_text`} type="text" component="input" label="Tag Title" maxLength={50} disabled={fieldDis} onBlur={(event) => this.changeTag(event, index)}/>

                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="si__update__tag__inner">

                                </div>
                            )
                        }
                    }
                    )}

                    <button className="si__tag__add" id={`${si__update__display__none}`} type="text" onClick={(e) => this.addTag(e)}>Add Tag</button>

                </div> // SIUpdate outer container end 
        )
    }
}


/*
             COMPONENT CONTAINER

                                      */

import { requestRemoveTag, requestAddTag, requestChangeTag } from '../../../../arcss/tags_ar';
import { connect } from 'react-redux';


const mapDispatchToRender = dispatch => { 
    return { 
        requestRemoveTag: (data) => dispatch(requestRemoveTag(data)), 
        requestAddTag: (data) => dispatch(requestAddTag(data)),
        requestChangeTag: (data) => dispatch(requestChangeTag(data))
    } 
}

export default connect(null, mapDispatchToRender)(SIUpdateTagRender as any);

 


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

