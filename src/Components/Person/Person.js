import React from "react";
import { addToDb, removeFromDb } from "../../Utilities/localStorage";

export default function Person(props) {
  const { email, image, Salary, ip_address } = props.data;
  const componentStyle = {
    padding: "10px",
    margin: "5px",
    border: "2px solid black",
    borderRadius: "10px"};
  const getData = () => {
    addToDb(ip_address);
  }
  const deleteData = () => {
    removeFromDb(ip_address)
  }
  return (
    <div style={componentStyle}>
      <img src={image} alt="" />
      <h2>
        Full Name: {props.data.first_name} {props.data.last_name}
      </h2>
      <p>Email Addres: {email}</p>
      <h5>Salary: ${Salary}</h5>
      <p>{ip_address}</p>
      <button onClick={()=> getData()}>Track This User</button>
      <button onClick={()=> deleteData()}>Remove data of this User</button>
    </div>
  );
}
