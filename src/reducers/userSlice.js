
const initialState = 'meow in state'

export const userReducer = ( state = initialState, action ) => {

    switch( action.type ) {
        case 'meow/change':
            return 'STATE IS CHANGED!!!!'
        case 'user/fetch':
            fetch()
        default:
            return state
    }
}