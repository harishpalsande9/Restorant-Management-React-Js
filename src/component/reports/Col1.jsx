import { Row, Form, Col, Button, Container, Card } from "react-bootstrap";
import React, { useState } from "react";

import graph from "./../../graph.png";
import { Link, NavLink } from "react-router-dom";
function Col1() {
  return (
    <Card body className="border-1 p-2">
      <Row className=" bg-light text-center text-dark ">
        <h3>Transaction Report</h3>
      </Row>
      <br />
      <Row>
        <img src={graph} alt="graph" />
      </Row>
      <Col className=" ">
        <Row>
          <Card className="text-center  bg-primary ">
            <Card.Title className=" text-white">Total Transaction</Card.Title>
            <h3 className=" text-white"> 15,550</h3>
          </Card>
        </Row>
      </Col>
    </Card>
  );
}
export default Col1;
