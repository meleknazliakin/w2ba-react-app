import * as Yup from 'yup';

export const sendMoneyValidation = Yup.object().shape({
	email: Yup
		.string()
		.email('Lütfen geçerli bir iban giriniz.')
		.max(64, 'E-posta adresiniz 64 karakterden fazla olamaz.')
		.required('Iban zorunludur.'),
	password: Yup
		.string()
		.min(6, 'Şifreniz en az 6 karakterden oluşmalıdır')
		.required('Şifre zorunludur'),
});