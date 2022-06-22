import { Row, Form, Col, Button, Container } from "react-bootstrap";
import registration from "./../../registration.png";
import BusinessRegistrationComponent from "../../component/auth/BusinessRegistrationComponent";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import AuthNavbar from "../../component/navs/authNavbar";
import FooterNavbar from "../../component/navs/footer";
function BusinessRegistrationPage() {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    emailId: "",
    password: "",
    comfirmPassword: "",
    type: "",
    city: "",
    state: "",
    zip: "",
    conditions: "",
  });

  const HandelOnChange = (event) => {
    const p = { ...registerForm };
    p[event.target.name] = event.target.value;
    setRegisterForm(p);
    console.log(registerForm);
  };

  return (
    <>
      <Container>
        <AuthNavbar />
        <Row className="mt-2 row-eq-height">
          <Col className="col-md-6 h-100">
            <BusinessRegistrationComponent />
          </Col>
          <Col className="col-md-6 mob-img">
            <img src={registration} width="100%" alt="registration" />
          </Col>
        </Row>
        <FooterNavbar />
      </Container>
    </>
  );
}

export default BusinessRegistrationPage;
