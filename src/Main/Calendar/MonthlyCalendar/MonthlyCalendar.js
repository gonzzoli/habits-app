import classes from './MonthlyCalendar.module.scss'
import MonthlyDayComponent from '../DayComponent/MonthlyDayComponent'
import { useContext } from 'react'
import { OptionsContext } from '../../side-options-context'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function createDates(month, year) {
    let givenDate = new Date(`${month}-1-${year}`)
    let closestMonday = givenDate
    let lastSunday = new Date(new Date(`${month+1}-1-${year}`).getTime() - 86400000)
    let datesArray = []
    while(closestMonday.getDay() !== 1) {
        closestMonday = new Date(closestMonday.getTime() - 86400000)
    }
    while(lastSunday.getDay() !== 0) {
        lastSunday = new Date(lastSunday.getTime() + 86400000)
    }
    while(+closestMonday !== +lastSunday + 86400000) {
        datesArray.push(closestMonday)
        closestMonday = new Date(closestMonday.getTime() + 86400000)
    }
    return datesArray
}

function MonthlyCalendar() {
    const optionsCtx = useContext(OptionsContext)
    const calendarDates = createDates(optionsCtx.monthShowing, optionsCtx.yearShowing)
    
    return(
    <div className={classes['monthly-calendar']}>
        {DAYS.map(day => <p key={day} className={classes['day-title']}>{day}</p>)}
        {calendarDates.map(date => <MonthlyDayComponent key={date} date={date} />)}
    </div>
    )
}

export default MonthlyCalendar