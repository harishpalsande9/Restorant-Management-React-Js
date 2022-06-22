import {
  Row,
  Container,
  Table,
  Form,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { Pen } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";
import React, { useState } from "react";
import graph from "./../../graph.png";
import PrimaryNav from "../../component/navs/primaryNav";
import ReportNav from "../../component/reports/ReportNav";
function PurchaseReportPage() {
  const [purchaseReportList, setPurchaseReportList] = useState([
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "4500.00",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "2",
      tableDate: "12/05/2022",
      tablePaymentMode: "4500.00",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "3",
      tableDate: "12/05/2022",
      tablePaymentMode: "4500.00",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "4",
      tableDate: "12/05/2022",
      tablePaymentMode: "4500.00",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
  ]);
  return (
    <>
      <Container>
        <PrimaryNav />
        <ReportNav />
        <div className=" row  mt-2">
          <div className="col-md-4 mb-2">
            <Card body className="border-1 p-2">
              <div className=" row text-center bg-light ">
                <h3>Purchase Report</h3>
              </div>
              <br />
              <div className="row">
                <img src={graph} alt="graph" />
              </div>
              <div className="col-md-12 ">
                <div className="row">
                  <Card className="text-center  bg-primary ">
                    <Card.Title className=" text-white">
                      Total Purchases This Month
                    </Card.Title>
                    <h3 className=" text-white"> 15,550</h3>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-8">
            <Card body className="border-1 p-2">
              <Row className="mb-2">
                <Row>
                  <Col>
                    <strong className="text-dark bg-light">
                      List Of Purchases
                    </strong>
                  </Col>

                  <Col>
                    <Form.Control
                      className="form-control form-control-sm"
                      type="date"
                      placeholder="Enter"
                    />
                  </Col>

                  <Col className="col">
                    <Button
                      className="mx-1 float-end"
                      variant="light"
                      size="sm"
                    >
                      Print
                    </Button>
                    <Button
                      className="mx-1 float-end"
                      variant="light"
                      size="sm"
                    >
                      Export
                    </Button>
                  </Col>
                </Row>
                <Table borderless hover className="table table-sm mt-2 mb-2">
                  <thead className=" border-bottom border-top bg-light">
                    <tr>
                      <th>ID</th>
                      <th>Date </th>
                      <th className="tabledisplay">Payment Mode</th>
                      <th>Qty</th>
                      <th className="tabledisplay"> Amount</th>
                      <th> Total</th>
                      <th>Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseReportList.map((a) => (
                      <tr>
                        <td> {a.tableID}</td>
                        <td> {a.tableDate}</td>
                        <td className="tabledisplay"> {a.tablePaymentMode}</td>
                        <td> {a.tableQty}</td>
                        <td className="tabledisplay">{a.tableAmount} </td>
                        <td> {a.tableTotal}</td>
                        <td>
                          <Eye className="mx-1" />
                          <Pen className="mx-1" />
                          <Trash color="red" className="mx-1" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default PurchaseReportPage;
