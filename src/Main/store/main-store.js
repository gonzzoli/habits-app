// Not using this file yet, may keep context for now

import { createSlice, configureStore } from "@reduxjs/toolkit";

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const calendarInitialState = {
    monthShowing: new Date().getMonth() + 1,
    yearShowing: new Date().getFullYear()
}

const CalendarSlice = createSlice({
    name: 'calendar',
    initialState: calendarInitialState,
    reducers: {
        changeMonthShowing(state, action) {
            state.monthShowing = action.payload
        },
        changeYearShowing(state, action) {
            state.yearShowing = action.payload
        }
    }
})

const HabitsListSlice = createSlice({
    name: 'habitsList',
    initialState: ''
})

const store = configureStore({
    reducer: {
        calendar: CalendarSlice.reducer
    }
})

export const calendarActions = CalendarSlice.actions