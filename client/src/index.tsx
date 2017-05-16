import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import store from './arcss/store';
import SMain from './Components/SMain';

import './arcss/css/reset.css';
import './arcss/css/personal.css';

ReactDOM.render(
	  <Provider store={store}>
			<Router>
				<div>
					{/* okay huge point of note. When you remove the exact keyword, it actually works again lol. */}
					<Route path="/:username" component={SMain}/>
				</div>
			</Router>
	  </Provider>,
	document.getElementById('root')
)
