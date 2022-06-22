import {
  Row,
  Form,
  Col,
  Button,
  Container,
  Card,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
function InventoryNav() {
  return (
    <Container className="text-center mt-1 mb-1  border-bottom border-top bg-light">
      <Link to="/AddPurchasePage" className="text-decoration-none">
        <span className=" mx-2 text-dark">
          <strong>Purchase</strong>
        </span>
      </Link>

      <Link to="/AddExpensesPage" className="text-decoration-none">
        <span className=" mx-2 text-dark">
          <strong>Expenses</strong>
        </span>
      </Link>
    </Container>
  );
}
export default InventoryNav;
