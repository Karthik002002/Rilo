import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mpcHouse from '../../styles/img/mpchouse.png';


const Mpc = () => {
  useEffect(()=>{
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed'));
        const yPos = scrollTop * speed;
        const scaleFactor = yPos / window.innerHeight + 1.1 ; 

        element.style.transform = `scale(${scaleFactor})`;
        if (yPos > window.innerHeight) {
          element.style.visibility = 'hidden';
        } else {
          element.style.visibility = 'visible';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <Container className="mt-3 mpc-container rounded-4 container">
      <Row className="align-items-center justify-content-center">
        <Col xs={4} md={4} lg={6} xl={6}>
          <h3 className="m-0 p-1 motto-mpc parallax" data-speed="0.3">
            It's Yours.
          </h3>
        </Col>
        <Col xs={8} md={6} lg={6} xl={6} className="d-flex justify-content-end">
          <img
            src={mpcHouse}
            alt="Logo"
            className="parallax"
            style={{ width: 'auto' }}
            data-speed="-0.2"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Mpc;
