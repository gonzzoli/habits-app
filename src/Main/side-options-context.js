import { createContext, useState } from "react";

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const OptionsContext = createContext()

export function OptionsContextProvider(props) {
    const [habitSortOption, setHabitSortOption] = useState('Newest')
    const [calendarTimeframe, setCalendarTimeframe] = useState('monthly')
    const [startDate, setStartDate] = useState(new Date())

    function changeHabitSortHandler(option) {
        setHabitSortOption(option)
    }

    function changeCalendarTimeframeHandler(timeframe) {
        setCalendarTimeframe(timeframe)
    }

    function changeStartDateHandler(startDate) {
        setStartDate(startDate)
    }

    function changeDateYearHandler(year) {
        setStartDate(prevDate => new Date(`${prevDate.getMonth()+1}-${prevDate.getDate()}-${year}`))
    }

    function changeDateMonthHandler(month) {
        setStartDate(prevDate => new Date(`${month}-1-${prevDate.getFullYear()}`))
    }
    function advanceCalendarHandler() {
        if(calendarTimeframe==='monthly') {
            //Month +2 because is zero index based, and we need to increase it by one also.
            //to advance the calendar
            if(startDate.getMonth()+1===12) {
                setStartDate(prevState => new Date(`1-1-${prevState.getFullYear()+1}`))
            } else {
                setStartDate(prevState => new Date(`${prevState.getMonth()+2}-1-${prevState.getFullYear()}`))
            }
        } else {
            setStartDate(prevState => new Date(+prevState + 7*86400000))
        }
    }
    function retreatCalendarHandler() {
        if(calendarTimeframe==='monthly') {
            if(startDate.getMonth()===0) {
                setStartDate(prevState => new Date(`12-1-${prevState.getFullYear()-1}`))
            } else {
                setStartDate(prevState => new Date(`${prevState.getMonth()}-1-${prevState.getFullYear()}`))
            }
        } else {
            setStartDate(prevState => new Date(+prevState - 7*86400000))        
        }
    }

    return (
        <OptionsContext.Provider value={{
            habitSortOption,
            calendarTimeframe,
            startDate,
            changeHabitSortHandler,
            changeDateMonthHandler,
            changeDateYearHandler,
            changeCalendarTimeframeHandler,
            changeStartDateHandler,
            advanceCalendarHandler,
            retreatCalendarHandler
        }}>
            {props.children}
        </OptionsContext.Provider>
    )
}