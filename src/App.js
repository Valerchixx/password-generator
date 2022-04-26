import React, {useState} from 'react';
import SwitchThemes from '../src/components/SwitchThemes';
import './App.css';

import Generator from './components/Generator';

function App() {
	const [isToggle, setIsToggle] = useState(false);
	if (isToggle) {
		document.querySelector('body').classList.add('violet');
	} else {
		document.querySelector('body').classList.remove('violet');
	}

	return (
		<div className="App">
			<div className="switch">
				<SwitchThemes isToggled={isToggle} onToggle={() => setIsToggle(!isToggle)} />
			</div>
			<Generator theme={isToggle} />
		</div>
	);
}

export default App;
