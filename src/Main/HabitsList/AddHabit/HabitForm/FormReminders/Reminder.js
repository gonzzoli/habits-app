import classes from './Reminder.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { FormContext } from '../context/habit-form-context'

function Reminder(props) {
    const ctx = useContext(FormContext)
    const abbrDay = props.data.day.charAt(0).toUpperCase() + props.data.day.slice(1, 3)
    let meridiem = 'AM'
    let hour = props.data.hour

    if(hour>12) {
        hour -= 12
        meridiem = 'PM'
    }
    
    let minutes = props.data.minutes
    if(minutes<10) {
        minutes = '0' + minutes
    }

    function deleteReminder() {
        ctx.deleteReminder(props.data.id)
    }

    return (
        <div className={classes['reminder']}>
            <p>{abbrDay}. {hour}:{minutes} {meridiem} {!props.inDetails && <span onClick={deleteReminder} className={classes['trash-icon']}><FontAwesomeIcon icon={faTrash} /></span>}</p>
        </div>
    )
}

export default Reminder