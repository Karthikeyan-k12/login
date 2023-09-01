import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../action/userAction";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
    category: "General",
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
    dispatch(registerUser(formData));
    navigate("/registered-successfully");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 justify-content-center d-flex align-items-center position">
          <form
            className="shadow-lg p-5 bg-body rounded"
            onSubmit={handleSubmit}
          >
            <h5 className="text-center">Register</h5>
            <div className="mb-3 mt-4">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
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
              <label htmlFor="password" className="form-label">
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

            <div className="mt-1">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
              />
              <label className="form-check-label mx-1 type" htmlFor="male">
                Male
              </label>

              <div className="mx-5">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label type" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-check-label mt-2">Category</label>
              <select
                className="form-select mt-2"
                aria-label="Default select example"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option selected>General</option>
                <option>Developer</option>
                
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 screen bg-info"></div>
      </div>
    </div>
  );
};

export default Register;
