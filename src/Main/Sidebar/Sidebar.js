import classes from './Sidebar.module.scss'

function Sidebar() {
    return (
        <aside className={classes['sidebar']}>
            <ul className={classes['sidebar-options']}>
                <li className={classes['sidebar-option']}>Daily</li>
                <li className={classes['sidebar-option']}>Weekly</li>
                <li className={classes['sidebar-option']}>Monthly</li>
                <li className={`${classes['sidebar-option']} ${classes['hide-option']}`}>Hide Habits</li>
                <li className={`${classes['sidebar-option']} ${classes['hide-option']}`}>Hide Goals</li>
            </ul>
        </aside>
    )
}

export default Sidebar