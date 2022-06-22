import React, { useState } from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import PrimaryNav from "../../component/navs/primaryNav";
import MasterNav from "../../component/master/MasterNav";
import AddTableForm from "../../component/master/addTable/AddTableForm";
import ShowTableList from "../../component/master/addTable/ShowTableList";
function AddTableFormPage() {
  const [tableList, setTableList] = useState([]);
  const [formFields, setFormFields] = useState({
    tableName: "",
    catagary: "",
    tableCode: "",
    capacity: "",
    status: "",
  });
  const handleOnChange = (event) => {
    const p = { ...formFields };
    p[event.target.name] = event.target.value;
    setFormFields(p);
    //console.log(formFields);
  };
  const addTable = (e) => {
    e.preventDefault();
    const data = [...tableList, formFields];
    setTableList(data);
  };
  const handleDelete = (table, index) => {
    // console.log(table, index);
    const arr = [...tableList];
    const id = arr.indexOf(table);
    arr.splice(id, 1);
    setTableList(arr);
  };
  const reset = (e) => {
    console.log("hello");
    const arr = { ...formFields };
    arr.tableName = "";
    arr.catagary = "";
    arr.tableCode = "";
    arr.capacity = "";
    arr.status = "";
    setFormFields(arr);
  };
  return (
    <>
      <Container>
        <PrimaryNav />
        <MasterNav />
        <div className="divReverse row  mt-2">
          <div className="col-md-6">
            <Card body className="border-1">
              <AddTableForm
                formFields={formFields}
                handleOnChange={handleOnChange}
                addTable={addTable}
                reset={reset}
              />
            </Card>
          </div>

          <div className="col-md-6">
            <Card body className="border-0">
              <ShowTableList
                tableList={tableList}
                handleDelete={handleDelete}
              />
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddTableFormPage;
