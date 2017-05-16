import * as React from 'react';
import { Field } from 'redux-form/immutable';
import { Map } from 'immutable';

import './css/si__tag.css';

class SITagRender extends React.Component<SITagRenderProps & SITagRenderPassedProps, SITagRenderState> {

	constructor() {
	    super();
	}


    render() {

        var { schedule_id, form, username, fields, login_status_var, fieldDisabled } = this.props;


		let field_disable_id, fieldDis;  // style to disable forms. 

		console.log("login_status", login_status_var)
		
		if (login_status_var === false) {
			field_disable_id = "field_disabled_style_si__tag";
			fieldDis = fieldDisabled;
		}


        const addTag = (e) => {
            
            e.preventDefault();

            var val = (document.getElementById('add_input_id') as HTMLInputElement);

            if (e.key === 'Enter') {
                let tag_text_value = val.value;

                let requestAddObject = Map({
                    schedule_id,
                    form,
                    username,
                    tag_text_value
                });
                
                this.props.requestAddTag(requestAddObject);

                fields.push(Map({tag_text: tag_text_value}));// need to put it in here!
            }
        }

        const removeTag = (index) => {

            this.props.requestRemoveTag(fields.get(index).get('tag_id'));

            fields.remove(index);

        }

        return (
            <div className="si__tag__outer">

                {fields.map((tag, index) =>//tags[2] etc.
                    <div className="si__tag__inner" key={index}>

                        <div className="si__tag__group">
                            <button id={fieldDis} className="si__tag__remove" type="button" title="Remove Tag" onClick={() => removeTag(index)}>
                                x
                            </button>

                            <Field className="si__tag__title__field" name={`${tag}.tag_text`} type="text" component="input" label="Tag Title" maxLength={18} disabled={fieldDis} onKeyPress={addTag}/>

                        </div>
                    </div>
                    
                )}
                            {/*<button className="si__tag__add" id={`add_input_id ${fieldDis}`} type="text" onKeyPress={addTag}/>*/}
            </div>
        )
    }
}


// RENDER TAGS 

import { requestRemoveTag, requestAddTag } from '../../../../arcss/tags_ar';
// import { requestChangeTag } from '../../../arcss/tags_ar';

import { connect } from 'react-redux';

const mapDispatchToRender = dispatch => {
    return {
        requestRemoveTag: (data) => dispatch(requestRemoveTag(data)),
        requestAddTag: (data) => dispatch(requestAddTag(data))
    }
}

export default connect(undefined, mapDispatchToRender)(SITagRender);
