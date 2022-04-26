import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/button.module.css';

function Button({text, handle, theme}) {
	return (
		<button onClick={handle} className={ theme ? `${styles.btn} ${styles.violet}` : styles.btn}>{text}</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	handle: PropTypes.func.isRequired,
	theme: PropTypes.bool.isRequired,
};

export default Button;
