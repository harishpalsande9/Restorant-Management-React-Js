import React, { useState } from "react";
import { Row, Form, Col, Button, Card } from "react-bootstrap";
function MenuForm({
  formFields,
  handleOnChange,
  addFoodItem,
  reset,
  errors,
  validateProperty,
}) {
  return (
    <>
      <h3 className="text-center bg-light text-dark">Add Food </h3>
      <Form className="px-4 py-2" onSubmit={addFoodItem}>
        <Row className="mb-3 ">
          <Form.Control
            placeholder="Food Name"
            className="form-control form-control-sm mb-2"
            value={formFields.foodName}
            onChange={handleOnChange}
            name="foodName"
          />
          <Form.Control
            placeholder="Quantity"
            type="number"
            className="form-control form-control-sm mb-2"
            value={formFields.quantity}
            onChange={handleOnChange}
            name="quantity"
          />{" "}
          <Form.Control
            type="number"
            className="form-control form-control-sm mb-2"
            placeholder="price"
            value={formFields.price}
            onChange={handleOnChange}
            name="price"
          />{" "}
          <Form.Control
            type="date"
            placeholder="ExpireDate"
            className="form-control form-control-sm mb-2"
            name="expireDate"
            value={formFields.expireDate}
            onChange={handleOnChange}
          />{" "}
        </Row>{" "}
        <div className=" gap-2 mb-2 text-center">
          <Button
            className=" mx-1 sm"
            variant="outline-primary"
            type="submit"
            size="sm"
          >
            Add Food
          </Button>
          <Button
            className=" mx-1 sm"
            variant="outline-danger"
            size="sm"
            onClick={(e) => reset(e)}
          >
            Reset
          </Button>
        </div>{" "}
      </Form>
    </>
  );
}

export default MenuForm;
