import classes from './MonthlyDayComponent.module.scss'
import { useContext } from 'react'
import { OptionsContext } from '../../side-options-context'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function DayComponent(props) {
    const month = props.date.getMonth()
    const day = props.date.getDate()
    const optionsCtx = useContext(OptionsContext)
    //Add a 1 because it is index-based and not 'human' based
    const outOfMonth = month+1 !== optionsCtx.startDate.getMonth()+1
    
    let habitTitles = []
    props.habits.forEach(habit => {
        habitTitles.push(<p key={habit.title} className={classes['habit-title']}>{habit.title}</p>)
    })

    const stateClass = props.completed ? 'completed' : 'uncompleted'

    return (
    <div className={`${classes['day-container']} 
    ${outOfMonth ? classes['out-of-month'] : ''}
    ${optionsCtx.showColors ? classes[stateClass] : ''}`}>
        <p className={classes['date']}>{MONTHS[month]}, {day}</p>
        <p className={classes['total-done']}>3/5</p>
        {/* {habitTitles} */}
    </div>
    )
}

export default DayComponent