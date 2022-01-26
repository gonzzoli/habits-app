import { createContext } from "react";

export const CalendarContext = createContext()
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


export function CalendarContextProvider(props) {

    return (
        <CalendarContext.Provider value={
            DAYS
        }>
            {props.children}
        </CalendarContext.Provider>
    )
}