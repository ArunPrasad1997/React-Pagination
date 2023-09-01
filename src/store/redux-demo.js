import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';
// import { createStore } from 'redux';


// let counterStates = { counter: 0, showCounter: true };

// var counterSlice = createSlice({
//     name: 'counter',
//     initialState: counterStates,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         }
//     }
// })



// const counterReducer = (state = initialStates, action) => {
//     if (action.type === "INCREMENT") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     };
//     if (action.type === "INCREASEBY5") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter

//         };
//     };
//     if (action.type === "DECREMENT") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter

//         };
//     };
//     if (action.type === "TOGGLE") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     };
//     return state;

// };

// const store = createStore(counterSlice);
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});




export default store;