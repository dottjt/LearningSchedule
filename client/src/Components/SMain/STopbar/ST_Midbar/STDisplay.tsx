import * as React from 'react';

class STDisplay extends React.Component<any, undefined> {

// own props - user 
// passed props - NA 

/*
             COMPONENT LOGIC
                                      */


  render() {

    var { user } = this.props; 
    
    return (



/*
             COMPONENT VIEW 
                                      */


        <h2 className="st__midbar__profile_username">{user.get('display_name')}</h2>

    )
  }
}




/*
            COMPONENT CONTAINER
                                       */


export default STDisplay;


