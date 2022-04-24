import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/inputResult.module.css';

function InputResult({value}) {
	return (
		<div className={styles.wrap}>
			<input type="text" value={value} readOnly className={styles.result} />
		</div>
	);
}

InputResult.propTypes = {
	value: PropTypes.string.isRequired,
};
export default InputResult;

