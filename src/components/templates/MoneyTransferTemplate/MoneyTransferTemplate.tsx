import React from 'react';
import { useFormik } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import BalanceCard from '../../molecules/Balance';
import { sendMoneyValidation } from './yup';
import useBalanceStore from "../../../store/balanceStore";
import useLastTransfersStore from "../../../store/lastTransfersStore";
import Styles from './styles.module.scss';

const MoneyTransferTemplate = () => {
  const { amount } = useBalanceStore((state) => state);
  const { updateBalance } = useBalanceStore();
  const { addTransfer } = useLastTransfersStore();

  const currencies = [
    { value: 'TRY', label: 'TRY' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' }
  ];
  const formik = useFormik({
    initialValues: {
      iban: '',
      amount: '',
      note: '',
    },
    validationSchema: sendMoneyValidation,
    onSubmit: async (values: any) => {
      let newAmount = amount - values.amount;
      updateBalance({
        newAmount: newAmount
      });
      addTransfer({
        iban: values.iban,
        date: "Today",
        amount: values.amount,
        currency: "TRY"
      });
    },
  });
  return (
    <Container className={Styles.MoneyTransferContainer}>
      <Row>
        <Col lg={7} xs={12}>
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

            <Select
              id="currency"
              name="currency"
              options={currencies} />

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
        </Col>
        <Col lg={5} xs={12} className="d-flex justify-content-center"> <BalanceCard viewBtn={true} /></Col>
      </Row>
    </Container>
  );
};

export default MoneyTransferTemplate;