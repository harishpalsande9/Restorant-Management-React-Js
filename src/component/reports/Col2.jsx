import {
  Row,
  Form,
  Col,
  Button,
  Container,
  Card,
  Pagination,
  Table,
} from "react-bootstrap";
import React, { useState } from "react";

import { Trash } from "react-bootstrap-icons";
import { Pen } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";
function Col2() {
  const [reportTable, setReportTable] = useState([
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cash",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cash",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Online",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cheque",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cash",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cash",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cash",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cash",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cash",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
    {
      tableID: "1",
      tableDate: "12/05/2022",
      tablePaymentMode: "Cash",
      tableQty: "85",
      tableAmount: "500.00",
      tableTotal: "95000.00",
    },
  ]);
  return (
    <Card body className="border-1 p-2">
      <Row>
        <Table borderless hover className="table table-sm mb-2">
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
            {reportTable.map((a) => (
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
        <div className="text-center mt-2 border-top">
          <Pagination size="sm" className="justify-content-center mt-2">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </Row>
    </Card>
  );
}
export default Col2;
