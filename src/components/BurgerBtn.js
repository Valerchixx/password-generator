import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/burgerBtn.module.css';
const BurgerBtn = ({setOpen, open}) => (
	<div className={styles.burger} onClick={() => setOpen(!open)}>
		<span className={styles.burgerItem}></span>
	</div>
);
BurgerBtn.propTypes = {
	setOpen: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};
export default BurgerBtn;
