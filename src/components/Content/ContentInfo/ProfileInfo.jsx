import React from 'react';
import DialogItem from '../Dialogs/DialogsItem/DialogItem';
import Message from '../Dialogs/Message/Message';
import classes from './ContentInfo.module.css';
import { Route, Routes } from "react-router-dom";
import MyPosts from '../MyPosts/MyPosts';
import {addPostActionCreator} from '../../Redux/ProfileInfo-reducer';
import { updateNewPostTextActionCreator } from '../../Redux/ProfileInfo-reducer';

// let addPostActionCreator = () => {
//     return {
//         type: 'ADD POST'
//     }
// }

// let updateNewPostTextActionCreator = (text) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT', 
//         newText: text
//     }
// }

const ProfileInfo = (props) => {


    let newPostElement = React.createRef(); //Створюємо посилання на елемент

    let onAddPost = () => {
        // let text = newPostElement.current.value;
        // props.addPost(text); 
        // props.dispatch ( 
        //     // {type: 'ADD POST'}
        //     addPostActionCreator () )
        props.addPost();
        // props.updateNewPostText ('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        
        <div className={classes.wrapper}>
            <div>
            <img className={classes.imgLogo} src='http://1.bp.blogspot.com/-8D79VRR0FEc/US7ddhmOEwI/AAAAAAAAHJA/iaH8woBOkeY/s1600/Thankful+Quote+Facebook+Cover.png'
            />
            </div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add POST</button>
                </div>
           <MyPosts 
           posts={props.posts} 
           //Заміняємо addPost на dispatch
           dispatch={props.dispatch}
           //addPost={props.dispatch} 
           />
        </div>
        
    );
}


export default ProfileInfo;
