
import { useSelector, useDispatch } from 'react-redux'

function App() {


	const dispatch = useDispatch()

	const stateValue = useSelector( theValueOfState => {
		return theValueOfState
	} )

	const theAction = { type: 'meow/change' }

	const handleClick = () => {
		dispatch( theAction )
	}

	return (
		<>
			<h1>{ stateValue }</h1>
			<button onClick={ handleClick }>
				CLICK ME
			</button>
		</>
	);
}

export default App;
