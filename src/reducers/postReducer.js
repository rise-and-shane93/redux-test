import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    //group of posts
    items: [],

    //single post
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}