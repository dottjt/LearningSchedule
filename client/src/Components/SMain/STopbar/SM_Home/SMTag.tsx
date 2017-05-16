import * as React from 'react';
import './css/sm__tag.css';

class SMTag extends React.Component<SMTagProps, undefined> {


// own props -  NA
// passed props - updates


/*
             COMPONENT LOGIC 
                                      */


  render() {

    var { tags } = this.props;

    return (   



/*
             COMPONENT LOGIC 
                                      */



        <ul className="sm__tag__outer__container">

            {tags.map(tag => {

                return (

                    <li className="sm__tag__text" key={tag.get('tag_id')}> {tag.get('tag_text')} </li>

                )
                
            })}
        </ul>
    )
  };
};


/*
             COMPONENT CONTAINER 
                                      */


export default SMTag;