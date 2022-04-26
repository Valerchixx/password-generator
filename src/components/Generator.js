
/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../css/generator.module.css';
import InputResult from './InputResult';
import {options} from '../utils/options';
import Button from './Button';
import CheckOption from './CheckOption';

function Generator({theme}) {
	const [checkOptions, setCheckOptions] = useState(new Array(options.length).fill(false));
	const [pass, setPass] = useState('');
	const [length, setLength] = useState(4);
	const [objOptions] = useState(
		{uppercase: generateUppercase,
			lowercase: genereateLowercase,
			numbers: generateNum,
			symbols: getenerateSymbols});
	const messages = ['please, chose options', 'copyied!'];

	const notifyError = () => toast.warning(messages[0], {
		autoClose: 2000,
		closeOnClick: true,
		pauseOnHover: true,
	});
	const notifyCopy = () => toast.success(messages[1], {
		autoClose: 500,
		closeOnClick: true,
		pauseOnHover: true,
	});
	function generateUppercase() {
		const min = 65;
		const max = 90;
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		const randomLetter = String.fromCharCode(randomNum);
		return randomLetter;
	}

	function genereateLowercase() {
		const min = 97;
		const max = 122;
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		const randomLetter = String.fromCharCode(randomNum);
		return randomLetter;
	}

	function generateNum() {
		const min = 0;
		const max = 9;
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNum;
	}

	function getenerateSymbols() {
		const arrayNum = [45, 92, 95];
		const min = 0;
		const max = arrayNum.length - 1;
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		const randomSym = String.fromCharCode(arrayNum[randomNum]);
		return randomSym;
	}

	function handleChange(position) {
	   const updateCheck = checkOptions.map((item, i) => i === position ? !item : item);
	   setCheckOptions(updateCheck);
	}

	function copyPass() {
		navigator.clipboard.writeText(pass);
		notifyCopy();
	}

	const setPassLength = ({target}) => {
		let {value, min, max} = target;
		value = Math.max(Number(min), Math.min(Number(max), Number(value)));
		setLength(value);
	};

	function generatePassword() {
		let password = '';
		const arrayOpt = [];
		for (let i = 0; i < checkOptions.length; i++) {
			if (checkOptions[i]) {
				arrayOpt.push(i);
			}
		}

		if (arrayOpt.length === 0 || length === 0) {
			notifyError();
		}

		for (let i = 0; i < length; i++) {
			if (arrayOpt.length > 0) {
				const randomNum = arrayOpt[Math.floor(Math.random() * arrayOpt.length)];
		    	password += Object.keys(objOptions).map(key => objOptions[key])[randomNum]();
				console.log(randomNum);
			}
		}

		setPass(password);
		console.log(pass);
	}

	return (
		<div className={styles.generator}>
			<h1 className={styles.title}>Password generator</h1>
			<div className={styles.wrapper}>
				<ToastContainer />
				<InputResult value={pass} theme={theme} />
				<div className={styles.numOptions}>
					<p>pass length</p>
					<input type="number" onChange={setPassLength} value={length} min="0" step="1" max="12" />
				</div>
				<div className={styles.optionsWrap}>
					{options.map((option, i) => <CheckOption theme={theme} handle={handleChange} index={i} key={i} text={option} />)}
				</div>
				<div className={styles.btns}>
					<Button theme={theme} text="generate" handle={generatePassword} />
					<Button theme={theme} text="copy" handle={copyPass} />
				</div>
			</div>

		</div>
	);
}

Generator.propTypes = {
	theme: PropTypes.bool.isRequired,
};

export default Generator;
