import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BalanceCard from '../../molecules/Balance';
import LastTransfer from '../../molecules/LastTransfer';
import SavedTransfer from '../../molecules/SavedTransfer';

const DashboardTemplate = () => {
  return (
    <Container>
      <Row>
        <Col lg={7} xs={12}>
          <LastTransfer />
          <SavedTransfer />
        </Col>
        <Col className="d-flex justify-content-center" lg={5} xs={12}><BalanceCard viewBtn={true} /></Col>
      </Row>
    </Container>
  );
};

export default DashboardTemplate;