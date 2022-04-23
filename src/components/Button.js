import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/button.module.css';

function Button({text, handle}) {
	return (
		<button onClick={handle} className={styles.btn}>{text}</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	handle: PropTypes.func.isRequired,
};

export default Button;
