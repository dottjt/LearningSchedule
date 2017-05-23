import * as React from 'react';
import './css/sm.css';


class SM_TagLinkRender extends React.Component<SM_TagLinkRenderProps, undefined> {
  

// own props -  updates
// passed props - NA


/*
           COMPONENT LOGIC
                                      */




/*
           COMPONENT VIEW
                                      */


    render() {

        var { user, tags } = this.props;

        console.log(tags)
        if(tags.length > 0) {
            return (
        
                <div className="sm__taglink">

                    <h3 className="sm__latest_updates">Latest Tags</h3>

                        {tags.map(tag =>
                            // .sort((a, b) => { return +new Date(b.get('update_date')) - +new Date(a.get('update_date')); })

                            <div className="row sm__updatelink__inner__container" key={tag.get('tag_id')}>

                                {/* SM_UpdateLink Update */}
                                    <p className="sm__updatelink__update">{tag.get('tag_text')}</p>
                            </div> 

                        )}
                </div> 
            )
        } else {
            return (
        
                <div className="sm__taglink__empty">

                    <h3 className="sm__homelink__individual__empty">
                        {user.get('display_name')} has not made a single tag.
                    </h3>

                    <h3 className="sm__homelink__individual__empty">
                        Though I'm sure this user is in the process of making one right now.
                    </h3>

                    <h3 className="sm__homelink__individual__empty">
                        *desperation intensifies* 
                    </h3>

                </div> 

            )        
        }

    };
};



/*
           COMPONENT CONTAINER
                                      */


export default SM_TagLinkRender;