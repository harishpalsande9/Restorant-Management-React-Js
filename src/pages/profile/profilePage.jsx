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
function ProfilePage() {
  return (
    <Container>
      <PrimaryNav />
      <div className="row mt-2">
        <div className="col-md-6 text-center m-auto">
          <Card body className="border-1">
            <h3 className="text-center bg-light text-dark"> Profile</h3>
            <p></p>
          </Card>
        </div>
        <div className="col-md-6 text-center m-auto">
          <Card body className="border-1">
            <h3 className="text-center bg-light text-dark"> Profile</h3>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default ProfilePage;
