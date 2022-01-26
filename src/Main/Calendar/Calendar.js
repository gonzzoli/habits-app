import classes from  './Calendar.module.scss'
import MonthlyCalendar from './MonthlyCalendar/MonthlyCalendar'

function Calendar() {
    return (
        <section className={classes['calendar-container']}>
            <MonthlyCalendar />
        </section>
    )
}

export default Calendar