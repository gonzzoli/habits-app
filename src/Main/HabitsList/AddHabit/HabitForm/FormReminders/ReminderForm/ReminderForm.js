import classes from './ReminderForm.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useContext, useRef, useState } from 'react'
import { FormContext } from '../../context/habit-form-context'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function ReminderForm(props) {
    const ctx = useContext(FormContext)
    const dayRef = useRef()
    const timeRef = useRef()
    const [triedSubmitting, setTriedSubmitting] = useState(false)
    const [timeIsValid, setTimeIsValid] = useState(false)

    function cancelForm() {
        props.onCloseForm()
    }

    function validateTime() {
        if(timeRef.current.value !== '') setTimeIsValid(true)
    }

    function submitForm() {
        setTriedSubmitting(true)
        if(timeRef.current.value === '') {
            setTimeIsValid(false)
            return
        }
        const reminder = {
            id: Math.random(),
            day: dayRef.current.value.toLowerCase(),
            hour: Number(timeRef.current.value.slice(0, 2)),
            minutes: Number(timeRef.current.value.slice(3))
        }
        ctx.addReminder(reminder)
        props.onCloseForm()
    }

    return (
        <div className={classes['form-container']}>
            <div className={classes['input-container']}>
                <select ref={dayRef}>
                    {WEEK_DAYS.map(day => <option key={day} value={day}>{day}</option>)}
                </select>
                <div className={classes['time-input']}>
                    <input onChange={validateTime} ref={timeRef} type='time' onKeyDown={(e)=>{if(e.key==='Enter')e.preventDefault()}} className={!timeIsValid && triedSubmitting ? classes['time-error'] : ''}/>
                    {!timeIsValid && triedSubmitting && <p className={classes['error-text']}>Set a time!</p>}
                </div>
            </div>
            <div className={classes['cta-container']}>
                <button type='button' className={`${classes['cta']} ${classes['cancel']}`}>
                    <FontAwesomeIcon onClick={cancelForm} icon={faTimes} />
                </button>
                <button type='button' className={`${classes['cta']} ${classes['add']}`}>
                    <FontAwesomeIcon onClick={submitForm} icon={faCheck} />
                </button>
            </div>
        </div>
    )
}

export default ReminderForm