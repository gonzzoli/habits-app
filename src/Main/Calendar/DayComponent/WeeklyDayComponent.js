import classes from './WeeklyDayComponent.module.scss'

function WeeklyDayComponent(props) {
    return (
        <div className={classes['day-container']}>
            <p>{props.date.getDate()}</p>
        </div>
    )
}

export default WeeklyDayComponent