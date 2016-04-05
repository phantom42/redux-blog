import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  post: PostsReducer
});

export default rootReducer;
