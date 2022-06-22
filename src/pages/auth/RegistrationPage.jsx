import { Row, Form, Col, Button, Container } from "react-bootstrap";
import registration from "./../../registration.png";
import RegisterComponent from "../../component/auth/RegisterComponent";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import PrimaryNav from "../../component/navs/primaryNav";
import AuthNavbar from "../../component/navs/authNavbar";
import FooterNavbar from "../../component/navs/footer";
function RegisterPage() {
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
        <div className=" row mt-2 row-eq-height">
          <div className="col-md-6 ">
            <RegisterComponent
              registerForm={registerForm}
              HandelOnChange={HandelOnChange}
            />
          </div>
          <div className="col-md-6 mob-img">
            <img
              src={registration}
              width="100%"
              height="83%"
              alt="registration"
            />
          </div>
        </div>
        <FooterNavbar />
      </Container>
    </>
  );
}

export default RegisterPage;
