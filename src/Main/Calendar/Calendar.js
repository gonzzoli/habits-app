import { useContext } from 'react/cjs/react.development'
import { OptionsContext } from '../side-options-context'
import classes from  './Calendar.module.scss'
import MonthlyCalendar from './MonthlyCalendar/MonthlyCalendar'
import WeeklyCalendar from './WeeklyCalendar/WeeklyCalendar'

function Calendar() {
    const optionsCtx = useContext(OptionsContext)
    return (
        <section className={classes['calendar-container']}>
            {optionsCtx.calendarTimeframe==='monthly' ? <MonthlyCalendar /> : <WeeklyCalendar />}
        </section>
    )
}

export default Calendar