import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/checkOption.module.css';
import checkMark from '../svg/checkMark.svg';

function CheckOption({text, handle, index, theme}) {
	return (
		<div className={styles.wrap}>
			<div className={styles.text}>
				{text}
			</div>
			<label className={styles.customCheckbox}>
				<input type="checkbox" onChange={() => handle(index)} className={theme ? `${styles.hiddenCheckbox} ${styles.violet}` : styles.hiddenCheckbox} />
				<div className={styles.checkbox}>
					<img className={styles.mark} src={checkMark} alt="" />
				</div>
			</label>
		</div>
	);
}

CheckOption.propTypes = {
	text: PropTypes.string.isRequired,
	handle: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	theme: PropTypes.bool.isRequired,
};

export default CheckOption;
