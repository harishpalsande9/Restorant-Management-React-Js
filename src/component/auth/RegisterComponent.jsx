import { Row, Form, Col, Button, Container, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
function RegisterComponent(registerForm, HandelOnChange) {
  return (
    <Row>
      <Form className="p-4">
        <Card body className="">
          <div className="my-2">
            <h1 className="text-center"> Register </h1>
          </div>
          <Row className="">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                className="form-control-sm my-2"
                // className="form-control-sm"
                type="text"
                placeholder="First Name "
                onChange={HandelOnChange}
                value={registerForm.firstName}
                name="firstName"
              />
              {/* <Form.Text className="text-muted">
              {registerForm.firstName}
            </Form.Text> */}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                className="form-control-sm my-2"
                type="text"
                placeholder="Last Name"
                onChange={HandelOnChange}
                value={registerForm.lastName}
                name="lastName"
              />
              {/* <Form.Text className="text-muted">
              {registerForm.lastName}
            </Form.Text> */}
            </Form.Group>
          </Row>
          <Row className="">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                className="form-control-sm my-2"
                type="text"
                placeholder="Mobile "
                onChange={HandelOnChange}
                value={registerForm.mobileNo}
                name="mobileNo"
              />
              {/* <Form.Text className="text-muted">
                {registerForm.mobileNo}
              </Form.Text> */}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                className="form-control-sm my-2"
                type="email"
                placeholder="Enter email"
                onChange={HandelOnChange}
                value={registerForm.emailId}
                name="emailId"
              />
              {/* <Form.Text className="text-muted">
                {registerForm.emailId}
              </Form.Text> */}
            </Form.Group>
          </Row>
          <Row className="">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                className="form-control-sm my-2"
                type="password"
                placeholder="Password"
                onChange={HandelOnChange}
                value={registerForm.password}
                name="password"
              />
              {/* <Form.Text className="text-muted">
                {registerForm.password}
              </Form.Text> */}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                className="form-control-sm my-2"
                type="password"
                placeholder=" Comfirm Password"
                onChange={HandelOnChange}
                value={registerForm.comfirmPassword}
                name="comfirmPassword"
              />{" "}
              <Form.Text className="text-muted">
                {registerForm.comfirmPassword}
              </Form.Text>
            </Form.Group>
          </Row>

          <Form.Group className="" id="formGridCheckbox">
            <Form.Check
              className="form-control-sm my-2"
              type="checkbox"
              label="Agree To The Terms & Conditions  "
              className=" form-control-sm"
            />
          </Form.Group>
          <hr />
          <Form.Group className=" text-center ">
            <Link to="/BusinessRegistrationPage">
              <Button
                variant="outline-primary"
                size="sm"
                className="w-100"
                type="submit"
              >
                Create Your Account
              </Button>
            </Link>
          </Form.Group>
          <div className="text-center text-decoration">
            <small className="text-decoration bg-light text-underline text-dark">
              Already have an account? Sign in
            </small>
          </div>
        </Card>
      </Form>
    </Row>
  );
}

export default RegisterComponent;
