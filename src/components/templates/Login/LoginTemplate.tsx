import React, { useState } from 'react';
import { useFormik } from 'formik';
import SVG from 'react-inlinesvg';

import { loginValidation } from './yup';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import useUserStore from '../../../store/userStore';
import Styles from './styles.module.scss';

const LoginTemplate = () => {
    const { login } = useUserStore();
    const [loading, setLoading] = useState<boolean>(false);


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidation,
        onSubmit: async (values) => {
            setLoading(true);
            login(values);
            setTimeout(() => {
                setLoading(false);
            }, 500);
            
            // setLoading(false);
        },
    });

    return (
        <form className={Styles.form} onSubmit={formik.handleSubmit}>
            <Input
                id="email"
                name="email"
                type="email"
                label="E-posta"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="E-posta adresiniz"
                error={formik.errors.email && formik.touched.email ? formik.errors.email : ''}
                fullWidth
                lg />

            <Input
                id="password"
                name="password"
                type="password"
                label="Şifre"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Şifreniz"
                error={formik.errors.password && formik.touched.password ? formik.errors.password : ''}
                fullWidth
                lg />

            <div className={Styles.buttonContainer}>
                <Button type="submit" disabled={loading} primary>
                    <div className={Styles.button}>
                        {
                            loading ?
                                <>
                                    <SVG src="/icons/spinner.svg" className={Styles.buttonIcon} width={24} />
                                    <span className={Styles.text}>Giriş Yapılıyor</span>
                                </>
                                : 'Giriş Yap'
                        }
                    </div>
                </Button>
            </div>
        </form>
    );
};
export default LoginTemplate;