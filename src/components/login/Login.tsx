import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../action/userAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.app.users);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      dispatch(loginUser(user));
      navigate("/list");
    } else {
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 justify-content-center d-flex align-items-center position">
            <form
              className="shadow-lg p-5 bg-body rounded"
              onSubmit={handleSubmit}
            >
              <h5 className="text-center">Login</h5>

              <div className="mb-3 mt-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <p className="text-center pt-2">Click here to <Link  to={'/'}>Register</Link></p>
            </form>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 screen bg-info"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
