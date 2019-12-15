import { combineReducers } from 'redux'

const user = (state = null) => state

const listing = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UrgentCare':
            return [...state, action.value]
        case 'REMOVE_UrgentCare':
            const urgentCares = [...state]
            urgentCares.splice(action.value, 1)
            return urgentCares
        default:
            return state
    }
}

export default combineReducers({ user, listing })