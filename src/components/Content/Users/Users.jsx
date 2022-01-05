import classes from './Users.module.css';
import userPhoto from '../../../assets/images/user.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) ;

    let pages = [];
    for (let i=1; i <= pagesCount; i++ ) {
        pages.push(i);
    }


    return(
        <div>
        {pages.map( p => {
            return <span className={props.currentPage === p && classes.selectPage}
            onClick={ (e) => {props.onPageChanged(p) } }> {p} </span>
        })}
       
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {
            props.users.map( u => <div key={u.id} className={classes.userWrapper}>
                <div className={classes.avatatAndButton}>
                    <img className={classes.imgLogo} src={u.photos.small !=null ? u.photos.small : userPhoto}/>
                    <div className={classes.name}>{u.name}</div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </div>
                <div className={classes.status}>{u.status}</div>
                <div className={classes.country}>{"u.location.country"}</div>
                <div className={classes.city}>{"u.location.city"}</div>
            </div>)
        }
    </div>
    );
}

export default Users;