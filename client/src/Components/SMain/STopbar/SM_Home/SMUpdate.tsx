import * as React from 'react';
import './css/sm__update.css';
var moment = require('moment');

class SMUpdate extends React.Component<SMUpdateProps, undefined> {


// own props -  NA
// passed props - updates


	constructor() {
        super();
        this.undefinedFilter = this.undefinedFilter.bind(this);
	}

    undefinedFilter(update_text) {
        if (update_text === undefined || update_text === "") {
            return "why no text :(";
        } else {
            return update_text;
        }
    }


/*
             COMPONENT LOGIC 
                                      */



  render() {

    var { updates } = this.props;

    return (   



/*
             COMPONENT LOGIC 
                                      */



        <div className="sm__update__outer__container">

            {updates.map(update => {
                return (

                    <ul key={update.get('update_id')}>
                        <p className="sm__update__text">
                            <span className="sm__update__text__yolo"> {moment(update.get('update_date')).format('MMM DD') + " - " + this.undefinedFilter(update.get('update_text'))} </span>
                        </p>
                    </ul>

                )
            })}
        </div>
    )
  };
};


/*
             COMPONENT CONTAINER 
                                      */


export default SMUpdate;