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

import { Trash } from "react-bootstrap-icons";
import { Pen } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";
function ShowTableMenu({ menuList, handleDelete }) {
  // const HandelOnChange = (event) => {
  //   const p = { ...showTableMenuList };
  //   p[event.target.name] = event.target.value;
  //   setShowTableMenuList(p);
  //   console.log(showTableMenuList);
  // };

  return (
    <>
      {" "}
      <h3 className="text-center bg-light text-dark">Menu's List</h3>
      <Table borderless hover className="table table-sm mb-3">
        <thead className=" border-bottom border-top">
          <tr className="text-sm">
            <th>ID</th>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th className="tabledisplay">Expire Date</th>
            <th>Action</th>
            {/* <th>Quantity </th>
            <th>price </th>
            <th> Expire Date</th>
            <th>Action </th> */}
          </tr>
        </thead>
        <tbody>
          {menuList.map((food, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{food.foodName}</td>
              <td>{food.price}</td>
              <td>{food.quantity}</td>
              <td> {food.expireDate}</td>

              <td>
                <Eye className="mx-1" />
                <Pen color="blue" className="mx-1" />
                <Trash
                  color="red"
                  className="mx-1"
                  onClick={() => handleDelete(food, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ShowTableMenu;
