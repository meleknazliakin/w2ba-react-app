import * as Yup from 'yup';

export const sendMoneyValidation = Yup.object().shape({
	iban: Yup
		.string()
		.min(26, 'IBAN must be 26 characters')
		.max(26, 'IBAN must be 26 characters')
		.matches(/^(TR)[0-9]{24}$/, 'Please enter a valid IBAN')
		.required('IBAN is mandatory'),
	
		currency: Yup
		.string(),

	amount: Yup
		.number()
		.required('Amount is mandatory'),
	note: Yup
		.string()
});