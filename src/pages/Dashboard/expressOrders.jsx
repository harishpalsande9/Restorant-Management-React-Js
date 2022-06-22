import React, { useState, useEffect } from "react";

import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Card,
  H1,
  Nav,
  Image,
  Div,
  Span,
  ListGroup,
  ListGroupItem,
  Table,
  Badge,
  FloatingLabel,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Activity,
  Archive,
  ArrowReturnLeft,
  Bell,
  Bookmark,
  BookmarkFill,
  BorderOuter,
  CardList,
  ClockHistory,
  EraserFill,
  Journal,
  Pencil,
  People,
  PersonCircle,
  ReceiptCutoff,
  Sliders,
  Speedometer,
} from "react-bootstrap-icons";

import PrimaryNav from "../../component/navs/primaryNav";

function ExpressOrders() {
  const [showOrders, setShowOrders] = useState(true);
  const handleShow1 = () => {
    setShowOrders(true);
    setShowMenu(false);
    setShowCustomer(false);
  };

  const editOrders = (order) => {
    setShowOrders(false);
    setBookingId(order);
    setShowMenu(true);
    setShowCustomer(false);
  };

  const [showMenu, setShowMenu] = useState(false);

  const [ordersFor, setOrdersFor] = useState({
    101: {
      customerName: "Naved Naik",
      mobile: "",
      email: "",
      source: "",
      subTotal: "",
      grandTotal: "",
      foodOrdered: [],
    },
    102: {
      customerName: "Moin Shaikh",
      mobile: "",
      email: "",
      source: "",
      subTotal: "",
      grandTotal: "",
      foodOrdered: [],
    },
    103: {
      customerName: "Furqan B",
      mobile: "",
      email: "",
      source: "",
      subTotal: "",
      grandTotal: "",
      foodOrdered: [],
    },
  });

  const [foodList, setFoodList] = useState([
    {
      foodName: "Chicken 65",
      qty: 1,
      price: 300,
      category: "nonVeg",
      subTotal: 300,
      status: "selected",
    },
    {
      foodName: "Chicken Biryani",
      qty: 1,
      price: 450,
      category: "nonVeg",
      subTotal: 450,
      status: "selected",
    },
    {
      foodName: "Pulav",
      qty: 1,
      price: 200,
      category: "nonVeg",
      subTotal: 200,
      status: "selected",
    },
    {
      foodName: "Tandoor",
      qty: 1,
      price: 550,
      category: "nonVeg",
      subTotal: 550,
      status: "selected",
    },
    {
      foodName: "Butter Rotu",
      qty: 1,
      price: 20,
      category: "veg",
      subTotal: 20,
      status: "selected",
    },
    {
      foodName: "Gulab Jam",
      qty: 1,
      price: 100,
      category: "desert",
      subTotal: 100,
      status: "selected",
    },
    {
      foodName: "Coke",
      qty: 1,
      price: 75,
      category: "nonVeg",
      subTotal: 75,
      status: "selected",
    },
    {
      foodName: "Beer",
      qty: 1,
      price: 60,
      category: "liquor",
      subTotal: 60,
      status: "selected",
    },
  ]);

  const currentOrders = (food, index) => {
    const arr = { ...ordersFor };

    const condition = (element) => element.foodName === food.foodName;
    let conditionValue = arr[bookingId].foodOrdered.findIndex(condition);
    if (conditionValue > -1) {
      if (arr[bookingId].foodOrdered[conditionValue].status === "selected") {
        console.log("Increment Counter QTY");
        arr[bookingId].foodOrdered[conditionValue].qty++;

        let a =
          arr[bookingId].foodOrdered[conditionValue].qty *
          foodList[index].price;
        arr[bookingId].foodOrdered[conditionValue].subTotal = a;

        let total = arr[bookingId].foodOrdered.reduce((acc, curr) => {
          return acc + curr.qty * curr.price;
        }, 0);

        arr[bookingId].foodOrdered[conditionValue].status = "selected";
        arr[bookingId].grandTotal = total;
        arr[bookingId].subTotal = total;
        setOrdersFor(arr);
      } else if (
        arr[bookingId].foodOrdered[conditionValue].status === "ordered"
      ) {
        console.log("Create New PUSH");
        console.log(arr[bookingId].foodOrdered[conditionValue]);

        const selectedFood = { ...food };
        selectedFood.qty = 1;
        let a = selectedFood.qty * selectedFood.price;
        selectedFood.subTotal = a;
        selectedFood.status = "selected";
        arr[bookingId].foodOrdered.push(selectedFood);
        let count = arr[bookingId].foodOrdered.length;
        setOrderCount(count);
        let total = arr[bookingId].foodOrdered.reduce((acc, curr) => {
          return acc + curr.qty * curr.price;
        }, 0);

        arr[bookingId].grandTotal = total;
        arr[bookingId].subTotal = total;
        setOrdersFor(arr);
      }
    } else {
      console.log("Add Fresh");
      arr[bookingId].foodOrdered.push(food);

      let count = arr[bookingId].foodOrdered.length;
      setOrderCount(count);
      let total = arr[bookingId].foodOrdered.reduce((acc, curr) => {
        return acc + curr.qty * curr.price;
      }, 0);

      arr[bookingId].grandTotal = total;
      arr[bookingId].subTotal = total;
      setOrdersFor(arr);
    }
  };

  const [currentTable, setCurrentTable] = useState("");
  let [tableIndex, setTableIndex] = useState("0");
  let [foodIndex, setFoodIndex] = useState("");
  const [showFoodTable, setShowFoodTable] = useState(false);

  let [grandTotal, setGrandTotal] = useState("");

  let [orderTotal, setOrderTotal] = useState("");
  let [orderCount, setOrderCount] = useState("");
  let [discount, setDiscount] = useState("");
  let [discountedAmount, setDiscountedAmount] = useState("");

  let [tax, setTax] = useState("");
  let [taxAmount, setTaxAmount] = useState("");

  let [bookingId, setBookingId] = useState(103);

  const handleOrderCount = () => {
    let orderId = bookingId;
    orderId++;
    setShowMenu(true);
    const arr = { ...ordersFor };
    arr[orderId] = orderId;
    arr[orderId] = {
      customerName: "",
      mobile: "",
      email: "",
      source: "",
      subTotal: "",
      foodOrdered: [],
    };
    setBookingId(orderId);
    setShowCustomer(false);
    setOrdersFor(arr);
  };

  const [showCustomer, setShowCustomer] = useState(false);
  const addCustomer = (orderId) => {
    setShowCustomer(true);
    setBookingId(orderId);
  };

  const addCustomer1 = () => {
    setShowCustomer(true);
  };

  const handleDiscount = (e) => {
    const arr = { ...ordersFor };
    setDiscount(e.target.value);
    let a = arr[bookingId].grandTotal * (e.target.value / 100);
    setDiscountedAmount(a.toFixed(2));
    arr[bookingId].grandTotal = (
      arr[bookingId].grandTotal +
      taxAmount -
      a
    ).toFixed(2);
  };

  const handleTax = (e) => {
    const arr = { ...ordersFor };
    setTax(e.target.value);
    let a = arr[bookingId].grandTotal * (e.target.value / 100);
    setTaxAmount(a.toFixed(2));
    arr[bookingId].grandTotal = (
      arr[bookingId].grandTotal +
      a -
      discountedAmount
    ).toFixed(2);
  };

  return (
    <>
      <Container>
        <PrimaryNav />

        <div className="divReverse row mt-2 ">
          <div className="col-md-6 ">
            <Card body className="sameHeight">
              <>
                <div className="row mb-2 ">
                  <div className="col-md-6">
                    <span>
                      Express Orders{" "}
                      <strong className="text-primary">{bookingId}</strong>{" "}
                    </span>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="btn-group float-end"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button
                        variant="outline-primary"
                        onClick={handleShow1}
                        className="float-end"
                        size="sm"
                      >
                        Return To Orders
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleOrderCount}
                        className="float-end"
                        size="sm"
                      >
                        New Express Order
                      </Button>
                    </div>
                  </div>
                </div>

                {showCustomer && (
                  <Card body>
                    <span>Enter Customer Details</span>
                    <Form>
                      <div className=" row g-2 mt-2">
                        <div className="col-md-6">
                          <Form.Control
                            className="form-control form-control-sm"
                            type="email"
                            placeholder="Customer Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <FormControl
                            className="form-control form-control-sm"
                            list="datalistOptions"
                            id="exampleDataList"
                            placeholder="Select Source"
                          />
                          <datalist id="datalistOptions">
                            <option value="Walkin" />
                          </datalist>
                        </div>
                      </div>

                      <div className=" row g-2 mt-2">
                        <div className="col-md-6">
                          <Form.Control
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Mobile"
                          />
                        </div>
                        <div className="col-md-6">
                          <Form.Control
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <hr />
                      <Button variant="outline-primary" size="sm">
                        Place Order
                      </Button>
                    </Form>
                  </Card>
                )}

                {!showMenu && (
                  <Row className="p-2 text-center ">
                    <Table hover size="sm" className="table table-bordered">
                      <thead className="small mb-5">
                        <tr className="bg-light text-dark">
                          <td>Name</td>
                          <td>Order Id</td>
                          <td>Sub Total</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody className="mt-2">
                        {Object.keys(ordersFor).map((order) => (
                          <tr>
                            <td>
                              {ordersFor[order].customerName === "" ? (
                                <Button
                                  className="text-danger"
                                  variant="link"
                                  size="sm"
                                  onClick={() => addCustomer(order)}
                                >
                                  Add Customer
                                </Button>
                              ) : (
                                ordersFor[order].customerName
                              )}
                            </td>
                            <td>{order}</td>
                            <td>
                              {ordersFor[order].subTotal === ""
                                ? "Zero"
                                : ordersFor[order].subTotal}
                            </td>
                            {console.log(ordersFor[order])}
                            <td>
                              <Pencil
                                onClick={() => addCustomer(order)}
                                className="text-primary mx-1"
                              />
                              <ReceiptCutoff
                                className="text-success mx-1"
                                onClick={() => editOrders(order)}
                              />
                              <Archive className="text-danger mx-1" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Row>
                )}

                {showMenu && (
                  <div>
                    <div class="astrodivider mt-2">
                      Special Menu
                      <div class="astrodividermask"></div>
                    </div>
                    {foodList.map((food, index) => (
                      <Button
                        variant="outline-primary"
                        className="m-1 border-1 menuButton"
                        size="sm"
                        key={index}
                        onClick={() => currentOrders(food, index)}
                      >
                        {food.foodName}
                      </Button>
                    ))}
                  </div>
                )}
              </>
            </Card>
          </div>

          <div className="col-md-6">
            <Card body className="text-center sameHeight">
              <>
                <Row className="mt-0 mb-2 bg-light">
                  <div className="">
                    <p className="lead mb-2 float-start text-secondary">
                      Orders For{" "}
                      <strong className="text-primary">
                        {ordersFor[bookingId].customerName === "" ? (
                          <Button
                            variant="link"
                            size="sm"
                            onClick={() => addCustomer1()}
                          >
                            Add Customer{" "}
                          </Button>
                        ) : (
                          ordersFor[bookingId].customerName
                        )}
                      </strong>
                    </p>
                    <span className="small mb-2 float-end text-primary">
                      Booking No. {bookingId}
                    </span>
                  </div>
                </Row>

                <Table hover size="sm" className="table table-bordered">
                  <thead className="border-bottom border-top small mb-5">
                    <tr className="bg-light text-dark">
                      <th colSpan={1}>No.</th>
                      <th colSpan={1}>Status</th>
                      <th colSpan={2}>Item </th>
                      <th colSpan={1}>Qty</th>
                      <th colSpan={1}>Price</th>
                      <th colSpan={2}>Net</th>
                      {/* <th colSpan={2}>Actions</th> */}
                    </tr>
                  </thead>

                  <tbody className="mt-2">
                    {ordersFor[bookingId].foodOrdered.map((food, index) => (
                      <tr key={index}>
                        <td colSpan={1}>{index + 1}</td>
                        <small
                          colSpan={1}
                          className={
                            food.status === "selected"
                              ? "bg-warning text-white m-0 p-0 px-1"
                              : "bg-primary text-white m-0 p-0 px-1"
                          }
                        >
                          {food.status}
                        </small>
                        <td colSpan={2}>{food.foodName}</td>
                        <td colSpan={1}>{food.qty}</td>
                        <td colSpan={1}>{food.price}</td>
                        <td colSpan={2}>{food.subTotal}</td>
                        {/* <td colSpan={2}>
                          <EraserFill className="text-danger" />
                        </td> */}
                      </tr>
                    ))}
                    {orderCount && (
                      <>
                        <tr className="cash mt-5 mb-5 bg-light text-dark">
                          <td colSpan={1}>
                            <small> Count</small>
                          </td>

                          <td colSpan={1}>
                            <small>Discount </small>
                          </td>
                          <td colSpan={1}>
                            <small> Tax</small>
                          </td>
                          <td colSpan={6}>
                            <small>Grand Total</small>
                          </td>
                        </tr>
                        <tr className="mt-5 mb-5 bg-light text-dark">
                          <td colSpan={1}>{orderCount}</td>

                          <td colSpan={1}>
                            <Form.Control
                              className="form-control form-control-sm"
                              onChange={handleDiscount}
                              value={discount}
                              type="number"
                            />
                          </td>
                          <td colSpan={1}>
                            <Form.Control
                              className="form-control form-control-sm"
                              onChange={handleTax}
                              value={tax}
                              type="number"
                            />
                          </td>
                          <td colSpan={6}>{ordersFor[bookingId].grandTotal}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </Table>

                <Card body>
                  <Button className="mx-1" variant="outline-primary" size="sm">
                    To Kitchen
                  </Button>
                  <Button className="mx-1" variant="outline-primary" size="sm">
                    Save
                  </Button>
                  <Button className="mx-1" variant="outline-primary" size="sm">
                    Print
                  </Button>
                </Card>
              </>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ExpressOrders;
