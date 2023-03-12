import { ChangeEvent, FocusEvent } from 'react';

export type InputProps = {
	type?: string;
	label?: string;
	error?: string;
	placeholder?: string;
	value?: string;
	fullWidth?: boolean;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	id?: string;
	height?: number;
	className?: string;
	message?: string;
	sm?: boolean;
	lg?: boolean;
	md?: boolean;
	shadow?: boolean;
	autoFocus?: boolean;
	maxLength?: number;
	border?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (e: FocusEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
	onFocus?: (e: FocusEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
	onKeyDown?: () => void;
};
