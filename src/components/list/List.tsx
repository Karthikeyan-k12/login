import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState([]);
  const users = useSelector((state: any) => state.app.users);
  useEffect(() => {
    const storedData = localStorage.getItem("registeredUsers");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);
  return (
    <div className="container-fluid ">
      <div className="row center-row">
        <div className="container justify-content-center d-flex align-items-center">
        

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4 className="text-center mb-5">Registered Data's</h4>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-content-center d-flex align-items-center">
          <div className="container">
            <table className="table shadow-lg p-5 bg-body rounded">
              <thead className="txt-color">
                <tr>
                  <th scope="col" className="pt-4" style={{ color: "#858585" }}>
                    Name
                  </th>
                  <th scope="col" className="pt-4" style={{ color: "#858585" }}>
                    Email
                  </th>
                  <th scope="col" className="pt-4" style={{ color: "#858585" }}>
                    Gender
                  </th>
                  <th scope="col" className="pt-4" style={{ color: "#858585" }}>
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any, index: string) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.category}</td>
                  </tr>
                ))}
              </tbody>
              
            </table>
            <Link to={'/login'} className="btn btn-primary">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
