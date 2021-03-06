import * as React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

class STDisplayActive extends React.Component<STDisplayActiveProps, undefined> {

// own props - requestChangeDisplay 
// passed props - initialValues, form 

	constructor() {
        super();
        this.changeDisplay = this.changeDisplay.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
	}

    changeDisplay(values) {
        // it's a map. 
        this.props.requestChangeDisplay(values)
    }

    _onSubmit(e) {
        e.preventDefault();
    }


/*
             COMPONENT LOGIC
                                      */


  render() {

    const { handleSubmit } = this.props;

    return (



/*
             COMPONENT VIEW 
                                      */



		<form className="st__midbar__profile_username__container" onSubmit={this._onSubmit} onBlur={handleSubmit(values => this.changeDisplay(values))}>

            {/* STDisplayActive Display Name */}
                <Field className="st__midbar__profile_username" 
                    name="display_name" 
                    component="input" 
                    type="text" 
                    placeholder="Display Name."
                    />
        </form>
    )
  }
}




/*
            COMPONENT CONTAINER
                                       */


import { requestChangeDisplay } from '../../../../arcss/users_ar';
import { connect } from 'react-redux';

export const mapDispatchToProps = (dispatch) => { return { requestChangeDisplay: (data) => dispatch(requestChangeDisplay(data)) }; };

const SMWebsiteActiveProps = connect(null, mapDispatchToProps)(STDisplayActive);

export default reduxForm({ enableReinitialize : true})(SMWebsiteActiveProps);

