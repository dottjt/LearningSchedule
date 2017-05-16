import * as React from 'react';
import './css/sm.css';


class SM_TagLinkRender extends React.Component<SM_TagLinkRenderProps, undefined> {
  

// own props -  updates
// passed props - NA


/*
           COMPONENT LOGIC
                                      */



    render() {

        var { tags } = this.props;

      return (



/*
           COMPONENT VIEW
                                      */

          
        <div className="sm__updatelink">

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
    };
};



/*
           COMPONENT CONTAINER
                                      */


export default SM_TagLinkRender;