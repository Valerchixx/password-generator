import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/switchThemes.module.css';

const SwitchThemes = ({isToggled, onToggle}) => (
	<label className={styles.switch}>
		<input type="checkbox" checked={isToggled} onChange={onToggle} className={styles.input} />
		<span className={styles.slider} />
	</label>
);

SwitchThemes.propTypes = {
	isToggled: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default SwitchThemes;
