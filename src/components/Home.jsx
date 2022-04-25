import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  const [data, setData] = useState([]);
  const {terminated, promoted, total_new} = useContext(AuthContext)

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

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees: <span className="totalemp">{data.length}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{total_new}</span>
        </div>
      </div>
    </>
  );
};