import { Row, Form, Col, Button, Container, Card } from "react-bootstrap";
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import AuthNavbar from "../navs/authNavbar";
function OTP() {
  return (
    <>
      <Container>
        <AuthNavbar />
        <Row>
          <Col className=" m-auto">
            <div className="row my-3">
              <h5 className="text-center">
                {" "}
                Enter Otp To Create Your Account{" "}
              </h5>
            </div>{" "}
            <Form className="w-50 border-2 m-auto  p-4">
              <Row className="my-3">
                <h3 className="text-center text-primary"> OTP Verification</h3>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  name="userId"
                />
              </Form.Group>

              <Form.Group className="mb-2 text-center w-100">
                <Link to="/LoginPage">
                  <Button
                    variant="outline-primary"
                    className="w-100"
                    type="submit"
                    size="sm"
                  >
                    Submit
                  </Button>
                </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OTP;
