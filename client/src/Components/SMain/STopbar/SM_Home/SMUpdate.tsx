import * as React from 'react';
import './css/sm__update.css';
var moment = require('moment');
import {emojify} from 'react-emojione';

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


    if(updates.size > 0) {

        return (   

            <div className="sm__update__outer__container">

                {updates.map(update => {
                    if (update.get('update_type') === "text") { // text
                        return (

                            <ul key={update.get('update_id')}>
                                <p className="sm__update__text__container">
                                    <span className="sm__update__text"> {moment(update.get('update_date')).format('MMM DD') + " - "} {this.undefinedFilter(update.get('update_text'))} </span>
                                </p>
                            </ul>

                        )
                    } else if (update.get('update_type') === "link") { // link
                        return (

                            <ul key={update.get('update_id')}>
                                <p className="sm__update__text__container">
                                    <span className="sm__update__link"> {moment(update.get('update_date')).format('MMM DD')} <span className="no__underline">- </span><a className="sm__update__link__a" href={this.undefinedFilter(update.get('update_text'))}>{this.undefinedFilter(update.get('update_text'))}</a><span className="no__underline"> </span><span> </span>{this.undefinedFilter(update.get('update_summary'))}</span>
                                </p>
                            </ul>

                        )
                    } else {    // milestone
                        return (

                            <ul key={update.get('update_id')}>
                                <p className="sm__update__text__container">
                                    <span className="sm__update__milestone"> {moment(update.get('update_date')).format('MMM DD') + " - "} {emojify("🎉🎉" + this.undefinedFilter(update.get('update_text')) + "🎉🎉")}</span>
                                </p>
                            </ul>
                            
                        )
                    }

                })}
            </div>
        )
    } else {
        return (
            <div className="sm__update__outer__container">
            </div>
        )
    }

  };
};


/*
             COMPONENT CONTAINER 
                                      */


export default SMUpdate;