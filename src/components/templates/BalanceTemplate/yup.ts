import * as Yup from 'yup';

export const balanceValidation = Yup.object().shape({
	creditCardNumber: Yup
		.number()
		.min(16, 'Credit card number must be 16 digits')
		.max(16, 'Credit card number must be 16 digits')
		.required('Credit card number is mandatory'),
	cvv: Yup
		.number()
		.min(3, 'CVV must be 3 digits')
		.max(3, 'CVV must be 3 digits')
		.required('CVV is mandatory'),
	expireDate: Yup
		.string()
		.min(5, 'You should write expire date for example 05/25')
		.min(5, 'You should write expire date for example 05/25')
		.required('Expire date is mandatory'),
	amount: Yup
		.number()
		.required('Amount is mandatory'),
});