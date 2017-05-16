import * as React from 'react';
import STSummaryActiveRender from './STSummaryActiveRender';

import { FieldArray, reduxForm } from 'redux-form/immutable';

class STSummaryActive extends React.Component<ISMSummaryRenderProps, undefined> {


// own props - NA 
// passed props - initialValues, form 

/*
             COMPONENT LOGIC 
                                      */


  render() {

      
    return (   



/*
             COMPONENT VIEW 
                                      */


        <form>
            <FieldArray name="summaries" component={STSummaryActiveRender} />
        </form>
    )
  };
};



/*
           COMPONENT CONTAINER 
                                      */



export default reduxForm({enableReinitialize : true})(STSummaryActive);



