
const initialState = 'initial value of user state'

export const userReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case 'meow/change':
            return 'STATE IS CHANGED!!!!'
        default:
            return state
    }
}