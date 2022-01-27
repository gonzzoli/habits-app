import { HabitsContextProvider } from '../habits-context'
import HabitsList from './HabitsList/HabitsList'
import classes from './Main.module.scss'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Calendar from './Calendar/Calendar'
import { CalendarContextProvider } from './Calendar/calendar-context'
import { OptionsContextProvider } from './side-options-context'

function Main() {
    return (
    <main>
        <OptionsContextProvider>
            <CalendarContextProvider>
                <Sidebar />
                <HabitsContextProvider>
                        <Routes>
                        <Route path='/' element={<Navigate to='/habits-list'/>} />
                        <Route path='/habits-list/*' element={<HabitsList />} />
                        <Route path='/calendar/*' element={<Calendar />} />
                    </Routes>
                </HabitsContextProvider>
            </CalendarContextProvider>
        </OptionsContextProvider>
    </main>
    )
}

export default Main