import classes from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';

const NavMenu = (props) => {
    return (
        <div className={classes.wrapper}>
            <ul>
                <li>
                    <NavLink to='/profile'>
                        <span>Головна (Profile)</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/catalog'>
                        <span>Каталог</span>
                    </NavLink>   
                   
                </li>
                <li>
                    <NavLink to='/orders'>
                        <span>Замовлення</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/return'>
                        <span>Повернення</span>
                    </NavLink>
                </li>
                <li>
                <NavLink to='/finances'>
                        <span>Фінанси</span>
                    </NavLink>
                </li>
                <li>
                <NavLink to='/dialogs'>
                        <span>Повідомлення</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavMenu;