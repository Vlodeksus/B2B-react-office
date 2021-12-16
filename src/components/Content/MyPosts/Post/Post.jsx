import { getThemeProps } from '@mui/system';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
           <div className={classes.Item}>
                   <img className={classes.avatar} src='https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg'></img>
                    {props.message}, Likes {props.likesCount}
            </div>
        </div>
    );
}

export default Post;