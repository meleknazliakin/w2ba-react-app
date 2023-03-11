import React from 'react';
import { useFormik } from 'formik';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import BalanceCard from '../../molecules/Balance';
import { balanceValidation } from './yup';
import Styles from './styles.module.scss';

const BalanceTemplate = () => {
  const formik = useFormik({
    initialValues: {
      creditCardNumber: '',
      cvv: '',
      expireDate: '',
      amount: '',
    },
    validationSchema: balanceValidation,
    onSubmit: async (values) => {
      console.log('onSubmit', values);
    },
  });

  return (
    <div className={Styles.BalanceContainer}>
      <form className={Styles.form} onSubmit={formik.handleSubmit}>
        <Input
          id="creditCard"
          name="creditCard"
          type="creditCard"
          label="Credit Card"
          value={formik.values.creditCardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Credit Card"
          error={formik.errors.creditCardNumber && formik.touched.creditCardNumber ? formik.errors.creditCardNumber : ''}
          fullWidth
          md />

        <Input
          id="expireDate"
          name="expireDate"
          type="expireDate"
          label="Expire Date"
          value={formik.values.expireDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Expire Date"
          error={formik.errors.expireDate && formik.touched.expireDate ? formik.errors.expireDate : ''}
          fullWidth
          md />
        <Input
          id="cvv"
          name="cvv"
          type="cvv"
          label="Cvv"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="CVV"
          error={formik.errors.cvv && formik.touched.cvv ? formik.errors.cvv : ''}
          fullWidth
          md />

        <Input
          id="amount"
          name="amount"
          type="amount"
          label="Amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Amount"
          error={formik.errors.amount && formik.touched.amount ? formik.errors.amount : ''}
          fullWidth
          md />
          <Button type="submit" primary>
            <div className={Styles.button}>
              Load
            </div>
          </Button>
      </form>
      <BalanceCard viewBtn={false} />
    </div>
  );
};

export default BalanceTemplate;