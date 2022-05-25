/* eslint-disable no-unused-vars */

import React, {useState, useContext, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {getPasswords} from '../utils/passArray';
import {Context} from '../utils/context';
import {ToastContainer, toast} from 'react-toastify';
import mark from '../svg/mark.svg';
import bin from '../svg/bin.svg';
import styles from '../css/sidebar.module.css';

const SideBar = ({open, violet}) => {
	// Const passwords = JSON.parse(sessionStorage.getItem('passArr'));
	const {passArray} = useContext(Context);
	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);
	const [arr, setPass] = useState([]);
	const array = [];
	console.log('arrs', passArray);

	// Console.log('arrSide', items);

	// Const array = [];
	// for (let i = 0; i < pass.length; i++) {
	// 	if (pass[i]) {
	// 		array[i] = pass[i];
	// 	}
	// }

	const copy = index => {
		navigator.clipboard.writeText(array[index]);
		notifyCop();
	};

	const deletePass = (index, arr) => {
		const copyArr = [...arr.filter((item, i) => i !== index)];
		// SetPass(prevState => [...prevState.filter((item, i) => i !== index)]);
		sessionStorage.setItem('passArr', JSON.stringify(copyArr));
		window.location.reload();
	};

	const notifyCop = () => toast.success('copy!', {
		autoClose: 500,
		closeOnClick: true,
		pauseOnHover: true,
	});

	return (
		<div className={open ? styles.sidebar : `${styles.sidebar} ${styles.close}`}>
			<div className={violet ? `${styles.side} ${styles.violet}` : styles.side }>
				<ToastContainer />
				{passArray.map((item, i) => (
					<div key={i} className={styles.password}>
						<div>{item}</div>
						<div>
							<img src={mark} onClick={() => copy(i)} className={styles.mark} alt="" />
							<img src={bin} onClick={() => deletePass(i, passArray)} className={styles.bin} alt="" />
						</div>
					</div>
				))}

			</div>
		</div>
	);
};

SideBar.propTypes = {
	open: PropTypes.bool.isRequired,
	violet: PropTypes.bool.isRequired,
};
export default SideBar;
