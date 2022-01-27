import { createContext, useState } from "react";

export const CalendarContext = createContext()
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function CalendarContextProvider(props) {
    const [monthShowing, setMonthShowing] = useState(new Date().getMonth()+1)
    const [yearShowing, setYearShowing] = useState(new Date().getFullYear())
    


    function changeMonthShowingHandler(month) {
        setMonthShowing(MONTHS.indexOf(month) + 1)
    }

    function changeYearShowingHandler(year) {
        setYearShowing(year)
    }
    
    return (
        <CalendarContext.Provider value={{
            DAYS,
            MONTHS,
            monthShowing,
            yearShowing,
            changeMonthShowingHandler,
            changeYearShowingHandler
        }}>
            {props.children}
        </CalendarContext.Provider>
    )
}