import { HabitsContextProvider } from '../habits-context'
import HabitsList from './HabitsList/HabitsList'
import classes from './Main.module.scss'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Calendar from './Calendar/Calendar'


function Main() {
    return (
        <main>
            <Sidebar />
            <HabitsContextProvider>
                <Routes>
                    <Route path='/' element={<Navigate to='/habits-list'/>} />
                    <Route path='/habits-list' element={<HabitsList />} />
                    <Route path='/calendar' element={<Calendar />} />
                </Routes>
            </HabitsContextProvider>
        </main>
    )
}

export default Main