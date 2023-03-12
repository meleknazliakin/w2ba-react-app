import React, { useState } from 'react';
import { useFormik } from 'formik';
import SVG from 'react-inlinesvg';

import { loginValidation } from './yup';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import useUserStore from '../../../store/userStore';
import useLastTransfersStore from '../../../store/lastTransfersStore';
import useSavedTransfersStore from '../../../store/savedTransfersStore';
import Styles from './styles.module.scss';

const LoginTemplate = () => {
    const { login } = useUserStore();
    const { user } = useUserStore((state) => state);
    const [loading, setLoading] = useState<boolean>(false);
    const { fillLastTransfersFromDb } = useLastTransfersStore();
    const { fillSavedTransfersFromDb } = useSavedTransfersStore();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidation,
        onSubmit: async (values) => {
            setLoading(true);
            login(values);

            fillLastTransfersFromDb(user.name);
            fillSavedTransfersFromDb(user.name);

            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    });

    return (
        <form className={Styles.form} onSubmit={formik.handleSubmit}>
            <Input
                id="email"
                name="email"
                type="email"
                label="E-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your email"
                error={formik.errors.email && formik.touched.email ? formik.errors.email : ''}
                fullWidth
                lg />

            <Input
                id="password"
                name="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your password"
                error={formik.errors.password && formik.touched.password ? formik.errors.password : ''}
                fullWidth
                lg />

            <Button type="submit" text="Sign in" disabled={loading} />
        </form>
    );
};
export default LoginTemplate;