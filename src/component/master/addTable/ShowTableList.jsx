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
function ShowTableList({ tableList, handleDelete }) {
  return (
    <>
      <h3 className="text-center bg-light text-dark">Table List</h3>
      <Table borderless hover className="table table-sm mb-3">
        <thead className=" border-bottom border-top">
          <tr className="text-sm">
            <th>ID</th>
            <th>Table Name </th>
            <th className="tabledisplay"> Category </th>
            <th className="tabledisplay">Capacity </th>
            <th>Status </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {tableList.map((table, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{table.tableName}</td>
              <td>{table.catagary}</td>
              <td> {table.capacity}</td>
              <td> {table.status}</td>

              <td>
                <Eye className="mx-1" />
                <Pen color="blue" className="mx-1" />
                <Trash
                  color="red"
                  className="mx-1"
                  onClick={() => handleDelete(table, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ShowTableList;
