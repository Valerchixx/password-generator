import React, {useState} from 'react';
import SwitchThemes from '../src/components/SwitchThemes';
import SideBar from './components/SideBar';
import {Context} from './utils/context';
import BurgerBtn from './components/BurgerBtn';
import './App.css';

import Generator from './components/Generator';

function App() {
	const [open, setOpen] = useState(false);
	const [isToggle, setIsToggle] = useState(false);
	if (isToggle) {
		document.querySelector('body').classList.add('violet');
	} else {
		document.querySelector('body').classList.remove('violet');
	}

	const passArray = JSON.parse(sessionStorage.getItem('passArr'));

	return (
		<Context.Provider value={{passArray}}>
			<div className="App">
				<BurgerBtn setOpen={setOpen} open={open} />
				<SideBar violet={isToggle} open={open} />
				<div className="switch">
					<SwitchThemes isToggled={isToggle} onToggle={() => setIsToggle(!isToggle)} />
				</div>
				<Generator theme={isToggle} />
			</div>
		</Context.Provider>
	);
}

export default App;
