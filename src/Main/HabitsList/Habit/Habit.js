import { useState } from 'react'
import classes from './Habit.module.scss'
import HabitChain from './HabitChain/HabitChain'
import Reminder from '../AddHabit/HabitForm/FormReminders/Reminder'
import DeleteModal from './DeleteModal/DeleteModal'

function Habit(props) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const date = new Date(props.habitData.startDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const actionDays = props.habitData.actionDays
    let actionDaysStr = ''
    for(let i=0; i<actionDays.length; i++) {
        if(i==0) {
            actionDaysStr += actionDays[i]
        }else {
            actionDaysStr += ', ' + actionDays[i]
        }
    }
    const [showDetails, setShowDetails] = useState(false)

    function toggleHabitDetails() {
        setShowDetails(prevState => !prevState)
    }

    function toggleDeleteModal() {
        setShowDeleteModal(prevState => !prevState)
    }

    function deleteHabit() {
        console.log('deleting ', props.habitData.id)
        setShowDeleteModal(false)
    }
    return (
        <div className={`${classes['habit']} ${showDetails && classes['show-details']}`}>
            <div className={classes['habit-top']}>
                <div className={`${classes['title-container']} ${showDetails?classes['in-details']:''}`}>
                    <p className={classes['habit-title']}>{props.habitData.title}</p>
                </div>
                <p className={classes['start-date']}>Since {day}/{month}/{year}</p>
            </div>
            <HabitChain chainData={props.habitData.scoreChain}/>
            {showDetails && <div className={classes['details']}>
                {showDeleteModal && <DeleteModal onDeleteHabit={deleteHabit} onCloseModal={toggleDeleteModal}/>}
                <div className={classes['info']}>
                    <h4>Days: </h4>
                    <p className={classes['action-days']}>{actionDaysStr}</p>
                </div>
                {props.habitData.reminders && <div className={classes['reminders']}>
                    <h4>Reminders:</h4>
                    <div className={classes['reminders-container']}>
                        {props.habitData.reminders.map(reminder => {
                        return <Reminder key={Math.random()} inDetails={true} data={reminder} />
                    })}
                    </div>
                    
                </div>}
                {props.habitData.description !== '' && <div className={classes['info']}>
                    <h4>Description:</h4>
                    <p>{props.habitData.description}</p>
                </div>}
            </div>}
            <div className={classes['habit-bottom']}>
                <p className={classes['habit-score']}>{props.habitData.completedDays}/{props.habitData.daysSince}</p>
                {showDetails && <button onClick={toggleDeleteModal} className={classes['delete-button']}>Delete Habit</button>}
                <button onClick={toggleHabitDetails}>{showDetails ? 'Close' : 'See Details'}</button>
            </div>
        </div>
    )
}

export default Habit