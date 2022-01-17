import classes from './Nav.module.scss'

function Nav(props) {
    return (
        <nav>
            <div className={classes['logo-container']}>
                <p>Habit <span>Crash</span></p>
            </div>
            <div className={classes['links-container']}>
                <ul className={classes['links-list']}>
                    <li className={classes['link']}>Calendar</li>
                    <li className={classes['link']}>Habits List</li>
                    <li className={classes['link']}>My Stats</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav