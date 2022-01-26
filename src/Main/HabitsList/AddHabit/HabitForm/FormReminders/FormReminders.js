import { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import { FormContext } from '../context/habit-form-context'
import classes from './FormReminders.module.scss'
import Reminder from './Reminder'
import ReminderForm from './ReminderForm/ReminderForm.js'

function FormReminders() {
    const [showReminderForm, setShowReminderForm] = useState(false)
    const ctx = useContext(FormContext)
    const reminders = ctx.reminders

    function toggleForm() {
        setShowReminderForm(prevState => !prevState)
    }

    return (
        <div className={classes['form-reminders-container']}>
            <p className={classes['title']}>Reminders</p>
            {!showReminderForm && <div className={classes['add-reminder']}>
                <p onClick={toggleForm}>+ Add Reminder</p>
            </div>}
            {showReminderForm && <ReminderForm onCloseForm={toggleForm} />}
            <div className={classes['reminders-list']}>
                {reminders.map(reminder => <Reminder data={reminder} key={reminder.id} />)}
            </div>
        </div>
    )
}

export default FormReminders