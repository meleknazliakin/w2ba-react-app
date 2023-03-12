import React from 'react';
import { useFormik } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import BalanceCard from '../../molecules/Balance';
import { balanceValidation } from './yup';
import useBalanceStore from "../../../store/balanceStore";
import Styles from './styles.module.scss';

const BalanceTemplate = () => {
  const { amount } = useBalanceStore((state) => state);
  const { updateBalance } = useBalanceStore();

  const formik = useFormik({
    initialValues: {
      creditCardNumber: '',
      cvv: '',
      expireDate: '',
      amount: '',
    },
    validationSchema: balanceValidation,
    onSubmit: async (values: any) => {
      let newAmount = +amount + +values.amount;
      updateBalance({
        newAmount: newAmount
      });
    }
  });

  return (
    <Container className={Styles.BalanceContainer}>
      <Row>
        <Col lg={7} xs={12}>
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
            <Button type="submit" text='Load'/>
          </form>
        </Col>
        <Col lg={5} xs={12} className="d-flex justify-content-center"> <BalanceCard viewBtn={false} /></Col>
      </Row>
    </Container>
  );
};

export default BalanceTemplate;