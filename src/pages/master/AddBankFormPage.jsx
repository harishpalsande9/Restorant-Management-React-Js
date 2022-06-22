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
import PrimaryNav from "../../component/navs/primaryNav";
import MasterNav from "../../component/master/MasterNav";

import { Trash } from "react-bootstrap-icons";
import { Pen } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";
import { validate } from "joi-browser";
function AddBankFormPage() {
  const [bankList, setBankList] = useState([]);
  const [formFields, setFormFields] = useState({
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    IFSCCode: "",
    openingBalance: "",
  });
  const handleOnChange = (event) => {
    const p = { ...formFields };
    p[event.target.name] = event.target.value;
    setFormFields(p);
    //console.log(formFields);
  };
  const addTable = (e) => {
    e.preventDefault();
    const data = [...bankList, formFields];
    setBankList(data);
  };
  const handleDelete = (bank, index) => {
    const arr = [...bankList];
    const id = arr.indexOf(bank);
    arr.splice(id, 1);
    setBankList(arr);
    //const arr = bankList.filter((m) => m.index !== bankList.index);
    setBankList(arr);
    console.log(arr);
  };
  const reset = (e) => {
    console.log("hello");
    const arr = { ...formFields };
    arr.bankName = "";
    arr.accountNumber = "";
    arr.accountHolderName = "";
    arr.IFSCCode = "";
    arr.openingBalance = "";

    setFormFields(arr);
  };
  return (
    <Container>
      <PrimaryNav />
      <MasterNav />
      <div className="divReverse row mt-2">
        <Col>
          <Card body className="border-1">
            <h3 className="text-center bg-light text-dark"> Bank Account</h3>
            <Form className="px-4 py-2" onSubmit={addTable}>
              <div className="row">
                <Form.Control
                  placeholder="Bank Name"
                  value={formFields.bankName}
                  onChange={handleOnChange}
                  name="bankName"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  placeholder="Account Number"
                  value={formFields.accountNumber}
                  onChange={handleOnChange}
                  name="accountNumber"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  type="text"
                  placeholder="account holder name"
                  value={formFields.accountHolderName}
                  onChange={handleOnChange}
                  name="accountHolderName"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  type="text"
                  placeholder="IFSC code"
                  value={formFields.IFSCCode}
                  onChange={handleOnChange}
                  name="IFSCCode"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Opning Balance"
                  value={formFields.openingBalance}
                  onChange={handleOnChange}
                  name="openingBalance"
                  className="form-control form-control-sm mb-2"
                />{" "}
              </div>
              <div className=" text-center gap-2 mb-2">
                <Button
                  size="sm"
                  className=" mx-1"
                  variant="outline-primary"
                  type="submit"
                >
                  Add Bank
                </Button>
                <Button
                  size="sm"
                  className=" mx-1"
                  variant="outline-danger"
                  onClick={(e) => reset(e)}
                >
                  Reset
                </Button>
              </div>
            </Form>
          </Card>
        </Col>

        <Col>
          {" "}
          <Card body className=" border-0">
            <h3 className="text-center bg-light text-dark">
              Bank Account List
            </h3>
            <Table borderless hover className="table table-sm mb-3">
              <thead className=" border-bottom border-top">
                <tr className="text-sm">
                  <th>ID</th>
                  <th>Bank Name </th>
                  <th>Account Number </th>
                  <th className="tabledisplay">Amount </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {bankList.map((bank, index) => (
                  <tr key={(bank, index)}>
                    <td>{index + 1}</td>
                    <td>{bank.bankName}</td>
                    <td>{bank.accountNumber}</td>
                    <td>{bank.accountHolderName}</td>

                    <td>
                      <Eye className="mx-1" />
                      <Pen color="blue" className="mx-1" />
                      <Trash
                        color="red"
                        className="mx-1"
                        onClick={() => handleDelete(bank, index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </div>
    </Container>
  );
}

export default AddBankFormPage;
