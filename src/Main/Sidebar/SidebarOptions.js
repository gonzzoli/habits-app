import classes from './SidebarOptions.module.scss'
import CalendarOptions from './CalendarOptions/CalendarOptions';
import HabitsListOptions from './HabitsListOptions/HabitsListOptions';

function SidebarOptions(props) {
    if(props.page==='calendar') {
        return <CalendarOptions />
    }

    if(props.page==='habits-list') {
        return <HabitsListOptions />
    }
    if(props.page==='stats') {
        return <></>
    }
    return <></>
}

export default SidebarOptions