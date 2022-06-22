import React, { useState } from "react";
import {
  Row,
  Container,
  Table,
  Form,
  Col,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
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
import { Bag } from "react-bootstrap-icons";
import chart1 from "../../assets/1.png";
import chart2 from "../../assets/2.png";
import PrimaryNav from "../../component/navs/primaryNav";
function Dashboard() {
  return (
    <>
      <Container className="m-auto ">
        <PrimaryNav />
        <Row className="mt-3">
          <div className="sameHeight">
            <Row className="row">
              <Col className="col-md-3 my-2  ">
                <Card className="border-1 sameHeight  bg-primary  text-white  border border-primary  mb-1">
                  <Card.Body>
                    <Card.Title>
                      <strong className="fs-3"> 52,222 </strong>{" "}
                      <CardList className="Bag" />
                    </Card.Title>
                    <Card.Text>Total Invoices</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className=" col-md-3 my-2 ">
                <Card className="border-1 sameHeight bg-warning text-white  border border-warning  mb-1">
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <strong className="fs-3"> 52,222 </strong>{" "}
                      <ClockHistory className="Bag" />
                    </Card.Title>
                    <Card.Text>Total Purchase</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className=" col-md-3 my-2 ">
                <Card className="border-1 sameHeight bg-success text-white  border border-success  mb-1">
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <strong className="fs-3"> 52,222 </strong>{" "}
                      <Bag className="Bag" />
                    </Card.Title>
                    <Card.Text>Total Expenses</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className=" col-md-3 my-2 ">
                <Card className="border-1 sameHeight bg-danger text-white  border border-danger  mb-1">
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <strong className="fs-3"> 52,222 </strong>{" "}
                      <People className="Bag" />
                    </Card.Title>
                    <Card.Text>Total Coustomer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Row>
        <div className="row mt-2">
          <div className="col-md-6 ">
            <div className="sameHeight">
              <div className="row">
                <div className=" col-md-6 mb-2">
                  <Card className="border-1 sameHeight  mb-1">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-md-6 ">
                  <Card className="border-1 sameHeight  mb-1">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <Row className="mt-2 ">
                <Col className="mb-2">
                  <Card body className="border-1 sameHeight  ">
                    <Image
                      size={500}
                      className="rounded mx-auto d-block"
                      src={chart1}
                    />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="sameHeight">
              <Row className="mb-2 ">
                <Col>
                  <Card body className="border-1 sameHeight mb-1">
                    <Image
                      size={500}
                      className="rounded mx-auto d-block"
                      src={chart1}
                    />
                  </Card>
                </Col>
              </Row>

              <Row className=" g-4 ">
                <Col className=" ">
                  <div className="g-4">
                    <Card className="mb-2 border-1  mb-1">
                      <Card.Body>
                        <Card.Title>Purchases</Card.Title>
                        <Card.Text>
                          Your Recent Purchases Will Appear Here
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="mb-2 border-1  mb-1">
                      <Card.Body>
                        <Card.Title>Purchases</Card.Title>
                        <Card.Text>
                          Your Recent Purchases Will Appear Here
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>

                <Col className="">
                  <Card className="border-1  mb-1">
                    <Card.Body>
                      <Card.Title>Purchases</Card.Title>
                      <Card.Text>
                        Your Recent Purchases Will Appear Here
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Cras justo odio</ListGroupItem>
                      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>

          {/* <Col className=" col-lg-6 ">
            <div>
              <Row className="">
                <Card body>
                  <Row className="mb-2">
                    <Col>
                      <Card body>
                        <Image
                          fluid
                          className="rounded mx-auto d-block"
                          src={chart2}
                        />
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="text-center">
                      <h6 className="display-6">Purchases</h6>
                      <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col>
                      <h6 className="display-6">Expenses</h6>
                      <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </Card>
              </Row>
            </div>
          </Col> */}
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
