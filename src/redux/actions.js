

// Spelling the value of type in capital letters, like 'ADD_CAR' is a Redux convention. It lets other developers on your application know that you are using Redux. The value of value is whatever you want to update your state with.
// Another common practice is to use the key name payload instead of value

// const addCar = {
//     type: 'ADD_CAR',
//     value: 'Tesla Model Y'
// }

export const addCar = (newCar) => {
    return {
        type: 'ADD_CAR',
        value: newCar
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const setUser = (newUser) => {
    return {
        type: 'SET_USER',
        value: newUser
    }
}

export const unsetUser = (index) => {
    return {
        type: 'UNSET_USER',
        value: index
    }
}