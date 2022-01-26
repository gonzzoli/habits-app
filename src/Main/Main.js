import { HabitsContextProvider } from '../habits-context'
import HabitsList from './HabitsList/HabitsList'
import classes from './Main.module.scss'
import Sidebar from './Sidebar/Sidebar'

function Main() {
    return (
        <main>
            <Sidebar />
            <HabitsContextProvider>
                <HabitsList />
            </HabitsContextProvider>
        </main>
    )
}

export default Main