import classes from './MyClient.module.css';

const MyClient = (props) => {
    return (
        <div className={classes.wrapper}>
            <div>
                <span className={classes.my}>Мій клієнт</span>
                <img className={classes.gamburger} src='https://i.pinimg.com/736x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg'></img>    
            </div>
            <div className={classes.clientName}>
                <img className={classes.avatar} src='https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg'></img>
                <span className={classes.www}> {props.name} - {props.age}</span>
            </div>
        </div>
    );
}

export default MyClient;