import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();

        return function cleanup() {

        }
    },[])

    const getData = () => {
        fetch("http://localhost:8080/employee")
        .then((res) => res.json())
        .then(d => {
            setData(d)
        })
    }

    // console.log(data);

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      
      {data.map((ele) => {
          return <Link to={`/employees/${ele.id}`}>
              <div className="employee_card" key={ele.id}>
                    <img className="employee_image" src={ele.image}/>
                    <span className="employee_name">{ele.employee_name}</span>
                    <span className="employee_title">{ele.title}</span>
                </div>
          </Link>
      })}
    </div>
  );
};