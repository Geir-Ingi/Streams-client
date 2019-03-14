import streams from '../apis/streams';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM,    
    FETCH_STREAM
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payLoad: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const createStream = formValues => async dispatch => { 
   const response = await streams.post('/streams', formValues);
   dispatch({ type: CREATE_STREAM, payLoad: response.data });
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payLoad: response.data});    
};

export const fetchStream = streamId => async dispatch => {
    const response = await streams.get(`/streams/${streamId}`);
    dispatch({ type: FETCH_STREAM, payLoad: response.data});
};

export const deleteStream = streamId => async dispatch => {
    await streams.delete(`/streams/${streamId}`);
    dispatch({ type: DELETE_STREAM, payLoad: streamId});
};

export const editStream = (streamId, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${streamId}`, formValues);
    dispatch({ type: EDIT_STREAM, payLoad: response.data});
};