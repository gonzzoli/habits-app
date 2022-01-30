import AddHabit from './AddHabit/AddHabit'
import Habit from './Habit/Habit'
import classes from './HabitsList.module.scss'
import { useContext } from 'react'
import { HabitsContext } from '../../habits-context'
import { OptionsContext } from '../side-options-context'

function sortHabits(habitsData=[], sortOption) {
    const arrayCopy = habitsData.slice()
    if(sortOption==='Newest'){
        return arrayCopy.sort((a, b) => b.startDate - a.startDate)
    }
    if(sortOption==='Oldest') {
        return arrayCopy.sort((a, b) => a.startDate - b.startDate)
    }
}

function HabitsList() {
    const habitsCtx = useContext(HabitsContext)
    const optionsCtx = useContext(OptionsContext)

    const sortedHabits = sortHabits(habitsCtx.habitsData, optionsCtx.habitSortOption)

    const habitElements = sortedHabits.map(habit => {
        return <Habit habitData={habit} key={habit.id}/>
    })
    
    const noHabitsMessage = <p className={classes['message']}>Start Adding New Habits!</p>
    return (
        <section className={classes['habits-list-container']}>
            <AddHabit />
            {habitsCtx.loadingHabits && <p className={classes['message']}>Loading your habits...</p>}
            <div className={classes['habits-list']}>
                {habitElements.length === 0 && !habitsCtx.loadingHabits ? noHabitsMessage : habitElements}
            </div>
        </section>
    )
}

export default HabitsList