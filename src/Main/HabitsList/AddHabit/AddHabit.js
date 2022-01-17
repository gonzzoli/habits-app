import classes from './AddHabit.module.scss'
import HabitForm from './HabitForm/HabitForm'

function AddHabit() {
    return (
        <div className={classes['add-habit-container']}>
            <div className={classes['add-habit-cta']}>
                <p>+ New Habit</p>
            </div>
            <HabitForm />
        </div>
    )
}

export default AddHabit