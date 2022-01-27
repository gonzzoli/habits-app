import classes from './Nav.module.scss'
import { NavLink } from 'react-router-dom'

function Nav(props) {
    return (
        <nav id='nav'>
            <div className={classes['logo-container']}>
                <p>Habit <span>Crash</span></p>
            </div>
            <div className={classes['links-container']}>
                <ul className={classes['links-list']}>
                    <li>
                        <NavLink to='/calendar' className={({isActive})=>`${classes['link']} ${isActive ? classes['active']:''}`}>Calendar</NavLink>
                    </li>
                    <li>
                        <NavLink to='/habits-list' className={({isActive})=>`${classes['link']} ${isActive ? classes['active']:''}`}>Habits List</NavLink>
                    </li>
                    <li>
                        <NavLink to='/stats' className={({isActive})=>`${classes['link']} ${isActive ? classes['active']:''}`}>My Stats</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav