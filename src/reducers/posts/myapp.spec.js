import { types } from './../../actions/types';
import postsReducers from './reducer';
import reducer from './reducer';

describe('Post Reducer', () => {

    it('Should return default state', () => {
        const newState = postsReducers(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Shoud return new state if recieving type', ()=>{
        const posts = [{ title: 'Test 1'}, { title: 'Test 2'}, { title: 'Test 3'}];
        const newState = postsReducers(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
    
});