import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator} from '../../Redux/ProfileInfo-reducer';
import { updateNewPostTextActionCreator } from '../../Redux/ProfileInfo-reducer';
import ProfileInfo from './ProfileInfo';


// const ProfileInfoContainer = (props) => {

//     let state = props.store.getState();

//     let addPost = () => {
//         props.store.dispatch(  addPostActionCreator () )
//     };

//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action);
//     };

//     return (
//         <ProfileInfo 
//             updateNewPostText={onPostChange} 
//             addPost={addPost} 
//             posts={state.profilePage.posts} 
//             newPostText={state.profilePage.newPostText} />
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(  addPostActionCreator () );
        }
    }
}
const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer;
