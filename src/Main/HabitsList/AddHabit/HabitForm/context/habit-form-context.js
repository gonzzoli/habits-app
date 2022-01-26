import { createContext, useState } from "react";

export const FormContext = createContext({})

export function FormContextProvider(props) {
    const [selectedDays, setSelectedDays] = useState([])
    const [reminders, setReminders] = useState([])
    const [daysIsValid, setDaysIsValid] = useState(true)

    function addReminder(reminder) {
        const tempCopy = reminders.slice()
        tempCopy.unshift(reminder)
        setReminders(tempCopy)
    }

    function deleteReminder(id) {
        let tempCopy = reminders.slice()
        const index = tempCopy.findIndex(reminder => {
            return reminder.id === id
        })
        tempCopy.splice(index, 1)
        setReminders(tempCopy)
    }

    function checkSelectedDays() {
        if(selectedDays.length === 0) setDaysIsValid(false)
    }

    function toggleDay(day) {
        if(!selectedDays.includes(day)) {
          setSelectedDays(prevState => prevState.concat(day))
          setDaysIsValid(true)
          return
        }
        let tempCopy = selectedDays.slice()
        tempCopy.splice(tempCopy.indexOf(day), 1)
        if(tempCopy.length === 0) setDaysIsValid(false)
        setSelectedDays(tempCopy)
    }

    function resetState() {
        setSelectedDays([])
        setReminders([])
        setDaysIsValid(true)
    }

    return(
        <FormContext.Provider value={{
            reminders,
            selectedDays,
            daysIsValid,
            addReminder,
            deleteReminder,
            toggleDay,
            checkSelectedDays,
            resetState
        }}>
            {props.children}
        </FormContext.Provider>
    )
}