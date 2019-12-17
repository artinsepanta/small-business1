const url ="https://gabamnml-health-v1.p.rapidapi.com/bmi"
export const loggedIn = () => {
    return {
        type: 'LOG_IN',
        value: true
    }
}

export const loggedOut = () => {
    return {
        type: 'LOG_OUT',
        value: false
    }
}

export const addUrgentCare = (UrgentCare) => {
     return {
         type: 'ADD_UrgentCare',
         value: UrgentCare
     }
 }

 export const removeUrgentCare = (index) => {
     return {
         type: 'REMOVE_UrgentCare',
         value: index
     }
 }

  export const deleteUrgentCare = (index) => {
    return {
        type:'DELETE_UrgentCare',
        value:index
    }
}

  