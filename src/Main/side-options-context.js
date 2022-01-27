import { createContext, useState } from "react";

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const OptionsContext = createContext()

export function OptionsContextProvider(props) {
    const [monthShowing, setMonthShowing] = useState(new Date().getMonth()+1)
    const [yearShowing, setYearShowing] = useState(new Date().getFullYear())
    const [habitSortOption, setHabitSortOption] = useState('Newest')
    const [calendarTimeframe, setCalendarTimeframe] = useState('weekly')
    const [startDate, setStartDate] = useState(new Date())

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

    function changeWeekStartDateHandler(startDate) {
        setStartDate(startDate)
    }

    function advanceCalendarHandler() {
        if(calendarTimeframe==='monthly') {
            setMonthShowing(prevState => prevState+1)
        } else {
            setStartDate(prevState => new Date(+prevState + 7*86400000))
        }
    }

    function retreatCalendarHandler() {
        if(calendarTimeframe==='monthly') {
            setMonthShowing(prevState => prevState-1)
        } else {
            setStartDate(prevState => new Date(+prevState + 7*86400000))
        }
    }

    return (
        <OptionsContext.Provider value={{
            monthShowing,
            yearShowing,
            habitSortOption,
            calendarTimeframe,
            startDate,
            changeHabitSortHandler,
            changeMonthShowingHandler,
            changeYearShowingHandler,
            changeCalendarTimeframeHandler,
            changeWeekStartDateHandler,
            advanceCalendarHandler,
            retreatCalendarHandler
        }}>
            {props.children}
        </OptionsContext.Provider>
    )
}