import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postElements = props.posts.map ( p => <Post message = { p.message} likesCount={p.likesCount} />)

    return (
        <div>
           My Posts
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;