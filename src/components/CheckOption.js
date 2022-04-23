import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/checkOption.module.css';
import checkMark from '../svg/checkMark.svg';

function CheckOption({text, handle, index}) {
	return (
		<div className={styles.wrap}>
			<div className={styles.text}>
				{text}
			</div>
			<label className={styles.customCheckbox}>
				<input type="checkbox" onChange={() => handle(index)} className={styles.hiddenCheckbox} />
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
};

export default CheckOption;
