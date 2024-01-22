import React from "react";
import solution from "../../styles/img/Steps-solution.png";
import value from "../../styles/img/Steps-value.png";
import Register from "../../styles/img/Steps-register.png";
import { Container } from "react-bootstrap";

const Steps = () => {
  // const [] = useState();

  return (
    <div>
      <Container>
        <div className="mt-2">
          <div className="step-container">
            <h5>Three minutes. Three Steps</h5>
          </div>
          <div className="step-container-heading">
            <h3>Everything should be this easy.</h3>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between ms-5 me-5">
      <div className="process-container col-12 col-md-4 mb-3">
        <img src={solution} alt="Solution.jpg"  height={90} />
        <div className="d-flex word-wrap steps-text">
          The Solution to your Real Estate problem.
        </div>
      </div>
      <div className="process-container col-12 col-md-4 mb-3">
        <img src={value} alt="Value.jpg" height={90} />
        <div className="d-flex word-wrap steps-text flex-column">
          Select a Quote.
          <p>
            Choose your quote and apply online. No paperwork, no application
            fees.
          </p>
        </div>
      </div>
      <div className="process-container col-12 col-md-4 mb-3">
        <img src={Register} alt="Register.jpg"  height={90} />
        <div className="d-flex word-wrap steps-text">
          The Solution to your Real Estate problem.
        </div>
      </div>
    </div>
      </Container>
    </div>
  );
};

export default Steps;
