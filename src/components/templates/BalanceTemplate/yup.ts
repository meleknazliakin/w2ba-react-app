import * as Yup from 'yup';

export const balanceValidation = Yup.object().shape({
	creditCardNumber: Yup
		.number()
		.min(2, 'Min 2')
		.required('E-posta adresi zorunludur.'),
	cvv: Yup
		.number()
		.min(3, 'Şifreniz en az 6 karakterden oluşmalıdır')
		.required('Şifre zorunludur'),
	expireDate: Yup
		.string()
		.min(1, 'Şifreniz en az 6 karakterden oluşmalıdır')
		.required('Şifre zorunludur'),
	amount: Yup
		.number()
		.min(1, 'Şifreniz en az 6 karakterden oluşmalıdır')
		.required('Şifre zorunludur'),
});