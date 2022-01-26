import classes from './MonthlyCalendar.module.scss'
import DayComponent from '../DayComponent/DayComponent'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function createDates(month, year) {
    let givenDate = new Date(`${month}-1-${year}`)
    let closestMonday = givenDate
    let lastSunday = new Date(new Date(`${month+1}-1-${year}`).getTime() - 86400000)
    
    while(closestMonday.getDay() !== 1) {
        closestMonday = new Date(closestMonday.getTime() - 86400000)
    }
    while(lastSunday.getDay() !== 0) {
        lastSunday = new Date(lastSunday.getTime() + 86400000)
    }
    /*This works */
    console.log(closestMonday)
    console.log(lastSunday)
}

function MonthlyCalendar() {
    let blocks = []
    // MM-DD-YYYY
    console.log(createDates(5, 2022))
    //console.log(new Date('10-31-2022'))
    for (let i=0;i<35;i++) {
    }

    return(
    <div className={classes['monthly-calendar']}>
        {DAYS.map(day => <p key={day} className={classes['day-title']}>{day}</p>)}
    </div>
    )
}

export default MonthlyCalendar