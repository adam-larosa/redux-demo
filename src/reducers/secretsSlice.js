

const iS = [ { id: 'meow', content: 'first secret' } ]


export const addSecret = newSecretObj => {
    return { type: 'secrets/add', payload: newSecretObj }   
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
            /* this is assuming the 'action.payload' is equal to an array of
               secret objects */

        
            
            return action.payload

        case 'secrets/add':
            /* this is assuming action.payload is one secret object */
            return [ ...state, action.payload ]

        case 'secrets/remove':
            /* this one assumes that action.payload is an integer of some
               doomed ID */
            return state.filter( sObj => sObj.id !== action.payload )

        default:
            return state
    }

}