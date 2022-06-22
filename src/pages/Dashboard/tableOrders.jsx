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
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Activity,
  ArrowReturnLeft,
  Bell,
  BorderOuter,
  CardList,
  ClockHistory,
  EraserFill,
  Journal,
  People,
  PersonCircle,
  Sliders,
  Speedometer,
} from "react-bootstrap-icons";

import PrimaryNav from "../../component/navs/primaryNav";

function TableOrders() {
  const [showTable, setShowTable] = useState(true);
  const handleShow1 = () => {
    showTable ? setShowTable(false) : setShowTable(true);
    setShowMenu(false);
  };

  const [showMenu, setShowMenu] = useState(false);
  const handleShow2 = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
    setShowTable(false);
  };

  const [tableList, setTableList] = useState({
    table1: {
      category: "Waranda",
      tableName: "table1",
      status: "vaccant",
      currentBill: "1200",
      foodOrdered: [],
    },

    table2: {
      category: "Waranda",
      tableName: "table2",
      status: "booked",
      currentBill: "1500",
      foodOrdered: [],
    },

    table3: {
      category: "FAMILY",
      tableName: "table3",
      status: "booked",
      currentBill: "1200",
      foodOrdered: [],
    },

    table4: {
      category: "AC",
      tableName: "table4",
      status: "vaccant",
      currentBill: "1500",
      foodOrdered: [],
    },
    table5: {
      category: "AC",
      tableName: "table5",
      status: "reserved",
      currentBill: "1200",
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
      foodName: "Chicken 65",
      qty: 1,
      price: 450,
      category: "nonVeg",
      subTotal: 450,
      status: "selected",
    },
    {
      foodName: "Chicken 65",
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

  const [foodList1, setFoodList1] = useState([
    {
      foodName: "Chicken 65",
      qty: 1,
      price: 300,
      category: "nonVeg",
      subTotal: 300,
      status: "selected",
    },
  ]);

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

  let handleTableClick = (tableInfo, index) => {
    setShowTable(false);
    setShowMenu(true);
    setShowFoodTable(true);
    setTableIndex(index);
    setCurrentTable(tableInfo);
  };

  const currentOrders = (food, index) => {
    const arr = { ...tableList };
    console.log(index);
    console.log(food);

    const condition = (element) => element.foodName === food.foodName;
    let conditionValue = arr[currentTable].foodOrdered.findIndex(condition);

    if (conditionValue > -1) {
      if (arr[currentTable].foodOrdered[conditionValue].status === "selected") {
        console.log("Increment Counter QTY");
        arr[currentTable].foodOrdered[conditionValue].qty++;

        let a =
          arr[currentTable].foodOrdered[conditionValue].qty *
          foodList[index].price;
        arr[currentTable].foodOrdered[conditionValue].subTotal = a;

        let total = arr[currentTable].foodOrdered.reduce((acc, curr) => {
          return acc + curr.qty * curr.price;
        }, 0);

        arr[currentTable].foodOrdered[conditionValue].status = "selected";
        setOrderTotal(a);
        setGrandTotal(total);
        setTableList(arr);
      } else if (
        arr[currentTable].foodOrdered[conditionValue].status === "ordered"
      ) {
        console.log("Create New PUSH");
        console.log(arr[currentTable].foodOrdered[conditionValue]);

        const selectedFood = { ...food };
        selectedFood.qty = 1;
        let a = selectedFood.qty * selectedFood.price;
        selectedFood.subTotal = a;
        selectedFood.status = "selected";
        arr[currentTable].foodOrdered.push(selectedFood);
        let count = arr[currentTable].foodOrdered.length;
        setOrderCount(count);
        let total = arr[currentTable].foodOrdered.reduce((acc, curr) => {
          return acc + curr.qty * curr.price;
        }, 0);

        setOrderTotal(total);
        setGrandTotal(total);
        setTableList(arr);
      }
    } else {
      arr[currentTable].foodOrdered.push(food);

      let count = arr[currentTable].foodOrdered.length;
      setOrderCount(count);
      let total = arr[currentTable].foodOrdered.reduce((acc, curr) => {
        return acc + curr.qty * curr.price;
      }, 0);

      // arr[currentTable].foodOrdered[index].status = "selected";
      setOrderTotal(total);
      setGrandTotal(total);
      setTableList(arr);
      // console.log(arr[currentTable].foodOrdered[index]);
    }
  };

  const handleDelete = (food, index) => {
    const arr = { ...tableList };
    const id = arr[currentTable].foodOrdered.indexOf(food);
    arr[currentTable].foodOrdered.splice(id, 1);
    setTableList(arr);
    let count = arr[currentTable].foodOrdered.length;
    setOrderCount(count);
    let total = arr[currentTable].foodOrdered.reduce((acc, curr) => {
      return curr.qty * curr.price - acc;
    }, 0);

    console.log(total);
    setOrderTotal(total);
    setGrandTotal(total + taxAmount - discountedAmount);
  };

  const handleDiscount = (e) => {
    setDiscount(e.target.value);
    let a = orderTotal * (e.target.value / 100);
    setDiscountedAmount(a.toFixed(2));
    setGrandTotal((orderTotal + taxAmount - a).toFixed(2));
  };

  const handleTax = (e) => {
    setTax(e.target.value);
    let a = orderTotal * (e.target.value / 100);
    setTaxAmount(a.toFixed(2));
    setGrandTotal((orderTotal + a - discountedAmount).toFixed(2));
  };

  const toKot = () => {
    const arr = { ...tableList };
    arr[currentTable].foodOrdered.map((x) =>
      x.status === "selected" ? (x.status = "ordered") : (x.status = "ordered")
    );
    setTableList(arr);
  };
  return (
    <>
      <Container>
        <PrimaryNav />

        <div className="divReverse row mt-2">
          <div className=" col-md-6">
            {showTable && (
              <Card body className="sameHeight">
                <>
                  <p className="lead text-center text-primary">
                    <strong>Choose Tables To Order</strong>
                  </p>
                  <hr class="zig" />

                  <hr class="zag" />

                  {Object.keys(tableList).map((tableName, index) => (
                    <Button
                      key={index}
                      className="m-1 border-1"
                      size="sm"
                      variant="light"
                      onClick={() => handleTableClick(tableName, index)}
                    >
                      {tableName}
                    </Button>
                  ))}
                </>
              </Card>
            )}

            {showMenu && (
              <Card body className="tabledisplay">
                <>
                  <div className="row mt-0 mb-2 ">
                    <div className="col-md-3">
                      <small className="display-8 bg-light">
                        Orders For {currentTable}
                      </small>
                    </div>

                    <div className="col-md-3">
                      <Form.Control
                        size="sm"
                        type="text"
                        className="form-control form-control-sm "
                        placeholder="Search Food"
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        className="form-control form-control-sm"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Category"
                      />
                      <datalist
                        className=" form-control-sm"
                        id="datalistOptions"
                      >
                        <option value="Non Veg" />
                      </datalist>
                    </div>
                    <div className="col-md-3">
                      <Button size="sm" variant="primary" onClick={handleShow1}>
                        <ArrowReturnLeft /> Tables
                      </Button>
                    </div>
                  </div>
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
                  <div class="astrodivider mt-2">
                    Veg Starters
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
                  <div class="astrodivider mt-2">
                    Non Veg Starters
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
                </>
              </Card>
            )}
          </div>
          <div className="col-md-6">
            <Card body className="text-center sameHeight">
              {showFoodTable && (
                <>
                  <Row className="mt-0 mb-2 border-bottom">
                    <Col className="mt-0 mb-2 col-md-4">
                      <Form.Select
                        className="form-control form-control-sm p-1 tableSelect"
                        aria-label="Default select example"
                      >
                        <option> Select Table</option>
                        <option value="1" onClick={console.log("hello")}>
                          One
                        </option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                    <Col className="col-md-4">
                      {" "}
                      <Form.Select
                        className="form-control form-control-sm p-1 tableSelect"
                        aria-label="Default select example"
                      >
                        <option> Select Food Item</option>
                        <option value="1">Chicken 65</option>
                        <option value="2">Chicken 65</option>
                        <option value="3">Gulab Jam</option>
                        <option value="3">Butter Rotu</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      {foodList1.map((food, index) => (
                        <Button
                          variant="outline-primary"
                          className="m-1 border-1 menuButton p-1"
                          size="sm"
                          key={index}
                          onClick={() => currentOrders(food, index)}
                        >
                          {food.foodName}
                        </Button>
                      ))}
                    </Col>
                  </Row>
                  <Row className="mt-0 mb-2 border-bottom">
                    <div className="">
                      <p className=" mb-2 float-start text-secondary">
                        Orders Of {currentTable}
                      </p>
                      <span className="small mb-2 float-end text-primary">
                        Invoice No. 299292{" "}
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
                      {tableList[currentTable].foodOrdered.map(
                        (food, index) => (
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
                              <EraserFill
                                className="text-danger"
                                onClick={() => handleDelete(food, index)}
                              />
                            </td> */}
                          </tr>
                        )
                      )}
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
                            <td colSpan={6}>{grandTotal}</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </Table>

                  <Card body>
                    <Button
                      className="mx-1"
                      variant="outline-primary"
                      size="sm"
                      onClick={() => toKot()}
                    >
                      To Kitchen
                    </Button>
                    <Button
                      className="mx-1"
                      variant="outline-primary"
                      size="sm"
                      onClick={() => toKot()}
                    >
                      Save
                    </Button>
                    <Button
                      className="mx-1"
                      variant="outline-primary"
                      size="sm"
                      onClick={() => toKot()}
                    >
                      Print
                    </Button>
                  </Card>
                </>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TableOrders;
