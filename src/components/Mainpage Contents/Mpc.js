import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mpcHouse from '../../styles/img/mpchouse.png'
function Mpc() {
    return (
      <Container  className="mt-3 mpc-container rounded-4 container">
        <Row className="align-items-center justify-content-center">
          <Col xs={4} md={4} lg={6} xl={6}>
            <h3 className="m-0 p-1 motto-mpc">It's Yours.</h3>
          </Col>
          <Col xs={8} md={6} lg={6} xl={6} className="d-flex justify-content-end">
            <img src={mpcHouse} alt="Logo" className="" style={{width:"auto"}} />
          </Col>
        </Row>
      </Container>  
    );
  }

export default Mpc;
