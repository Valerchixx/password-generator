import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/inputResult.module.css';

function InputResult({value, ref}) {
	return (
		<div className={styles.wrap}>
			<input type="text" ref={ref} value={value} readOnly className={styles.result} />
		</div>
	);
}

InputResult.propTypes = {
	value: PropTypes.string.isRequired,
	ref: PropTypes.bool.isRequired,
};
export default InputResult;

