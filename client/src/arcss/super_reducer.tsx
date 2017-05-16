import { schedules } from './schedules_ar';
import { updates } from './updates_ar';
import { tags } from './tags_ar';
import { user } from './users_ar';
// import { auth } from './auth_ar';
import { summaries } from './summaries_ar';

import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';

const super_reducer = combineReducers({
  // auth: auth, 
  schedules: schedules,
  summaries: summaries, 
  updates: updates,
  tags: tags, 
  user: user, 
  form: form
});

export default super_reducer;
