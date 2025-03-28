import React from "react";
import "./EmployeeRecord.css";

const EmployeeRecordEntry = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow-lg">
        <div className="card-header text-white text-center">
          <h4>Employee Record Entry</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3">
              {/* Employee Code */}
              <div className="col-lg-12">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Employee Code"
                  />
                  <span className="input-group-text">Employee Code</span>
                </div>
              </div>

              {/* Employee Display Name */}
              <div className="col-lg-12">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Employee Display Name"
                  />
                  <span className="input-group-text">
                    Employee Display Name
                  </span>
                </div>
              </div>

              {/* Employee First Name */}
              <div className="col-lg-12">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Employee First Name"
                  />
                  <span className="input-group-text">Employee First Name</span>
                </div>
              </div>

              {/* Employee Last Name */}
              <div className="col-lg-12">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Employee Last Name"
                  />
                  <span className="input-group-text">Employee Last Name</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary">
                Save Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRecordEntry;
