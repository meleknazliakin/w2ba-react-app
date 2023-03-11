import React from 'react';
import { useFormik } from 'formik';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import BalanceCard from '../../molecules/Balance';
import { sendMoneyValidation } from './yup';
import Styles from './styles.module.scss';

const MoneyTransferTemplate = () => {
  const formik = useFormik({
    initialValues: {
      iban: '',
      amount: '',
      note: '',
    },
    validationSchema: sendMoneyValidation,
    onSubmit: async (values) => {
      console.log('onSubmit', values);
    },
  });
  return (
    <div className={Styles.MoneyTransferContainer}>
      <form className={Styles.form} onSubmit={formik.handleSubmit}>
        <Input
          id="iban"
          name="iban"
          type="iban"
          label="IBAN"
          value={formik.values.iban}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder=""
          error={formik.errors.iban && formik.touched.iban ? formik.errors.iban : ''}
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
          placeholder=""
          error={formik.errors.amount && formik.touched.amount ? formik.errors.amount : ''}
          fullWidth
          md />

        <Input
          id="note"
          name="note"
          type="textarea"
          label="Note"
          value={formik.values.note}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder=""
          error={formik.errors.note && formik.touched.note ? formik.errors.note : ''}
          fullWidth
          lg />
          <Button type="submit" primary>
            <div className={Styles.button}>
              Send Money
            </div>
          </Button>
      </form>
      <BalanceCard viewBtn={true} />
    </div>
  );
};

export default MoneyTransferTemplate;