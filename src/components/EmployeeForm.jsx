import { useNavigate, useParams } from "react-router-dom";
import { addEmployee, getEmployeeById } from "../service/localstorage";
import { useForm } from "./../hooks/useForm";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { editEmployee } from "./../service/localstorage";

import "../styles/index.css";

export const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: " ",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id
      ? editEmployee(id, inputValues)
      : addEmployee({ id: uuid(), ...inputValues });

    resetForm();

    setshowAlert(true);
    navigate("/");
    setTimeout(() => {
      setshowAlert(false);
    }, 2000);
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h1 className="text-center txtCol">
          {id ? "Edit" : "Add new"} Student
        </h1>
        <div />
      </div>

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className=" form-label mt-2 fs-4" htmlFor="inputValid">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2 fs-4" htmlFor="inputValid">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={inputValues.email}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              required
            />
            <span class="form__error">
              Please enter a valid email i.e abc@example.com
            </span>
          </div>

          {/* <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={inputValues.address}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div> */}

          <div className="form-group">
            <label className="form-label mt-2 fs-4" htmlFor="inputValid">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              pattern="[0-9]{12}"
              value={inputValues.phone}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              required
              placeholder="Enter phone number"
            />
            <span class="form__error">
              Please enter a valid phone number i.e 0-9 & max 12 characters
            </span>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary btn-block">
              {id ? "Edit" : "Add"} Employee
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success">
            <strong>Well done!</strong> {id ? "edit" : "added a new"} Employee.
          </div>
        </div>
      )}
    </div>
  );
};
