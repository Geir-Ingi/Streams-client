import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payLoad, 'id')};
        case FETCH_STREAM:
            return { ...state, [action.payLoad.id]: action.payLoad};
        case CREATE_STREAM:
            return { ...state, [action.payLoad.id]: action.payLoad};
        case EDIT_STREAM:
            return { ...state, [action.payLoad.id]: action.payLoad};
        case DELETE_STREAM:
            return _.omit(state, action.payLoad);
        default:
            return state;
    }
};