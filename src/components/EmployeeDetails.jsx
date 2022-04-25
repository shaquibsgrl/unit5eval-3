import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";

export const EmployeeDetails = () => {
    const [data, setData] = useState({});
    const {id} = useParams();
    const {countHandle} = useContext(AuthContext)
    const level = ["Intern", "Jr Software Developer", "Sr Software Developer", "Team Lead"]

    useEffect(() => {
        axios.get(`http://localhost:8080/employee/${id}`)
        .then(({data}) => {
            setData(data)
        })
    },[])

    // console.log(data)

  return (
    <div className="user_details">
      <img className="user_image"src={data.image} />
      <h4 className="user_name">{data.employee_name}</h4>
      <span className="user_salary">${data.salary}</span>
      <span className="tasks">
        <li className="task">{data.tasks}</li>
      </span>
      Status: <b className="status">{data.status}</b>
      Title: <b className="title">{data.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button onClick={() => {
        countHandle("fired")
        data.status = "terminated";
      }} className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote" onClick={() => {
        countHandle("promoted")
      }}>promote</button>
    </div>
  );
};