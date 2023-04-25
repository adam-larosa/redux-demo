
const iS = [ 'one secret' ]

export const addSecret = newSecret => {
    return { type: 'secrets/add', payload: newSecret }
}

export const fetchSecrets = () => {

    return function( dispatch ) {
        fetch( 'http://localhost:3000/secrets' )
            .then( r => r.json() )
            .then( secretsArray => {
                dispatch( { type: 'secrets/set', payload: secretsArray } )
            } )
    }

}


export const secretsReducer = ( state = iS, action ) => {
    switch( action.type ) {
        case 'secrets/set':
            /* this assumes 'action.payload' is an array of secrets */
            return action.payload
        case 'secrets/add':
            /* this assumes 'action.payload' is a secret object */
            return [ ...state, action.payload ]
        case 'secrets/remove':
            /* this assumes 'action.payload' in an integer of some doomed id */
            return state.filter( sObj => sObj.id !== action.payload )
        default:
            return state
    
    }
}