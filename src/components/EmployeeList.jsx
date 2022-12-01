import { EmployeeItem } from "./EmployeeItem";
import { useEffect, useState } from "react";
import { getListEmployees } from "./../service/localstorage";
import { FcSearch } from "react-icons/fc";

import "../styles/index.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchedValue, setSearchedValue] = useState([]);

  useEffect(() => {
    setEmployees(getListEmployees());
  }, []);

  return (
    <div>
      <h1 className="my-5 text-center">Manage Students Record</h1>
      {/* {employees.length > 0 ? ( */}

      {employees.length > 0 ? (
        <>
          <div className="wrap text-center pb-5">
            <div className="search w-50">
              <input
                type="text"
                className="searchTerm"
                placeholder="Search Users through phone number"
                onChange={(e) => setSearchedValue(e.target.value)}
              />
              <button type="submit" className="searchButton">
                <FcSearch />
              </button>
            </div>
          </div>
          <div className="card bg-secondary table-responsive p-3">
            <table className="table table-hover table-responsive">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>

                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees
                  .filter((user) => user.phone.includes(searchedValue))
                  .map((employee) => (
                    <EmployeeItem
                      employee={employee}
                      key={employee.id}
                      setEmployees={setEmployees}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div>
          <h3 className="text-center">No employees</h3>
        </div>
      )}
    </div>
  );
};
