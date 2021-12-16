import NavbarTop from './Navbar-top/Navbar-top';
import MyClient from './My-client/MyClient';
import AddClient from './AddClient/AddClient';
import NavMenu from './NavMenu/NavMenu';
import classes from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <NavbarTop />
            <MyClient name='Anna Tokar' age='28'/>
            <AddClient />
            <NavMenu />
        </nav>
    );
}

export default Navbar;