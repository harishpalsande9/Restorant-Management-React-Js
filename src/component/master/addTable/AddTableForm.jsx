import {
  Row,
  Container,
  Table,
  Form,
  Col,
  Button,
  Card,
} from "react-bootstrap";
function AddTableForm({ formFields, handleOnChange, addTable, reset }) {
  return (
    <>
      <h3 className="text-center bg-light text-dark"> Add Table</h3>
      <Form className="px-4 py-2" onSubmit={addTable}>
        <Row className="mb-3 ">
          <Form.Control
            placeholder="Table Name"
            size="sm"
            placeholder="Food Name"
            value={formFields.tableName}
            onChange={handleOnChange}
            name="tableName"
            className="form-control form-control-sm mb-2"
          />
          <Form.Control
            type="text"
            placeholder="Catagary"
            size="sm"
            value={formFields.catagary}
            onChange={handleOnChange}
            name="catagary"
            className="form-control form-control-sm mb-2"
          />
          <Form.Control
            type="text"
            placeholder="Capacity"
            size="sm"
            value={formFields.capacity}
            onChange={handleOnChange}
            name="capacity"
            className="form-control form-control-sm mb-2"
          />
          <Form.Control
            type="text"
            placeholder="Status"
            size="sm"
            value={formFields.status}
            onChange={handleOnChange}
            name="status"
            className="form-control form-control-sm mb-2"
          />
        </Row>{" "}
        <div className=" gap-2 mb-2 text-center">
          <Button
            size="sm"
            className=" mx-1"
            variant="outline-primary"
            type="submit"
          >
            Add Table
          </Button>
          <Button
            size="sm"
            className=" mx-1"
            variant="outline-danger"
            onClick={(e) => reset(e)}
          >
            Reset
          </Button>
        </div>{" "}
      </Form>
    </>
  );
}

export default AddTableForm;
