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
function AddEmployeePage() {
  const [showImage, setShowImage] = useState(false);
  const keys = ["Shift", "E"];

  const [empList, setEmpList] = useState([]);
  const [formFields, setFormFields] = useState({
    firstName: "",
    midelName: "",
    lastName: "",
    mobile: "",
    email: "",
    employeeType: "",
    adharNo: "",
    joiningDate: "",
    salaryDate: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const handleOnChange = (event) => {
    const p = { ...formFields };
    p[event.target.name] = event.target.value;
    setFormFields(p);
    //console.log(formFields);
  };
  const addTable = (e) => {
    e.preventDefault();
    const data = [...empList, formFields];
    setEmpList(data);
  };
  const handleDelete = (emp, index) => {
    //console.log(table, index);
    const arr = [...empList];
    const id = arr.indexOf(emp);
    arr.splice(id, 1);
    setEmpList(arr);
  };
  const reset = (e) => {
    console.log("hello");
    const arr = { ...formFields };
    arr.firstName = "";
    arr.midelName = "";
    arr.lastName = "";
    arr.mobile = "";
    arr.email = "";
    arr.employeeType = "";
    arr.adharNo = "";
    arr.joiningDate = "";
    arr.salaryDate = "";
    arr.address = "";
    arr.city = "";
    arr.state = "";
    arr.zip = "";
    setFormFields(arr);
  };
  return (
    <Container>
      <PrimaryNav />
      <MasterNav />
      <div className=" divReverse row mt-2">
        <div className="col-md-6">
          <Card body className="border-1">
            <h3 className="text-center bg-light text-dark">Add Employee</h3>
            <Form className="px-4 py-2" onSubmit={addTable}>
              <div className=" row mb-1">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  size="sm"
                  value={formFields.firstName}
                  onChange={handleOnChange}
                  name="firstName"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Midel Name"
                  size="sm"
                  value={formFields.midelName}
                  onChange={handleOnChange}
                  name="midelName"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  size="sm"
                  value={formFields.lastName}
                  onChange={handleOnChange}
                  name="lastName"
                  className="form-control form-control-sm mb-2"
                />
                <Col className="Col-4 m-0 p-0 mx-1">
                  <Form.Control
                    type="text"
                    placeholder="Mobile"
                    size="sm"
                    value={formFields.mobile}
                    onChange={handleOnChange}
                    name="mobile"
                    className="form-control form-control-sm mb-2"
                  />
                </Col>
                <Col className="Col-4 m-0 p-0 ">
                  <Form.Control
                    type="Email"
                    placeholder="Email ID"
                    size="sm"
                    value={formFields.email}
                    onChange={handleOnChange}
                    name="email"
                    className="form-control form-control-sm mb-2"
                  />
                </Col>

                <Form.Control
                  type="text"
                  placeholder="Employee Type"
                  size="sm"
                  value={formFields.employeeType}
                  onChange={handleOnChange}
                  name="employeeType"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Adhar No"
                  size="sm"
                  value={formFields.adharNo}
                  onChange={handleOnChange}
                  name="adharNo"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  type="Date"
                  size="sm"
                  value={formFields.joiningDate}
                  onChange={handleOnChange}
                  name="joiningDate"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  type="Date"
                  size="sm"
                  value={formFields.salaryDate}
                  onChange={handleOnChange}
                  name="salaryDate"
                  className="form-control form-control-sm mb-2"
                />
                <Form.Control
                  placeholder="Address"
                  size="sm"
                  value={formFields.address}
                  onChange={handleOnChange}
                  name="address"
                  className="form-control form-control-sm mb-2"
                />

                <Col className="Col-4 m-0 p-0 ">
                  <Form.Control
                    placeholder="City"
                    size="sm"
                    value={formFields.city}
                    onChange={handleOnChange}
                    name="city"
                    className="w-100 form-control form-control-sm mb-2"
                  />
                </Col>
                <Col className="Col-4 m-0 p-0 mx-1">
                  <Form.Control
                    placeholder="State"
                    size="sm"
                    value={formFields.state}
                    onChange={handleOnChange}
                    name="state"
                    className="form-control form-control-sm mb-2"
                  />
                </Col>
                <Col className="Col-4 m-0 p-0 ">
                  <Form.Control
                    size="sm"
                    placeholder="Zip"
                    value={formFields.zip}
                    onChange={handleOnChange}
                    name="zip"
                    className="form-control form-control-sm mb-2"
                  />
                </Col>
              </div>
              <div className=" text-center gap-2 ">
                <Button
                  size="sm"
                  className=" mx-1"
                  variant="outline-primary"
                  type="submit"
                >
                  Add Employee
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
        </div>
        <div className="col-md-6">
          <Card body className=" border-0">
            <h3 className="text-center bg-light text-dark"> Employee List</h3>
            <Table borderless hover className="table table-sm mb-3">
              <thead className=" border-bottom border-top">
                <tr className="text-sm">
                  <th>ID</th>
                  <th>Name</th>
                  <th> Mobile</th>
                  <th className="tabledisplay"> Emp Type</th>
                  <th className="tabledisplay"> Salary Date</th>
                  <th className="tabledisplay"> City</th>
                  <th> Action</th>
                </tr>
              </thead>
              <tbody>
                {empList.map((emp, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {emp.firstName} {emp.lastName}
                    </td>
                    <td> {emp.mobile}</td>
                    <td className="tabledisplay"> {emp.employeeType}</td>
                    <td className="tabledisplay"> {emp.salaryDate}</td>
                    <td className="tabledisplay"> {emp.city}</td>

                    <td>
                      <Eye className="mx-1" />
                      <Pen color="blue" className="mx-1" />
                      <Trash
                        color="red"
                        className="mx-1"
                        onClick={() => handleDelete(emp, index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default AddEmployeePage;
