import React from 'react';
import SVG from 'react-inlinesvg';
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import useUserStore from '../../../store/userStore';
import Button from '../../atoms/Button';
import Navigation from '../Navigation/Navigation';
import Styles from './style.module.scss';

export const Header = () => {
  const { logout } = useUserStore();
  const { user } = useUserStore((state) => state);
  const navigate = useNavigate();
  const logoutFunc = () => {
    logout();
    navigate("/");
  };

  return (
    <Container>
      <Row className={Styles.HeaderContainerDesktop} >
        <Col md={3} className={Styles.logo}>
          <img src='w2ba.png' />
        </Col>

        <Col md={6} className={Styles.navigationContainer}>
          <Row><Navigation /></Row>
        </Col>

        <Col md={3} className={Styles.userInfo}>
          <div className={Styles.user}>
            <SVG src="/icons/user-duble.svg" width={20} />
            {user.name}</div>
          <Button sm onClick={() => logoutFunc()} text='Logout' />
        </Col>
      </Row>

      <Row className={Styles.HeaderContainerMobile} >
        <Container>
          <Row className="align-items-center">
            <Col xs={6} className={Styles.logo}>
              <img src='w2ba.png' />
            </Col>
            <Col xs={6} className={Styles.userInfo}>
              <div className={Styles.user}>
                <SVG src="/icons/user-duble.svg" width={20} />
                {user.name}</div>
              <Button sm onClick={() => logoutFunc()} text='Logout' />
            </Col>
          </Row>

          <Row className={Styles.navigationContainer}>
            <Navigation />
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Header;
