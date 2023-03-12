import React, { FC, KeyboardEvent, memo, useState } from 'react';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';

import { InputProps } from './models';
import Styles from './styles.module.scss';

const Input: FC<InputProps> = ({
	label,
	error,
	placeholder,
	type = 'text',
	value = '',
	fullWidth,
	disabled,
	required,
	name,
	id,
	className,
	message,
	autoFocus,
	maxLength,
	height,
	border,
	sm,
	lg,
	md,
	shadow,
	onChange,
	onBlur,
	onFocus,
	onKeyDown
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const classes = classNames(
		Styles.container,
		{
			[Styles.fullWidth]: fullWidth,
			[Styles.disabled]: disabled,
			[Styles.error]: error,
			[Styles.message]: message,
			[Styles.label]: label,
			[Styles.sm]: sm,
			[Styles.md]: md,
			[Styles.lg]: lg,
			[Styles.shadow]: shadow, 
			[Styles.borders]: border,       
		},
		className
	);

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>) => {
		if (onKeyDown && e.key === 'Enter') {
			onKeyDown();
		}
	};

	return (
		<label className={classes}>
			{
				label ? <div className={Styles.label}>{label}</div> : null
			}
			{
				type === 'textarea' ?
					<textarea
						id={id}
						name={name}
						value={value}
						onChange={onChange}
						onFocus={onFocus}
						onBlur={onBlur}
						required={required}
						className={classNames(Styles.input, Styles.textarea)}
						style={{ height: height }}
						placeholder={placeholder}
						disabled={disabled} />
					:
					<input
						id={id}
						autoFocus={autoFocus}
						name={name}
						value={value}
						onChange={onChange}
						onFocus={onFocus}
						onBlur={onBlur}
						required={required}
						maxLength={maxLength}
						className={Styles.input}
						onKeyDown={handleKeyDown}
						type={type === 'password' && showPassword ? 'text' : type}
						placeholder={placeholder}
						disabled={disabled} />
			}

			{
				error ? <div className={Styles.error}>{error}</div> : null
			}
			{
				message ? <div className={Styles.error}>{message}</div> : null
			}
			{
				type === 'password' ?
					<div className={Styles.password} onClick={() => setShowPassword(x => !x)}>
						<SVG src={showPassword ? '/icons/eye.svg' : '/icons/no-eye.svg'} />
					</div> : null
			}
			

		</label>
	);
};

export default memo(Input);
