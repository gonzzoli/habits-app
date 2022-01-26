import { useContext, useRef } from 'react'
import { HabitsContext } from '../../../../habits-context'
import useInput from '../../../../Hooks/use-input'
import { FormContext } from './context/habit-form-context'
import FormDays from './FormDays/FormDays'
import FormReminders from './FormReminders/FormReminders'
import classes from './HabitForm.module.scss'

class Habit{
    constructor(id, title, description, actionDays, reminders) {
        this.id=id
        this.title=title
        this.description=description
        this.actionDays=actionDays
        this.reminders=reminders
        this.scoreChain = [{date: Date.now(), completed: false}]
        this.startDate = Date.now()
    }
    get daysSince() {
        return this.scoreChain.length
    }
    get completedDays() {
        let total = 0
        this.scoreChain.forEach(score => {
            if(score.completed) total++
        })
        return total
    }
}

function HabitForm(props) {
    const formCtx = useContext(FormContext)
    const habitsCtx = useContext(HabitsContext)
    const titleRef = useRef()
    const descriptionRef = useRef()
    const validateInput = (value) => value.length > 0
    const {
        isValid: titleIsValid,
        inputTouched: titleTouched,
        validateInput: validateTitle
    } = useInput(titleRef, validateInput)

    async function submitForm(e) {
        e.preventDefault()
        validateTitle()
        formCtx.checkSelectedDays()
        if(!titleIsValid || !formCtx.daysIsValid) return
        
        const newHabit = new Habit(Math.random(),
        titleRef.current.value,
        descriptionRef.current.value,
        formCtx.selectedDays,
        formCtx.reminders)
        await habitsCtx.addHabit(newHabit)
        formCtx.resetState()
        props.onCancelForm()
    }

    function cancelForm() {
        formCtx.resetState()
        props.onCancelForm()
    }
    return (
        <form onSubmit={submitForm} className={classes['habit-form']}>
            <div className={`${classes['form']} ${classes['top']}`}>
                <div className={classes['form-input']}>
                    <label htmlFor='title'>Habit Title</label>
                    <input ref={titleRef} onChange={validateTitle} onKeyDown={(e)=>{if(e.key==='Enter')e.preventDefault()}} className={!titleIsValid && titleTouched ? classes['input-error']: ''} placeholder='Running...' type='text' id='title' />
                    {!titleIsValid && titleTouched && <p className={classes['error-text']}>No title?</p>}
                </div>
                <FormDays />
            </div>
            <div className={`${classes['form']} ${classes['bottom']}`}>
                <div className={classes['form-input']}>
                    <label htmlFor='description'>Description <span>(optional)</span> </label>
                    <textarea ref={descriptionRef} placeholder='Jump after waking up and...' type='text' id='description' />
                </div>
                <FormReminders />
            </div>
            <div className={classes['form-cta']}>
                <button type='button' onClick={cancelForm} className={`${classes['button']} ${classes['cancel']}`}>Cancel</button>
                <button type='submit' className={`${classes['button']} ${classes['add']}`}>{habitsCtx.uploadingHabit ? 'Saving...' : 'Add Habit'}</button>
            </div>
        </form>
    )
}

export default HabitForm