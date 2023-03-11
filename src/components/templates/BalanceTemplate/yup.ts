import * as Yup from 'yup';

export const balanceValidation = Yup.object().shape({
	email: Yup
		.string()
		.email('Lütfen geçerli bir e-posta adresi giriniz.')
		.max(64, 'E-posta adresiniz 64 karakterden fazla olamaz.')
		.required('E-posta adresi zorunludur.'),
	password: Yup
		.string()
		.min(6, 'Şifreniz en az 6 karakterden oluşmalıdır')
		.required('Şifre zorunludur'),
});