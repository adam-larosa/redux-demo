
import { useSelector, useDispatch } from 'react-redux'

function App() {

	const dispatch = useDispatch()

	const ourState = useSelector( theState => {
		return theState
	} )

	const changeState = () => {

		const theAction = {
			type: 'user/add',
			payload: 'the third string'
		}

		dispatch( theAction )
	}

	return (
		<>
			<div>
				{ ourState.map( (s, i) => <h1 key={i}>{ s }</h1>)}
			</div>
			<button onClick={ changeState }>
				CLICK ME TO CHANGE STATE
			</button>
		</>
	);
}

export default App;
