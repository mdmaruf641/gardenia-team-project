import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  faPlus,
  faMinus,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const DashboardSummary = () => {
  return (
    <Container>
      <Row>
        <Col className="summary-col">
          <Row>
                      <Col className="text-center ali">
                            <FontAwesomeIcon
                  className="fs-1 text-center"
                  style={{ color: "#eb0f5d" }}
                  icon={faEnvelope}
                />
            </Col>
            <Col>
              <h5>Revenue</h5>
              <h2 className="text-primary"> $9895</h2>
            </Col>
          </Row>
          <Row>
            <p> In all department</p>
          </Row>
        </Col>
        <Col className="summary-col">
          <Row>
            <Col></Col>
            <Col>
              <h5> Orders</h5>
              <h2 className="text-primary"> 3580</h2>
            </Col>
          </Row>
          <Row>
            <p> In all department</p>
          </Row>
        </Col>
        <Col className="summary-col">
          <Row>
            <Col></Col>
            <Col>
              <h5> Sales</h5>
              <h2 className="text-warning"> 4576</h2>
            </Col>
          </Row>
          <Row>
            <p> In all department</p>
          </Row>
        </Col>
        <Col className="summary-col">
          <Row>
            <Col></Col>
            <Col>
              <h5> Employees</h5>
              <h2 className="text-primary"> 1755</h2>
            </Col>
          </Row>
          <Row>
            <p> In all department</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardSummary;