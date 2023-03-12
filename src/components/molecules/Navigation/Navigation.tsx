import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Col xs={4}><Link to={'/'}>Dashboard</Link></Col>
      <Col xs={4}><Link to={'/money-transfer'}>Money Transfer</Link></Col>
      <Col xs={4}><Link to={'/balance'}>Balance</Link></Col>
    </>
  );
};

export default Navigation;