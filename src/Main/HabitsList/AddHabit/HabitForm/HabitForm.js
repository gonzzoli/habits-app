import FormDays from './FormDays/FormDays'
import FormReminders from './FormReminders/FormReminders'
import classes from './HabitForm.module.scss'

function HabitForm() {
    return (
        <form className={classes['habit-form']}>
            <div className={`${classes['form']} ${classes['top']}`}>
                <div className={classes['form-input']}>
                    <label htmlFor='title'>Habit Title</label>
                    <input placeholder='Running...' type='text' id='title' />
                </div>
                <FormDays />
            </div>
            <div className={`${classes['form']} ${classes['bottom']}`}>
                <div className={classes['form-input']}>
                    <label htmlFor='description'>Description <span>(optional)</span> </label>
                    <textarea placeholder='Jump after waking up and...' type='text' id='description' />
                </div>
                <FormReminders />
            </div>
        </form>
    )
}

export default HabitForm