import classes from './MonthlyCalendar.module.scss'
import MonthlyDayComponent from '../DayComponent/MonthlyDayComponent'
import { useContext } from 'react'
import { OptionsContext } from '../../side-options-context'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function createDates(month, year) {
    console.log(month, year)
    let givenDate = new Date(`${month}-1-${year}`)
    let closestMonday = givenDate
    let nextMonth = month+1
    if(nextMonth===13) {
        nextMonth = 1
        year +=1
    }
    let lastSunday = new Date(new Date(`${nextMonth}-1-${year}`).getTime() - 86400000)
    let datesArray = []
    console.log('si')
    while(closestMonday.getDay() !== 1) {
        closestMonday = new Date(closestMonday.getTime() - 86400000)
    }
    console.log('si si')
    while(lastSunday.getDay() !== 0) {
        lastSunday = new Date(lastSunday.getTime() + 86400000)
    }
    console.log('si si si ')
    while(+closestMonday !== +lastSunday + 86400000) {
        datesArray.push(closestMonday)
        closestMonday = new Date(closestMonday.getTime() + 86400000)
    }
    console.log('si si si si')
    return datesArray
}

function MonthlyCalendar() {
    const optionsCtx = useContext(OptionsContext)
    const calendarDates = createDates(optionsCtx.startDate.getMonth()+1, optionsCtx.startDate.getFullYear())
    return(
    <div className={classes['monthly-calendar']}>
        {DAYS.map(day => <p key={day} className={classes['day-title']}>{day}</p>)}
        {calendarDates.map(date => <MonthlyDayComponent key={date} date={date} />)}
    </div>
    )
}

export default MonthlyCalendar