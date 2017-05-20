import * as React from 'react';

class STSummary extends React.Component<STSummaryProps, any> {


// own props - NA 
// passed props - summaries

/*
             COMPONENT LOGIC
                                      */


  render() {

      const { summaries } = this.props;

    return (   


/*
             COMPONENT VIEW 
                                      */



      <div className="st__summary__outer__container">

          {summaries.map(summary => {
            return (

                  <ul key={summary.get('id')}>
                    {/* STSummary Summary Text */}
                      <li className="st__summary__text__ul"><span className="st__summary__text__li">{summary.get('summary_text')}</span></li>
                  </ul>

                  )
              })
            }

      </div>
    )
  };  
};


/*
           COMPONENT CONTAINER 
                                      */


export default STSummary;  

