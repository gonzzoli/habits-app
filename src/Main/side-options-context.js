import { createContext, useState } from "react";

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const OptionsContext = createContext()

export function OptionsContextProvider(props) {
    const [monthShowing, setMonthShowing] = useState(new Date().getMonth()+1)
    const [yearShowing, setYearShowing] = useState(new Date().getFullYear())
    const [habitSortOption, setHabitSortOption] = useState('Newest')
    const [calendarTimeframe, setCalendarTimeframe] = useState('weekly')

    function changeMonthShowingHandler(month) {
        setMonthShowing(MONTHS.indexOf(month) + 1)
    }

    function changeYearShowingHandler(year) {
        setYearShowing(year)
    }

    function changeHabitSortHandler(option) {
        setHabitSortOption(option)
    }

    function changeCalendarTimeframeHandler(timeframe) {
        setCalendarTimeframe(timeframe)
    }
    return (
        <OptionsContext.Provider value={{
            monthShowing,
            yearShowing,
            habitSortOption,
            calendarTimeframe,
            changeHabitSortHandler,
            changeMonthShowingHandler,
            changeYearShowingHandler,
            changeCalendarTimeframeHandler
        }}>
            {props.children}
        </OptionsContext.Provider>
    )
}