import AddHabit from './AddHabit/AddHabit'
import Habit from './Habit/Habit'
import classes from './HabitsList.module.scss'
import { useContext } from 'react'
import { HabitsContext } from '../../habits-context'

function HabitsList() {
    const ctx = useContext(HabitsContext)
    const habitElements = ctx.habitsData.map(habit => {
        return <Habit habitData={habit} key={habit.id}/>
    })
    const noHabitsMessage = <p className={classes['message']}>Start Adding New Habits!</p>
    return (
        <section className={classes['habits-list-container']}>
            <AddHabit />
            {ctx.loadingHabits && <p className={classes['message']}>Loading your habits...</p>}
            <div className={classes['habits-list']}>
                {habitElements.length === 0 && !ctx.loadingHabits ? noHabitsMessage : habitElements}
            </div>
        </section>
    )
}

export default HabitsList