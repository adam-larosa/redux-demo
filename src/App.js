import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSecret, fetchSecrets } from './reducers/secretsSlice'

function App() {

	const dispatch = useDispatch()

	useEffect( () => { 
		dispatch( fetchSecrets() ) 
	}, [] )


	const secretsArray = useSelector( stateObj => {
		return stateObj.secrets
	} )



	const [ newSecret, setNewSecret ] = useState( '' )

	const handleChange = e => {
		setNewSecret( e.target.value )
	}

	const handleAddSecret = () => {
		

		dispatch( addSecret( { content: newSecret } ) )
	}

	return (
		<>
			<h1>all the secrets</h1>
			<input onChange={ handleChange }/>
			<button onClick={ handleAddSecret}>ADD SECRET</button>
			{ secretsArray.map( (sObj, i) => 
				<div key={i}>{ sObj.content }</div> ) }
		</>
	);
}

export default App;
