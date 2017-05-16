import * as React from 'react';

class STWebsite extends React.Component<any, undefined> {

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


      <a className="st__midbar__website__link" href={user.get('website')}>
        <h3 className="st__midbar__website">
          {user.get('website')}
        </h3>
      </a>

    )
  }
}




/*
            COMPONENT CONTAINER
                                       */


export default STWebsite;


