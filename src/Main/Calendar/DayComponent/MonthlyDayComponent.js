import classes from './MonthlyDayComponent.module.scss'
import { useContext } from 'react'
import { OptionsContext } from '../../side-options-context'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function DayComponent(props) {
    const month = props.date.getMonth()
    const day = props.date.getDate()
    const optionsCtx = useContext(OptionsContext)
    //Add a 1 because it is index-based and not 'human' based
    const outOfMonth = month+1 !== optionsCtx.monthShowing
    return (
    <div className={`${classes['day-container']} ${outOfMonth ? classes['out-of-month'] : ''}`}>
        <p className={classes['date']}>{MONTHS[month]}, {day}</p>
        <p className={classes['total-done']}>3/5</p>
    </div>
    )
}

export default DayComponent