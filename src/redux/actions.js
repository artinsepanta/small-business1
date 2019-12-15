

export const addListing = (UrgentCare) => {
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

