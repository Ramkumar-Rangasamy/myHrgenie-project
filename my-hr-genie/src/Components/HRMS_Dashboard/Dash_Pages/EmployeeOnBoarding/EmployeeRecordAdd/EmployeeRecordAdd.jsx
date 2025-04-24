import React, { useState } from "react";
import "./EmployeeRecord.css";

const EmployeeRecordEntry = () => {
  const bloodGroups = [
    "A+", "A-", "A1+", "A2B+", "AB+", "AB-", "B+", "B-", "O+", "O-", "NA"
  ];

  const genders = ["Male", "Female", "Other"];

  const [formData, setFormData] = useState({
    employeeDisplayName: "",
    employeeFirstName: "",
    employeeLastName: "",
    employeeCode: "",
    dob: "",
    pan: "",
    aadhaarCardNo: "",
    pfNumber: "",
    otherIdProof: "",
    fatherName: "",
    motherName: "",
    gender: "",
    bloodGroup: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const renderInputField = (label, name, type = "text") => (
    <div className="col-md-6">
      <div className="mb-3 row g-3 ">
        <label className="col-lg-4 col-form-label">{label}</label>
        <div className="col-lg-8">
          <input
            type={type}
            name={name}
            className="form-control"
            placeholder={`Enter ${label}`}
            value={formData[name]}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );

  const renderSelectField = (label, name, options) => (
    <div className="col-md-6">
      <div className="mb-3 row g-3">
        <label className="col-lg-4 col-form-label">{label}</label>
        <div className="col-lg-8">
          <select
            name={name}
            className="form-select"
            value={formData[name]}
            onChange={handleChange}
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid w-100 h-100 p-0 m-0">
      <div className="hrms-dash-emp-All-components-titles-same-card-header">
        <h4>Employee Record Entry</h4>
      </div>
      <div className="hrms-dash-emp-record-card-body">
        <form onSubmit={handleSubmit}>

          <div className="row g-2 pt-4 pb-1 px-3">
            {renderInputField("Employee Code", "employeeCode")}
            {renderInputField("Aadhaar Card No", "aadhaarCardNo")}
          </div>

          <div className="row g-2 pt-2 pb-1 px-3">
            {renderInputField("Employee Display Name", "employeeDisplayName")}
            {renderInputField("PAN Number", "pan")}
          </div>

          <div className="row g-2 pt-2 pb-1 px-3">
            {renderInputField("Employee First Name", "employeeFirstName")}
            {renderInputField("PF Number", "pfNumber")}
          </div>

          <div className="row g-2 pt-2 pb-1 px-3">
            {renderInputField("Employee Last Name", "employeeLastName")}
            {renderInputField("Other ID Proof Number", "otherIdProof")}
          </div>

          <div className="row g-2 pt-2 pb-1 px-3">
            {renderInputField("Father Name", "fatherName")}
            {renderSelectField("Gender", "gender", genders)}
          </div>

          <div className="row g-2 pt-2 pb-1 px-3">
            {renderInputField("Mother Name", "motherName")}
            {renderSelectField("Blood Group", "bloodGroup", bloodGroups)}
          </div>

          <div className="row g-2 pt-2 pb-3 px-3">
            {renderInputField("Date of Birth", "dob", "date")}
            {renderSelectField("Country", "country", ["India", "USA", "UK", "Canada"])}
          </div>

          <div className="text-center p-3">
            <button type="submit" className="btn-save-button-all">Save Record</button>
          </div>
        </form>
      </div>  
    </div>
  );
};

export default EmployeeRecordEntry;
