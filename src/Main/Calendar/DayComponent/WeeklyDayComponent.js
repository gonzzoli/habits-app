import { useContext } from 'react/cjs/react.development'
import { HabitsContext } from '../../../habits-context'
import { OptionsContext } from '../../side-options-context'
import classes from './WeeklyDayComponent.module.scss'

function WeeklyDayComponent(props) {
    const habitsCtx = useContext(HabitsContext)
    const optionsCtx = useContext(OptionsContext)
    const dayHabits = habitsCtx.getDayHabits(props.date.getDay()-1)
    const showColors = optionsCtx.showColors
    let habitTitles = []

    dayHabits.forEach(habit => {
        habitTitles.push(<li key={habit.title} className={classes['habit-title']}>{habit.title}</li>)
    })

    return (
        <div className={`${classes['day-container']}`}>
            <div className={`${classes['color-background']}
                ${props.completed ? classes['completed'] : classes['uncompleted']} 
                ${showColors ? classes['show-colors'] : ''}`}>
            </div>

            <p className={classes['date']}>{props.date.getDate()}</p>
            <ul className={classes['day-habits']}>
                {habitTitles}
            </ul>
            <p className={classes['total-completed']}>3/4</p>
        </div>
    )
}

export default WeeklyDayComponent