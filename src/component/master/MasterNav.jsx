import { Row, Form, Col, Button, Container, Card } from "react-bootstrap";
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
function MasterNav() {
  return (
    <Container className="text-center mt-1 mb-1  border-bottom border-top bg-light">
      <Link to="/AddMenuFormPage" className="text-decoration-none ">
        <span className=" mx-2 text-dark cursor-pointer">
          <strong> Food Menu's </strong>
        </span>
      </Link>

      <Link to="/AddTableFormPage" className="text-decoration-none">
        <span className=" mx-2 text-dark cursor-pointer">
          <strong> Table</strong>
        </span>
      </Link>
      <Link to="/AddEmployeeFormPage" className="text-decoration-none">
        <span className=" mx-2 text-dark cursor-pointer">
          <strong> Employee</strong>
        </span>
      </Link>
      <Link to="/AddBankFormPage" className="text-decoration-none">
        <span className=" mx-2 text-dark cursor-pointer">
          <strong> Bank </strong>
        </span>
      </Link>
    </Container>
  );
}
export default MasterNav;
