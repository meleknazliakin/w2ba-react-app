import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
	email: Yup
		.string()
		.email('PLease enter a valid email')
		.max(64, 'Your e-mail address cannot exceed 64 characters')
		.required('Email is mandatory'),
	password: Yup
		.string()
		.min(6, 'Your password must be at least 6 characters')
		.required('Password is mandatory'),
});