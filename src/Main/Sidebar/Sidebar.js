import classes from './Sidebar.module.scss'
import SidebarOptions from './SidebarOptions'
import SideArrows from './CalendarOptions/SideArrows/SideArrows'

function Sidebar(props) {
    return (
        <aside className={classes['sidebar']}>
                <SidebarOptions page={props.page} />
                {props.page==='calendar' && <SideArrows />}
        </aside>
    )
}

export default Sidebar