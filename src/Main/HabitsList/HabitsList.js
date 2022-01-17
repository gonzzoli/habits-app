import AddHabit from './AddHabit/AddHabit'
import Habit from './Habit/Habit'
import classes from './HabitsList.module.scss'

function HabitsList() {
    return (
        <section className={classes['habits-list-container']}>
            <AddHabit />
            <div className={classes['habits-list']}>
                <Habit />
                <Habit />
                <Habit />
                <Habit />
            </div>
        </section>
    )
}

export default HabitsList