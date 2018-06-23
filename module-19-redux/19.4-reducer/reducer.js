import { combineReducers } from 'redux';

import comments from './comments';
import users from './users';

import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

const initialState = {
    comments: [],
    users: []
};

const app = combineReducers({
    comments,
    users
});

