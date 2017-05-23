import * as React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

class STWebsiteActive extends React.Component<STWebsiteActiveProps, undefined> {


// own props - requestChangeWebsite 
// passed props - NA 

    constructor() {
        super();
        this.changeWebsite = this.changeWebsite.bind(this);
    }


    changeWebsite(values) {
        console.log(values.toJS())
        this.props.requestChangeWebsite(values);
    }



/*
             COMPONENT LOGIC 
                                      */


  render() {


    return (



/*
             COMPONENT VIEW 
                                      */



        <form className="st__midbar__website__form" onBlur={this.props.handleSubmit(values => this.changeWebsite(values))}>
            
            {/* STWebsiteActive Website */}
                <Field className="st__midbar__website__link" name="website" component="input" type="text" placeholder="Website."/>

        </form>
    )
  }
}




/*
           COMPONENT CONTAINER
                                      */


import { requestChangeWebsite } from '../../../../arcss/users_ar'; import { connect } from 'react-redux';

export const mapDispatchToProps = (dispatch) => { return { requestChangeWebsite: (data) => dispatch(requestChangeWebsite(data)) }; };

const SMWebsiteActiveProps = connect(undefined, mapDispatchToProps)(STWebsiteActive);

export default reduxForm({ enableReinitialize : true })(SMWebsiteActiveProps);

// initialValues: Map({ schedule_title: "hello" })
