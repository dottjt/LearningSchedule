import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';


class STFileUpload extends React.Component<any, undefined> {

	constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
	}

    onFormSubmit = (data) => {
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('avatar', data.avatar[0]);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        const url = 'api/v1/profile_image_upload';
        
        axios.post(url, formData, config)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }


// own props - user 
// passed props - NA 

/*
             COMPONENT LOGIC
                                      */


  render() {

    var { handleSubmit } = this.props; 
    
    return (



/*
             COMPONENT VIEW 
                                      */


          <form onChange={handleSubmit(this.onFormSubmit)}>
            <div>
              <label>Profile Picture</label>
              <Field name="avatar" component="input" type="file"/>
            </div>
            <button type="submit">Submit</button>
          </form>

    )
  }
}




/*
            COMPONENT CONTAINER
                                       */

export default reduxForm({
    form: 'fileupload'
})(STFileUpload)


