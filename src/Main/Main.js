import { HabitsContextProvider } from '../habits-context'
import HabitsList from './HabitsList/HabitsList'
import classes from './Main.module.scss'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Calendar from './Calendar/Calendar'
import { CalendarContextProvider } from './Calendar/calendar-context'
import { OptionsContextProvider } from './side-options-context'
import Stats from '../Main/Stats/Stats'
function Main() {
    const location = useLocation()
    return (
    <main>
        <OptionsContextProvider>
            <CalendarContextProvider>
                <Sidebar page={location.pathname.split('/')[1]} />
                <HabitsContextProvider>
                        <Routes>
                        <Route path='/' element={<Navigate to='/habits-list'/>} />
                        <Route path='/habits-list/*' element={<HabitsList />} />
                        <Route path='/calendar/*' element={<Calendar />} />
                        <Route path='/stats/*' element={<Stats />} />
                    </Routes>
                </HabitsContextProvider>
            </CalendarContextProvider>
        </OptionsContextProvider>
    </main>
    )
}

export default Main