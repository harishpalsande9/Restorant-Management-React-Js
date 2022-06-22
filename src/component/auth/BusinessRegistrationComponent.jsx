import { Row, Form, Col, Button, Container, Card } from "react-bootstrap";
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
function BusinessRegistrationComponent() {
  return (
    <Row>
      <Form className="">
        <Card body className="">
          <Row className="text-center my-2">
            <h5 className="leadtext-center">
              Register Your <br />
              <strong className=" text-primary">Hotel / Restaurant</strong>
            </h5>
          </Row>

          <Form.Control
            className=" form-control form-control-sm my-2"
            type="text"
            placeholder="Hotel Restaurant Name"
          />

          <Form.Control
            className=" form-control form-control-sm my-2"
            type="text"
            placeholder="Owner Name"
          />

          <Row className="">
            <Form.Group as={Col}>
              <Form.Control
                className="form-control form-control-sm my-2"
                type="Email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                className="form-control form-control-sm my-2"
                type="text"
                placeholder="Phone number"
              />
            </Form.Group>
          </Row>
          <Form.Group className="">
            <Form.Control
              className="form-control form-control-sm my-2"
              placeholder="address"
            />
          </Form.Group>

          <Row className="">
            <Form.Group as={Col}>
              <Form.Control
                className="form-control form-control-sm my-2"
                placeholder="City"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                className="form-control form-control-sm my-2"
                placeholder="State"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Control
                className="form-control form-control-sm my-2"
                placeholder="Zip"
              />
            </Form.Group>
          </Row>

          <Row className="">
            <Form.Group as={Col}>
              <Form.Control
                className="form-control form-control-sm my-2"
                type="text"
                placeholder="GST No"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                className="form-control form-control-sm my-2"
                type="text"
                placeholder="Website"
              />
            </Form.Group>
          </Row>

          <Form.Group className="">
            <Form.Control
              as="textarea"
              rows={3}
              className="form-control form-control-sm my-2"
              placeholder="Company description"
            />
          </Form.Group>
          <Row className="">
            <Form.Group as={Col}>
              <small>Business Logo</small>
              <Form.Control
                className="form-control form-control-sm my-2"
                type="file"
              />
            </Form.Group>
          </Row>
          <Row ClassName="text-center">
            <Link to="/OTP">
              <Button
                variant="outline-primary"
                size="sm"
                className="w-100"
                type="submit"
              >
                Register Business
              </Button>
            </Link>
          </Row>
        </Card>
      </Form>
    </Row>
  );
}
export default BusinessRegistrationComponent;
