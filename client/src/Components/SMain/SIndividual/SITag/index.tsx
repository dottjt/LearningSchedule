import * as React from 'react';
import { FieldArray, reduxForm } from 'redux-form/immutable';

import SITagRender from './SITagRender';

import './css/si__tag.css';
import '../../STopbar/SM_Home/css/sm__tag.css';


class SITag extends React.Component<SITagProps & SITagPassedProps, undefined> {

  render() {

    const {schedule_url, schedule_id, user, form, login_status_var } = this.props;
    let si__tag__display__none, si__tag__border__none, fieldDis;

    if (login_status_var === false) {
        si__tag__display__none = "si__tag__display__none"; // this one for making div disappear?
        si__tag__border__none = "si__tag__border__none"; // this one for making border disappear?
        fieldDis = true;
    }

    const propsObject = {
        schedule_url: schedule_url,
        schedule_id: schedule_id,
        username: user.get('username'),
        form: form, // tags_id 
        si__tag__display__none: si__tag__display__none,
        si__tag__border__none: si__tag__border__none,
        fieldDis: fieldDis
    }


    return (
            <form id={login_status_var} className=""> 
                {/*si__tag__container*/}
                <FieldArray name="tags" component={SITagRender} props={propsObject}/>
            </form>
    )
  }
}



// RENDER TAGS 


export default reduxForm({
    enableReinitialize : true
 })(SITag);


