import HabitsList from './HabitsList/HabitsList'
import classes from './Main.module.scss'
import Sidebar from './Sidebar/Sidebar'

function Main() {
    return (
        <main>
            <Sidebar />
            <HabitsList />
        </main>
    )
}

export default Main