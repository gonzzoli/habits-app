import classes from './DayComponent.module.scss'

function DayComponent(props) {
    const month = props.date.getMonth()
    const day = props.date.getDate()
    return (
    <div className={classes['day-container']}>
        <p className={classes['date']}>{month} {day}</p>
        <p className={classes['total-done']}>3/5</p>
    </div>
    )
}

export default DayComponent