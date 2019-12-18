// import { combineReducers } from 'redux'
// import initialState from './store'

// const user = (state = null, action) => state

// const listing = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_UrgentCare':
//             return [...state, action.value]
//         case 'REMOVE_UrgentCare':
//             const urgentCares = [...state]
//             urgentCares.splice(action.value, 1)
//             return urgentCares
//         default:
//             return state
//     }
// }

// export default combineReducers({ user, listing })
import { combineReducers } from 'redux'
import initialState from './store'

const user = (state = null, action) => {
    switch(action.type){
        case "LOG_IN":
            return {...state, auth: { loggedIn: true}};
        case "LOG_OUT":
            return {...state, auth: { loggedIn: false }};
        default:
            return state;
    }
}

const UrgentCares = (state = [], action) => {
    switch(action.type) {
        case 'ADD_URGENTCARE':
            return [ ...state, action.value ]
        case 'REMOVE_URGENTCARE':
            const urgentCares = [ ...state ]
            urgentCares.splice(action.value, 1)
            return urgentCares
        default:
            return state
    }
}
export default combineReducers({ initialState, user, UrgentCares })