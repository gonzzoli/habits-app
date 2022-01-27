import classes from './DayComponent.module.scss'
import { CalendarContext } from '../calendar-context'
import { useContext } from 'react'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function DayComponent(props) {
    const month = props.date.getMonth()
    const day = props.date.getDate()
    const calendarCtx = useContext(CalendarContext)
    //Add a 1 because it is index-based and not 'human' based
    const outOfMonth = month+1 !== calendarCtx.monthShowing
    console.log(month, calendarCtx.monthShowing)
    console.log(outOfMonth)
    return (
    <div className={`${classes['day-container']} ${outOfMonth ? classes['out-of-month'] : ''}`}>
        <p className={classes['date']}>{MONTHS[month]}, {day}</p>
        <p className={classes['total-done']}>3/5</p>
    </div>
    )
}

export default DayComponent