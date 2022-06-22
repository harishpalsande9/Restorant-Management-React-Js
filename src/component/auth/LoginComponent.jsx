import { Row, Form, Col, Card, Button, Container } from "react-bootstrap";
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
function LoginComponent() {
  const [loginForm, setLoginForm] = useState({
    userId: "",
    password: "",
  });
  const [error, setError] = useState("");

  const validate = () => {
    return { username: " Reqired Username" };
  };
  const HandelOnChange = (event) => {
    const p = { ...loginForm };
    p[event.target.name] = event.target.value;
    setLoginForm(p);
    console.log(loginForm);
  };

  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   // const error = validate();
  //   // setError({ error });
  //   // if (error) return;
  //   //console.log(error);
  //   console.log("hello");
  // };
  function HandleSubmit(e) {
    e.preventDefault();
    console.log("hello");
  }
  return (
    <Row>
      <Form>
        <Card body className="">
          <Row className="">
            <h2 className="text-center  text-primary"> Login</h2>
          </Row>
          <Row className="">
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label> Enter Mobile Or Email </Form.Label>
              <Form.Control
                type="email"
                className="form-control-sm my-2"
                placeholder="Enter Mobile , email"
                onChange={HandelOnChange}
                value={loginForm.userId}
                name="userId"
              />
            </Form.Group>

            <Form.Group className="" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className="form-control-sm my-2"
                placeholder="Password"
                onChange={HandelOnChange}
                value={loginForm.password}
                name="password"
              />
              {/* <Form.Text className="text-muted">{loginForm.password}</Form.Text> */}
            </Form.Group>
            <Form.Group className="" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Form.Group className="mb-2 text-center w-100">
              <Link to="/Dashboard">
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="w-100"
                  type="submit"
                >
                  Login
                </Button>
              </Link>
            </Form.Group>
            <div className="text-center text-decoration">
              <small className="text-decoration bg-light text-underline text-dark">
                New Here ?
              </small>
            </div>
          </Row>
        </Card>
      </Form>
    </Row>
  );
}

export default LoginComponent;
