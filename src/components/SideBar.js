
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {getPasswords, passArray} from '../utils/passArray';
import {ToastContainer, toast} from 'react-toastify';
import mark from '../svg/mark.svg';
import bin from '../svg/bin.svg';
import styles from '../css/sidebar.module.css';

const SideBar = ({open, violet}) => {
	// Const passwords = JSON.parse(sessionStorage.getItem('passArr'));
	const [arr, setPass] = useState(passArray(getPasswords('passArr')));
	const array = [];

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

	const deletePass = index => {
		setPass(prevState => [...prevState.filter((item, i) => i !== index)]);
		console.log(arr);
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
				{arr.map((item, i) => (
					<div key={i} className={styles.password}>
						<div>{item}</div>
						<div>
							<img src={mark} onClick={() => copy(i)} className={styles.mark} alt="" />
							<img src={bin} onClick={() => deletePass(i)} className={styles.bin} alt="" />
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
