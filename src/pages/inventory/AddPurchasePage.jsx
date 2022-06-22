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
function AddPurchasePage() {
  const [purchaseList, setPurchaseList] = useState([]);
  const [formFields, setFormFields] = useState({
    itemName: "",
    qtyPurchase: "",
    purchasePrice: "",
    sellingPrice: "",
    date: "",
    vendor: "",
  });

  const handleOnChange = (e) => {
    const p = { ...formFields };
    p[e.target.name] = e.target.value;
    setFormFields(p);
  };
  const addPurchase = (e) => {
    e.preventDefault();
    const data = [...purchaseList, formFields];
    setPurchaseList(data);
    console.log(purchaseList);
  };
  const handelDelete = (item, index) => {
    const arr = [...purchaseList];
    const id = arr.indexOf(item);
    arr.splice(id, 1);
    setPurchaseList(arr);
    console.log(arr);
  };

  const [isUpdate, setIsUpdate] = useState(false);

  const updateItemForm = (itemObj) => {
    setIsUpdate(true);
    setFormFields(itemObj);
  };
  const updateBankData = (e) => {
    e.preventDefault();
    console.log(formFields);
  };
  return (
    <>
      <Container>
        <PrimaryNav />
        <InventoryNav />
        <div className="divReverse row mt-2">
          <div className="col-md-6">
            <Card body className="border-1">
              <h3 className="text-center bg-light text-dark">Add Purchase</h3>
              <Form
                className="px-4 py-2"
                onSubmit={!isUpdate ? addPurchase : updateBankData}
              >
                <Row className="mb-3 ">
                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Item Name"
                    name="itemName"
                    onChange={handleOnChange}
                    value={formFields.itemName}
                  />

                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Qty Purchase"
                    name="qtyPurchase"
                    onChange={handleOnChange}
                    value={formFields.qtyPurchase}
                  />
                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Purchased Price"
                    name="purchasePrice"
                    onChange={handleOnChange}
                    value={formFields.purchasePrice}
                  />

                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Selling Price"
                    name="sellingPrice"
                    onChange={handleOnChange}
                    value={formFields.sellingPrice}
                  />

                  <Form.Control
                    className="mb-2"
                    type="Date"
                    size="sm"
                    name="date"
                    onChange={handleOnChange}
                    value={formFields.date}
                  />
                  <Form.Control
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="Vendor"
                    name="vendor"
                    onChange={handleOnChange}
                    value={formFields.vendor}
                  />
                </Row>
                {isUpdate && (
                  <Button
                    className=" mx-1"
                    variant="outline-primary"
                    type="submit"
                    size="sm"
                  >
                    Update Customer
                  </Button>
                )}
                {!isUpdate && (
                  <>
                    <Button
                      className=" mx-1 "
                      variant="primary"
                      type="submit"
                      size="sm"
                    >
                      Add Purchase
                    </Button>
                    <Button
                      variant="light"
                      className=" text-white mx-2"
                      size="sm"
                    >
                      Reset
                    </Button>
                  </>
                )}
              </Form>
            </Card>
          </div>

          <div className="col-md-6">
            <Table borderless hover className="table table-sm mb-3">
              <thead className=" border-bottom border-top">
                <tr className="text-sm">
                  <th>ID</th>
                  <th>Item Name </th>
                  <th>Quantity </th>
                  <th className="tabledisplay"> Date </th>
                  <th>Price </th>
                  <th>Price </th>
                  <th className="tabledisplay">Vendor </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {purchaseList.map((item, index) => (
                  <tr>
                    <td> {index + 1}</td>
                    <td>{item.itemName}</td>
                    <td>{item.qtyPurchase}</td>
                    <td>{item.date}</td>
                    <td>{item.purchasePrice}</td>
                    <td>{item.sellingPrice}</td>
                    <td>{item.vendor}</td>{" "}
                    <td>
                      <Pen
                        color="blue"
                        className="mx-1"
                        onClick={updateItemForm}
                      />
                      <Trash
                        color="red"
                        className="mx-1"
                        onClick={handelDelete}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddPurchasePage;
