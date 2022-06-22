import React, { useState } from "react";
import {
  Row,
  Container,
  Table,
  Form,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import InventoryNav from "../../component/inventory/InventoryNav";
import PrimaryNav from "../../component/navs/primaryNav";
import { Trash } from "react-bootstrap-icons";
import { Pen } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";
function AddExpensesPage() {
  const [purchaseList, setPurchaseList] = useState([{ ItemName: "Petrol" }]);
  return (
    <>
      <Container>
        <PrimaryNav />
        <InventoryNav />
        <div className=" divReverse row mt-2">
          <div className="col-md-6">
            <Card body className="border-1">
              <h3 className="text-center bg-light text-dark">Add Expenses</h3>

              <Form className="px-4 py-2">
                <Row className="mb-3 ">
                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Reason For The Expense"
                  />

                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Amount Spent"
                  />

                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Date"
                  />

                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Spent By"
                  />

                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Paid In ?"
                  />
                  <div className="d-grid gap-2 mb-2">
                    <Button variant="outline-primary" size="sm">
                      Add Expense
                    </Button>
                  </div>
                </Row>
              </Form>
            </Card>
          </div>

          <div className="col-md-6">
            <Table borderless hover className="table table-sm mb-3">
              <thead className=" border-bottom border-top">
                <tr className="text-sm">
                  <th>ID</th>
                  <th>Title</th>
                  <th className="tabledisplay">Date</th>
                  <th>Reason</th>
                  <th className="tabledisplay">Spent By</th>
                  <th>Amount </th>
                  <th className="tabledisplay">Paid In</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddExpensesPage;
