import * as React from 'react';
import { FieldArray, reduxForm } from 'redux-form/immutable';

import SITagRender from './SITagRender';

import './css/si__tag.css';


class SITag extends React.Component<SITagProps & SITagPassedProps, undefined> {

  render() {

    const propsObject = {
        schedule_url: this.props.schedule_url,
        schedule_id: this.props.schedule_id,
        username: this.props.username,
        form: this.props.form, // tags_id 
        login_status_var: this.props.login_status_var

    }


    return (   
        <div className="si__tag__container">
            <form>
                <FieldArray name="tags" component={SITagRender} props={propsObject}/>
            </form>
        </div>

    )
  }
}



// RENDER TAGS 


export default reduxForm({
    enableReinitialize : true
 })(SITag);


