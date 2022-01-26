import classes from './Sidebar.module.scss'
import { Route, Routes } from 'react-router-dom'
import SidebarOptions from './SidebarOptions'

function Sidebar() {
    return (
        <aside className={classes['sidebar']}>
            <ul className={classes['sidebar-options']}>
                <Routes>
                    <Route path='/calendar' element={<SidebarOptions page='calendar'/>} />
                    <Route path='/habits-list' element={<SidebarOptions page='habits-list'/>} />
                    <Route path='/stats' element={<SidebarOptions page='stats'/>} />
                </Routes>
            </ul>
        </aside>
    )
}

export default Sidebar