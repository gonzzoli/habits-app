import { createContext} from "react";

export const CalendarContext = createContext()
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function CalendarContextProvider(props) {
    return (
        <CalendarContext.Provider value={{
            DAYS,
            MONTHS
        }}>
            {props.children}
        </CalendarContext.Provider>
    )
}