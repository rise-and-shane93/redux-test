import { FETCH_POSTS, NEW_POST } from './types';
import Posts from '../components/Posts';

export const fetchPosts = () => dispatch => {
    //where you make your fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );
    //this is first fetching and then dispatching the payload to the reducer
};