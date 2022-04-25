import { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const Admin = () => {
  const [form, setForm] = useState({});
  const {countHandle} = useContext(AuthContext)


  const handleChange =(elem) => {
      const {name, value} = elem.target;

      setForm({
        ...form,
        [name] : value
      })
  }

  const handleSubmit = async (elem) => {
      elem.preventDefault();

      const data = await fetch("http://localhost:8080/employee", {
        method:"POST",
        headers: {
          "Content-type":"application/json"
        },
        body: JSON.stringify(form)
      });

      alert("Employee Added Successfully")

      // console.log(form)
      countHandle("new");
  }

  return (
    <form onSubmit={handleSubmit} className="createEmployee">
      <input onChange={handleChange} type="text" placeholder="Employee Name" name="employee_name" />
      <input onChange={handleChange}  type="text" placeholder="Employee id" name="employee_id" />
      <select onChange={handleChange}  name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input onChange={handleChange}  type="number" placeholder="Salary" name="salary" />
      <input onChange={handleChange}  type="text" placeholder="Image" name="image" />
      <input onChange={handleChange}  type="text" placeholder="User Name" name="username" />
      <input onChange={handleChange}  type="password" placeholder="Password" name="password" />
      <input
        onChange={handleChange} 
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select onChange={handleChange}  name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={handleChange}  name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input onChange={handleChange}  className="createUser" type="submit" value={"submit"} />
    </form>
  );
};