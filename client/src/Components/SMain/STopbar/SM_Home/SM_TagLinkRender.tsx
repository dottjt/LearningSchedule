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

        var { tags } = this.props;

        console.log(tags)
        if(tags.size > 0) {
            return (
        
                <div className="sm__taglink">

                    <h3 className="sm__latest_updates">Latest Tags</h3>

                        {tags.map(tag =>
                            // .sort((a, b) => { return +new Date(b.get('update_date')) - +new Date(a.get('update_date')); })

                            <div className="sm__taglink__inner__container" key={tag.get('tag_id')}>

                                {/* SM_UpdateLink Update */}
                                    <p className="sm__taglink__tag__single">{tag.get('tag_text')}</p>
                            </div> 

                        )}
                </div> 
            )
        } else {
            return (
        
                <div className="sm__taglink__empty">

                    <h3 className="sm__homelink__individual__empty">
                        No Tags have been created. 
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