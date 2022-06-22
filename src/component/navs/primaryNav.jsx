import React, { useState, useEffect } from "react";
import {
  Dropdown,
  Button,
  Form,
  Row,
  Col,
  Image,
  Offcanvas,
} from "react-bootstrap";
import {
  Bell,
  BorderOuter,
  CardList,
  ClockHistory,
  Journal,
  People,
  PersonCircle,
  Sliders,
  Speedometer,
} from "react-bootstrap-icons";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const PrimaryNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="dextop-nav">
        <Col>
          <div className="menuBar mt-1 d-flex justify-content-center">
            <NavLink to="/Dashboard" id="line-1" className=" m-1">
              <Image src={logo} width="90" />
            </NavLink>
            <NavLink to="/Dashboard" className="mx-1 zoom">
              <Speedometer />
              <Button className="mx-1 px-1" variant="">
                Dashboard
              </Button>
            </NavLink>

            <NavLink to="/table-orders" className="mx-1 zoom">
              <BorderOuter />
              <Button className="mx-1 px-1" variant="">
                Table Order
              </Button>
            </NavLink>
            <NavLink to="/express" className="mx-1 zoom">
              <CardList />
              <Button className="mx-1 px-1" variant="">
                Express
              </Button>
            </NavLink>
          </div>
        </Col>
        <Col>
          <div className="menuBar mt-1 d-flex justify-content-center">
            <NavLink to="/AddPurchasePage" className="mx-1 zoom">
              <ClockHistory />
              <Button className="mx-1 px-1 " variant="">
                Inventory
              </Button>
            </NavLink>
            <NavLink to="/CrmPage" className="mx-1 zoom">
              <People />
              <Button className=" mx-1 px-1" variant="">
                CRM
              </Button>
            </NavLink>
            <NavLink to="/TransactionReportPage" className="mx-1 zoom">
              <Journal />
              <Button className="mx-1 px-1" variant="">
                report
              </Button>
            </NavLink>

            <NavLink to="/AddMenuFormPage" className="mx-1 zoom">
              <Sliders />
              <Button className="mx-1 px-1" variant="">
                Master's
              </Button>
            </NavLink>
            <NavLink to="" className="zoom">
              <Button variant="white">
                <PersonCircle className="text-primary" />
              </Button>
            </NavLink>
            <NavLink to="" className="zoom">
              <Button variant="white">
                <Bell className="text-warning" />
              </Button>
            </NavLink>
          </div>
        </Col>
      </Row>

      <div className="mobile-nav my-2">
        <div className="row">
          <Col>
            {" "}
            <div onClick={handleShow}>
              <div className="nav-icon"></div>
              <div className="nav-icon"></div>
              <div className="nav-icon"></div>
            </div>
          </Col>
          <Col>
            <Image src={logo} width="90" className="mt-2" />
          </Col>
          <Col>
            <NavLink to="" className="zoom">
              <Button variant="" className="p-0">
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <PersonCircle className="text-primary" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Button>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="" className="zoom">
              <Button variant="" className="p-0">
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <Bell className="text-warning" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Button>
            </NavLink>
          </Col>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <NavLink to="/Dashboard" id="line-1" className=" m-1">
                <Image src={logo} width="90" />
              </NavLink>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {" "}
            <li className="list-group-item">
              {" "}
              <NavLink to="/Dashboard" className="mx-1 zoom">
                <Speedometer />
                <Button className="mx-1 px-1" variant="">
                  Dashboard
                </Button>
              </NavLink>
            </li>
            <li className="list-group-item">
              {" "}
              <NavLink to="/table-orders" className="mx-1 zoom">
                <BorderOuter />
                <Button className="mx-1 px-1" variant="">
                  Table Order
                </Button>
              </NavLink>
            </li>
            <li className="list-group-item">
              {" "}
              <NavLink to="/express" className="mx-1 zoom">
                <CardList />
                <Button className="mx-1 px-1" variant="">
                  Express
                </Button>
              </NavLink>
            </li>
            <li className="list-group-item">
              {" "}
              <NavLink to="/AddPurchasePage" className="mx-1 zoom">
                <ClockHistory />
                <Button className="mx-1 px-1 " variant="">
                  Inventory
                </Button>
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink to="/CrmPage" className="mx-1 zoom">
                <People />
                <Button className=" mx-1 px-1" variant="">
                  CRM
                </Button>
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink to="/TransactionReportPage" className="mx-1 zoom">
                <Journal />
                <Button className="mx-1 px-1" variant="">
                  report
                </Button>
              </NavLink>
            </li>
            <li className="list-group-item">
              {" "}
              <NavLink to="/AddMenuFormPage" className="mx-1 zoom">
                <Sliders />
                <Button className="mx-1 px-1" variant="">
                  Master's
                </Button>
              </NavLink>
            </li>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default PrimaryNav;
