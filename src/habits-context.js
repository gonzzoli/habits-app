import { createContext, useEffect, useState } from "react";

export const HabitsContext = createContext()
class Habit{
    constructor(id,actionDays, description, title, startDate, scoreChain, reminders) {
        this.id=id
        this.title=title
        this.description=description
        this.actionDays=actionDays
        this.startDate=startDate
        this.scoreChain=scoreChain
        this.reminders=reminders
    }
    get daysSince() {
        return this.scoreChain.length
    }
    get completedDays() {
        let total = 0
        this.scoreChain.forEach(score => {
            if(score.completed) total++
        })
        return total
    }
}

export function HabitsContextProvider(props) {
    const [habitsData, setHabitsData] = useState([])
    const [uploadingHabit, setUploadingHabit] = useState(false)
    const [loadingHabits, setLoadingHabits] = useState(false)
    
    useEffect(() => {
        async function fetchHabits() {
            const response = await fetch('https://habit-crash-default-rtdb.firebaseio.com/habits.json')
            if(!response.ok) throw new Error('error al buscar los habits')
            const data = await response.json()
            return data
        }
        setLoadingHabits(true)
        fetchHabits()
        .then(data => {
            let habitsArray = []
            for(let key in data) {
                const {title, actionDays, reminders,
                id, startDate, description, scoreChain} = data[key]

                const habit = new Habit(id,actionDays,description,title,startDate,scoreChain, reminders)
                habitsArray.push(habit)
            }
            setHabitsData(habitsArray)
            setLoadingHabits(false)
        })
        .catch(err => console.log(err))
    }, [])

    async function uploadHabit(habit) {
        const req = await fetch('https://habit-crash-default-rtdb.firebaseio.com/habits.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habit)
        })
        if(!req.ok) throw new Error('Y bueno cosas q pasan')
    }

    async function addHabit(habit) {
        setUploadingHabit(true)
        console.log(habit)
        await uploadHabit(habit)
        .then(() => {
            setHabitsData(prevData => prevData.concat(habit))
        })
        .catch(err => console.log(err))
        setUploadingHabit(false)
    }

    return (
        <HabitsContext.Provider value={{
            habitsData,
            uploadingHabit,
            loadingHabits,
            addHabit
        }}>
            {props.children}
        </HabitsContext.Provider>
    )
}