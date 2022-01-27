import AddHabit from './AddHabit/AddHabit'
import Habit from './Habit/Habit'
import classes from './HabitsList.module.scss'
import { useContext } from 'react'
import { HabitsContext } from '../../habits-context'
import { OptionsContext } from '../side-options-context'

function HabitsList() {
    const habitsCtx = useContext(HabitsContext)
    const optionsCtx = useContext(OptionsContext)

    const habitElements = habitsCtx.habitsData.map(habit => {
        return <Habit habitData={habit} key={habit.id}/>
    })
    
    const noHabitsMessage = <p className={classes['message']}>Start Adding New Habits!</p>
    return (
        <section className={classes['habits-list-container']}>
            <AddHabit />
            {habitsCtx.loadingHabits && <p className={classes['message']}>Loading your habits...</p>}
            <div className={classes['habits-list']}>
                {habitElements.length === 0 && !habitsCtx.loadingHabits ? noHabitsMessage : habitElements}
            </div>
        </section>
    )
}

export default HabitsList