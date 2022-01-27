import { useContext, useEffect, useState } from 'react/cjs/react.development'
import { OptionsContext } from '../../side-options-context'
import WeeklyDayComponent from '../DayComponent/WeeklyDayComponent'
import classes from './WeeklyCalendar.module.scss'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function createDates(month, day, year) {
    let givenDate = new Date(`${month}-${day}-${year}`)
    let monday = givenDate
    let datesArray = []
    while(monday.getDay() !== 1) {
        monday = new Date(monday.getTime() - 86400000)
    }
    while(monday.getDay() !== 0) {
        datesArray.push(monday)
        monday = new Date(monday.getTime() + 86400000)
    }
    datesArray.push(monday)
    return datesArray
}

function WeeklyCalendar() {
    const optionsCtx = useContext(OptionsContext)

    const startingDate = optionsCtx.startDate.getDate()
    const startingMonth = optionsCtx.startDate.getMonth()+1
    const startingYear = optionsCtx.startDate.getFullYear()

    const weekDates = createDates(startingMonth, startingDate, startingYear)
    return (
        <div className={classes['weekly-calendar']}>
            {DAYS.map(day => <p key={day} className={classes['day-title']}>{day}</p>)}
            {weekDates.map(date => <WeeklyDayComponent key={date} date={date} />)}
        </div>
    )
}

export default WeeklyCalendar