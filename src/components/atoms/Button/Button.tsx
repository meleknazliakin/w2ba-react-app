import React, { FC, memo } from 'react';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';

import { IButtonProps } from './models';
import Styles from './style.module.scss';

const Button: FC<IButtonProps> = ({
	outline = false,
	text,
	type='button',
	justify,
	disabled = false,
	fullWidth = false,
	sm,
	md,
	lg,
	className = '',
	onClick
}) => {
	const classes = classNames(
		Styles.button,
		{
			[Styles.outline]: outline,
			[Styles.disabled]: disabled,
			[Styles.fullWidth]: fullWidth,
			[Styles.sm]: sm,
			[Styles.md]: md,
			[Styles.lg]: lg,
			[Styles.justifyCenter]: justify === 'center',
			[Styles.justifyFlexStart]: justify === 'flex-start',
			[Styles.justifyFlexEnd]: justify === 'flex-end',
		},
		className
	);

	return (
		<button className={classes} disabled={disabled} onClick={onClick} type={type}>{text}</button>
	);
};

export default memo(Button);
