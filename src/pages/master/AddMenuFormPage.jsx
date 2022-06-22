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
import MenuForm from "../../component/master/addmenu/MenuForm";
import ShowTableMenu from "../../component/master/addmenu/ShowTableMenu";
import MasterNav from "../../component/master/MasterNav";
import PrimaryNav from "../../component/navs/primaryNav";
function AddMenuFormPage() {
  const [menuList, setMenuList] = useState([]);

  const [formFields, setFormFields] = useState({
    foodName: "",
    quantity: "",
    price: "",
    expireDate: "",
  });

  const handleOnChange = (e) => {
    const p = { ...formFields };
    p[e.target.name] = e.target.value;
    setFormFields(p);
    //console.log(formFields);
  };
  const addFoodItem = (e) => {
    e.preventDefault();
    const data = [...menuList, formFields];
    setMenuList(data);
  };
  const handleDelete = (food, index) => {
    //console.log(food, index);
    const arr = [...menuList];
    const id = arr.indexOf(food);
    arr.splice(id, 1);
    setMenuList(arr);
  };
  const reset = (e) => {
    console.log("hello");
    const arr = { ...formFields };
    arr.foodName = "";
    arr.quantity = "";
    arr.price = "";
    arr.expireDate = "";
    setFormFields(arr);
  };
  return (
    <>
      <Container>
        <PrimaryNav />
        <MasterNav />
        <div className="divReverse row mt-2">
          <div className="col-md-6">
            <Card body className="border-1">
              <MenuForm
                formFields={formFields}
                handleOnChange={handleOnChange}
                addFoodItem={addFoodItem}
                reset={reset}
              />
            </Card>
          </div>

          <div className="col-md-6">
            <Card body className=" border-0">
              <ShowTableMenu menuList={menuList} handleDelete={handleDelete} />
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddMenuFormPage;
