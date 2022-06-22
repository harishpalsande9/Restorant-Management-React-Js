import {
  Row,
  Container,
  Table,
  Form,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import React, { useState } from "react";
import graph from "./../../graph.png";
import PrimaryNav from "../../component/navs/primaryNav";
import ReportNav from "../../component/reports/ReportNav";
import Col1 from "../../component/reports/Col1";
import Col2 from "../../component/reports/Col2";
function TransactionReportPage() {
  const [reportTable, setReportTable] = useState([
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "4500.00",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
  ]);
  return (
    <Container>
      <PrimaryNav />
      <ReportNav />
      <div className="row  mt-2">
        <div className="col-md-4">
          <Col1 />
        </div>
        <div className="col-md-8">
          <Col2 />
        </div>
      </div>
    </Container>
  );
}

export default TransactionReportPage;
