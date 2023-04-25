import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSecret, fetchSecrets } from './reducers/secretsSlice'

function App() {
	const dispatch = useDispatch()

	const [ newSecret, setNewSecret ] = useState( '' )
	const secrets = useSelector( stateObj => stateObj.secrets )
	const editInput = e => setNewSecret( e.target.value )
	const dispatchSecret = () => dispatch( addSecret( newSecret ) )
	

	useEffect( () => {
		dispatch( fetchSecrets() )
	}, [] ) 

	return (
		<>
			<h1>meow</h1>
			<input onChange={ editInput }/>
			<button onClick={ dispatchSecret }>add secret</button>
			{ secrets.map( (sObj, i) => <h3 key={i}>{ sObj.content }</h3>) }
		</>
	);
}

export default App;
