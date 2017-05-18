import * as React from 'react';
import { Field } from 'redux-form/immutable';
import { Map } from 'immutable';
var uuid = require('uuid');
import './css/si__tag.css';

class SITagRender extends React.Component<SITagRenderProps & SITagRenderPassedProps, SITagRenderState> {

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
        
        console.log(tag_text.indexOf('#'))

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


    render() {

        const { fields } = this.props;
        const { si__tag__display__none, si__tag__border__none, fieldDis } = this.props;


        return (
            <div className="si__tag__outer">

                {fields.map((tag, index) =>//tags[2] etc.
                    <div className="si__tag__inner" key={index}>

                        <div className="si__tag__group">

                            <button id={si__tag__display__none} className="si__tag__remove" type="button" title="Remove Tag" onClick={() => this.removeTag(index)}>
                                x
                            </button>

                            <Field id={`add_input_id ${si__tag__border__none}`} className="si__tag__title__field" name={`${tag}.tag_text`} type="text" component="input" label="Tag Title" maxLength={18} disabled={fieldDis} onBlur={(event) => this.changeTag(event, index)}/>

                        </div>
                    </div>
                    
                )}
                    <button className="si__tag__add" id={`${si__tag__display__none}`} type="text" onClick={(e) => this.addTag(e)}>Add Tag</button>
            </div>
        )
    }
}


// RENDER TAGS 

import { requestRemoveTag, requestAddTag, requestChangeTag } from '../../../../arcss/tags_ar';
// import { requestChangeTag } from '../../../arcss/tags_ar';

import { connect } from 'react-redux';

const mapDispatchToRender = dispatch => {
    return {
        requestRemoveTag: (data) => dispatch(requestRemoveTag(data)),
        requestAddTag: (data) => dispatch(requestAddTag(data)),
        requestChangeTag: (data) => dispatch(requestChangeTag(data))
    }
}

export default connect(null, mapDispatchToRender)(SITagRender as any);
