/* eslint-disable no-unused-vars */

/* eslint-disable no-mixed-spaces-and-tabs */

import React, {useState, useRef} from 'react';
import styles from '../css/generator.module.css';
import InputResult from './InputResult';
import {options} from '../utils/options';
import Button from './Button';
import CheckOption from './CheckOption';

function Generator() {
	const [checkOptions, setCheckOptions] = useState(new Array(options.length).fill(false));
	const [pass, setPass] = useState('');
	const [length, setLength] = useState(4);
	const [objOptions] = useState(
		{uppercase: generateUppercase,
			lowercase: genereateLowercase,
			numbers: generateNum,
			symbols: getenerateSymbols});
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

		for (let i = 0; i < length; i++) {
			const randomNum = arrayOpt.length > 0 ? arrayOpt[Math.floor(Math.random() * arrayOpt.length)] : setPass('chose options');
		    password += Object.values(objOptions)[randomNum]();
			console.log(randomNum);
		}

		setPass(password);
		console.log(pass);
	}

	return (
		<div className={styles.generator}>
			<h1 className={styles.title}>Password generator</h1>
			<div className={styles.wrapper}>
				<InputResult value={pass} />
				<div className={styles.numOptions}>
					<p>pass length</p>
					<input type="number" onChange={setPassLength} value={length} defaultValue="4" min="0" step="1" max="12" />
				</div>
				<div className={styles.optionsWrap}>
					{options.map((option, i) => <CheckOption handle={handleChange} index={i} key={i} text={option} />)}
				</div>
				<div className={styles.btns}>
					<Button text="generate" handle={generatePassword} />
					<Button text="copy" handle={copyPass} />
				</div>
			</div>

		</div>
	);
}

export default Generator;
