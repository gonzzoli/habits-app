import { useState } from 'react'
import classes from './AddHabit.module.scss'
import { FormContextProvider } from './HabitForm/context/habit-form-context'
import HabitForm from './HabitForm/HabitForm'

function AddHabit() {
    const addHabitCta = (<div onClick={toggleForm} className={classes['add-habit-cta']}>
    <p>+ New Habit</p>
</div>)
    const [showForm, setShowForm] = useState(false)
    function toggleForm() {
        setShowForm(prevState => !prevState)
    }
    return (
        <div className={classes['add-habit-container']}>
            {!showForm && addHabitCta}
            <FormContextProvider>
                {showForm && <HabitForm onCancelForm={toggleForm}/>}
            </FormContextProvider>
        </div>
    )
}

export default AddHabit