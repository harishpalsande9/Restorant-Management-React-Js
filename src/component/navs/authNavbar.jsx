import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Image } from "react-bootstrap";
import {
  Bell,
  BorderOuter,
  CardList,
  ClockHistory,
  Journal,
  People,
  PersonCircle,
  Sliders,
  Speedometer,
} from "react-bootstrap-icons";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AuthNavbar = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="menuBar mt-1 d-flex text-decoration-none justify-content-center">
          <Image src={logo} fluid width={120} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="menuBar mt-1 d-flex justify-content-center">
          <NavLink to="/LoginPage">
            <p className="font-weight-bold m-2 text-decoration-none text-primary bg-white">
              Login
            </p>
          </NavLink>
          <NavLink to="/">
            {" "}
            <p className="font-weight-bold m-2 text-decoration-none text-primary bg-white">
              Create Account
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
