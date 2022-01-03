import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DashboardSummary = () => {
  return (
    <Container>
      <Row>
        <Col  className="summary-col">
          <h5> Total Revenue</h5>
        </Col>
        <Col className="summary-col">
          <h5> Orders</h5>
        </Col>
        <Col className="summary-col">
          <h5> Sales</h5>
        </Col>
        <Col className="summary-col">
                  <Row>
                      <Col></Col>
                      <Col>
                          <h5> Employees</h5>
                          <h2 className="text-primary"> 1005</h2>
                      </Col>
          </Row>
                  <Row>
                      <b> In all department</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardSummary;
