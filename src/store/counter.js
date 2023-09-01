import { createSlice } from "@reduxjs/toolkit";

let counterStates = { counter: 0, showCounter: true };

var counterSlice = createSlice({
    name: 'counter',
    initialState: counterStates,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;