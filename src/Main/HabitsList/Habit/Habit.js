import classes from './Habit.module.scss'
import HabitChain from './HabitChain/HabitChain'


function Habit(props) {
    return (
        <div className={classes['habit']}>
            <div className={classes['habit-top']}>
                <p className={classes['habit-title']}>No Smoking</p>
                <p className={classes['start-date']}>Since 19/02/22</p>
            </div>
            <HabitChain />
            <div className={classes['habit-bottom']}>
                <p className={classes['habit-score']}>17/32</p>
                <button>See details</button>
            </div>
        </div>
    )
}

export default Habit