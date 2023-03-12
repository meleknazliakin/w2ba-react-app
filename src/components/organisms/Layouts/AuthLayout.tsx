import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IAthProps } from './models';
import Header from '../../molecules/Header/Header';
import Styles from './styles.module.scss';

const AuthLayout: FC<IAthProps> = ({
  children
}) => {
  return (
    <Container className={Styles.AuthContainer}>
      <Row><Header /></Row>
      <Row className={Styles.main}>
        {children}
      </Row>
    </Container>
  );
};

export default AuthLayout;