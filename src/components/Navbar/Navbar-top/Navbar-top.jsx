import classes from './Navbar-top.module.css';

const NavbarTop = () => {
    return (
        <div className={classes.navTopWrapper}>
            <img className={classes.logo} src='https://b2b.dinmark.com.ua/assets/img/logo/logo.png'></img>
            <img className={classes.arrows} src='https://www.citypng.com/public/uploads/small/31624560516cmhbxiqisorvcekc7quj400x0ytk3ainy7k83gniytl6btoynxmu892s3k44kngm3o0uzr0izdvtilblybx7s4mvznjsw3e2o015.png'></img>
        </div>
    );
}

export default NavbarTop;