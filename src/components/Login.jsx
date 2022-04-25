import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export const Login = () => {
  //  use reqres to log user in.
  const {toggleAuth, handleAuth} = useContext(AuthContext);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange =(elem) => {
      const {id, value} = elem.target;

      setForm({
        ...form,
        [id] : value
      })
  }

  const handleSubmit = async (elem) => {
      elem.preventDefault();

      const data = await fetch("https://reqres.in/api/login", {
        method:"POST",
        headers: {
          "Content-type":"application/json"
        },
        body: JSON.stringify(form)
      });

      const res = await data.json();

      // console.log(res.token)

      
      if(res.token) {
        handleAuth(true);
        toggleAuth(res.token);
        navigate(-2, {replace:true})
      }
      else {
        alert("Please Enter valid details")
      }
  }

  return (
    <form onSubmit={handleSubmit} className="loginform">
      <input
        onChange={handleChange}
        name="username"
        type="text"
        id="email"
        placeholder="Enter username"
        className="login_username"
      />
      <input
      onChange={handleChange}
        name="password"
        type="text"
        id="password"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};