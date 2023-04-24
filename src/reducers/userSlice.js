

const initialState = [ 'first meow', 'second meow' ]


export const userReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case 'user/add':
            const new_state = [ ...state ]
            new_state.push( action.payload )
            return new_state 
        
        default:
            return state
    }

}