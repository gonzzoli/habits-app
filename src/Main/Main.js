import classes from './Main.module.scss'
import { HabitsContextProvider } from '../habits-context'
import { CalendarContextProvider } from './Calendar/calendar-context'
import { OptionsContextProvider } from './side-options-context'
import HabitsList from './HabitsList/HabitsList'
import Sidebar from './Sidebar/Sidebar'
import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

const Calendar = lazy(()=>import('./Calendar/Calendar'))
const ErrorPage = lazy(()=>import('./ErrorPage/ErrorPage'))
const Stats = lazy(()=>import('../Main/Stats/Stats'))

function Main() {
    const location = useLocation()
    return (
    <main>
        <OptionsContextProvider>
            <CalendarContextProvider>
                <Sidebar page={location.pathname.split('/')[1]} />
                <HabitsContextProvider>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Routes>
                            <Route path='/habits-list/*' element={<HabitsList />} />
                            <Route path='/calendar/*' element={<Calendar />} />
                            <Route path='/stats/*' element={<Stats />} />
                            <Route path='/' element={<Navigate to='/habits-list'/>} />
                            <Route path='*' element={<ErrorPage />} />
                        </Routes>
                    </Suspense>
                </HabitsContextProvider>
            </CalendarContextProvider>
        </OptionsContextProvider>
    </main>
    )
}

export default Main