import * as Yup from 'yup';

export const sendMoneyValidation = Yup.object().shape({
	iban: Yup
		.string()
		.min(4, 'IBAN 4 karakterden az olamaz.')
		.max(26, 'IBAN 26 karakterden fazla olamaz.')
		.required('Iban zorunludur.'),
	amount: Yup
		.number()
		.required('Amount zorunludur'),
	note: Yup
		.string()
});