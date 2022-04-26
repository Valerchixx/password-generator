import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/inputResult.module.css';

function InputResult({value, theme}) {
	return (
		<div className={styles.wrap}>
			<input type="text" value={value} readOnly className={theme ? `${styles.result} ${styles.violet}` : styles.result} />
		</div>
	);
}

InputResult.propTypes = {
	value: PropTypes.string.isRequired,
	theme: PropTypes.bool.isRequired,
};
export default InputResult;

