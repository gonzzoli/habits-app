import { useContext } from 'react'
import { FormContext } from '../context/habit-form-context'
import classes from './FormDays.module.scss'

const WEEK_DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

function FormDays() {
    const ctx = useContext(FormContext)

    const daysCircles = WEEK_DAYS.map(day => {
        let classNames = classes['day-circle']
        if(ctx.selectedDays.includes(day)) {
            classNames = `${classes['day-circle']} ${classes['selected']}`
        }
        return <li key={day} onClick={()=>{ctx.toggleDay(day)}} className={classNames}>{day.charAt(0).toUpperCase()}</li>
    })

    return (
        <div className={classes['form-days-container']}>
            <p className={classes['title']}>When?</p>
            <ul className={classes['circles-container']}>
                {daysCircles}
            </ul>
            {!ctx.daysIsValid && <p className={classes['error-text']}>Select at least 1 day.</p>}
        </div>
    )
}

export default FormDays