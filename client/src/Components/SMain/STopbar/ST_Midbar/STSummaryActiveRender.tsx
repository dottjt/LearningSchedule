import * as React from 'react';
import { Field } from 'redux-form/immutable';



class STSummaryActiveRender extends React.Component<STSummaryActiveRenderProps, undefined> {


// own props - requestChangeSummary 
// passed props - fields 


/*
             COMPONENT LOGIC 
                                      */
    constructor()   {
        super();
        this.requestChange = this.requestChange.bind(this);

    }

    requestChange(index) { 
        this.props.requestChangeSummary(this.props.fields.get(index)); 
    }



    render() {

        return (


/*
             COMPONENT VIEW 
                                      */


            <div className="st__summary__outer__container">

                {this.props.fields.map((summary, index) =>

                    <div key={index}>

                        {/* STSummaryActiveRender Summary Text */}
                        <Field className="st__summary__text" name={`${summary}.summary_text`} type="text" component="input" label="Summary Title" maxLength={60} onBlur={() => this.requestChange(index)} placeholder="Summary."/>
                    
                    </div>
                    
                )}

            </div>
        )
    };
};



/*
           COMPONENT CONTAINER
                                      */


// RENDER SUMMARYS 

import { requestChangeSummary } from '../../../../arcss/summaries_ar'; import { connect } from 'react-redux';

const mapDispatchToRender = dispatch => { 
    return { 
        requestChangeSummary: (data) => dispatch(requestChangeSummary(data)) 
    }; 
};

export default connect(undefined, mapDispatchToRender)(STSummaryActiveRender);
