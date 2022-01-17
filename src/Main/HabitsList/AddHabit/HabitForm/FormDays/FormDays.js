import classes from './FormDays.module.scss'

function FormDays() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const daysCircles = days.map(day => {
        return <li className={classes['day-circle']}>{day.charAt(0).toUpperCase()}</li>
    })
    return (
        <div className={classes['form-days-container']}>
            <p className={classes['title']}>When?</p>
            <ul className={classes['circles-container']}>
                {daysCircles}
            </ul>
        </div>
    )
}

export default FormDays