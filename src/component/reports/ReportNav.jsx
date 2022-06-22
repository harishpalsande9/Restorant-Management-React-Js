import { Row, Form, Col, Button, Container, Card } from "react-bootstrap";
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
function ReportNav() {
  return (
    <Container className="text-center mt-1 mb-1  border-bottom border-top bg-light">
      <Link to="/TransactionReportPage" className="text-decoration-none">
        <span className=" mx-2 text-dark">
          <strong>Transactions</strong>
        </span>
      </Link>

      <Link to="/PurchaseReportPage" className="text-decoration-none">
        <span className=" mx-2 text-dark">
          <strong>Purchase</strong>
        </span>
      </Link>

      <Link to="/PurchaseReportPage" className="text-decoration-none">
        <span className=" mx-2 text-dark">
          <strong>Sales</strong>
        </span>
      </Link>
    </Container>
  );
}
export default ReportNav;
