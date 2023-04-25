

const initialState = 'the "user" in state - default value'


export const userReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case 'user/set':
            return action.payload
        default:
            return state
    }

}