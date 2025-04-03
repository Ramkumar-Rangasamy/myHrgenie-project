import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { RiArrowDownSLine } from "react-icons/ri";
import "./EmployeeRecord.css";

const EmployeeForm = () => {
  const bloodGroups = [
    "A+",
    "A-",
    "A1+",
    "A2B+",
    "AB+",
    "AB-",
    "B+",
    "B-",
    "O+",
    "O-",
    "NA",
  ];

  const countryOptions = countryList().getData();

  const [formData, setFormData] = useState({
    employeeDisplayName: "",
    employeeFirstName: "",
    employeeLastName: "",
    employeeCode: "",
    dob: "",
    country: { value: "India", label: "India" },
    pan: "",
    aadhaarCardNo: "",
    gender: "",
    bloodGroup: "",
    pfNumber: "",
    otherIdProof: "",
    fatherName: "",
    motherName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption, field) => {
    setFormData({ ...formData, [field]: selectedOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      cursor: "pointer", // Ensures pointer cursor on dropdown
    }),

    option: (provided) => ({
      ...provided,
      cursor: "pointer", // Ensures pointer cursor on options
    }),

    indicatorsContainer: () => ({
      display: "none", // Hide default arrow
    }),
    
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#1967D2" : "#fff", // Blue when selected
      color: state.isSelected ? "#fff" : "#000",
      cursor: "pointer",
      padding: "4px 10px",
      "&:hover": {
        backgroundColor: "#1967D2", // 🔹 Blue hover effect
        color: "#fff",
      },
    }),
    
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#495057",
    }),

    menu: (provided) => ({
      ...provided,
      border: "1px solidrgb(151, 154, 156)",
      maxHeight: "200px",
      overflowY: "auto", // ✅ Enables scrolling
      scrollbarWidth: "none", // ✅ Hides scrollbar (for Firefox)
      msOverflowStyle: "none", // ✅ Hides scrollbar (for IE/Edge)
    }),

    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px",
      overflowY: "auto",
      scrollbarWidth: "none", // ✅ Hides scrollbar
    }),
  };

  return (
    <div className="Employee Record Entry">
      <div className="card-header">
        <h5 className="mb-0 title-form-emp-radd">Employee Record Entry</h5>
      </div>
      <div className="card-body pb-5">
        <form onSubmit={handleSubmit}>
          <div className="form-row mx-n3 pb-3">
            <div className="form-group col-md-4 px-4">
              <label className="emp-radd-label">Employee Display Name :</label>
              <input
                type="text"
                name="employeeDisplayName"
                placeholder="Enter employee display name"
                className="form-control"
                value={formData.employeeDisplayName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">Employee First Name:</label>
              <input
                type="text"
                name="employeeFirstName"
                className="form-control"
                placeholder="Enter employee firstname"
                value={formData.employeeFirstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">Employee Last Name:</label>
              <input
                type="text"
                name="employeeLastName"
                className="form-control"
                placeholder="Enter employee lastname"
                value={formData.employeeLastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row mx-n3 pb-3">
            <div className="form-group col-md-4 px-4">
              <label className="emp-radd-label">Employee Code :</label>
              <input
                type="text"
                name="employeeCode"
                className="form-control"
                placeholder="Enter employee code"
                value={formData.employeeCode}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                className="form-control"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="form-group select-box-arrow-icon-head col-md-4 px-4">
              <label className="emp-radd-label">Country:</label>
              <Select
                options={countryOptions}
                value={formData.country}
                onChange={(selected) => handleSelectChange(selected, "country")}
                styles={customStyles}
                menuPortalTarget={document.body} // ✅ Ensures it renders properly
                menuShouldScrollIntoView={false}
              />
              <RiArrowDownSLine className="select-box-arrow-icon" />
            </div>
          </div>

          <div className="form-row mx-n3 pb-3">
            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">PAN Number:</label>
              <input
                type="text"
                name="pan"
                className="form-control"
                placeholder="Enter pan number"
                value={formData.pan}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">Aadhaar Card No:</label>
              <input
                type="text"
                nputmode="numeric"
                name="aadhaarCardNo"
                className="form-control"
                placeholder="Enter aadhaar card number"
                value={formData.aadhaarCardNo}
                onChange={handleChange}
              />
            </div>



            

            <div className="form-group select-box-arrow-icon-head col-md-4  px-4">
              <label className="emp-radd-label">Gender:</label>
              <select
                name="gender"
                className="form-control select-box-arrow-icon-input"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <RiArrowDownSLine className="select-box-arrow-icon" />
            </div>
          </div>








          <div className="form-row mx-n3 pb-3">
            <div className="form-group select-box-arrow-icon-head  col-md-4 px-4">
              <label className="emp-radd-label">Blood Group:</label>
              <select
                name="bloodGroup"
                className="form-control select-box-arrow-icon-input"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select your blood group</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
              <RiArrowDownSLine className="select-box-arrow-icon" />
            </div>

            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">PF Number:</label>
              <input
                type="text"
                name="pfNumber"
                className="form-control"
                placeholder="Enter pf number"
                value={formData.pfNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">Other ID Proof Number:</label>
              <input
                type="text"
                name="otherIdProof"
                className="form-control"
                placeholder="Enter other id proof number"
                value={formData.otherIdProof}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row mx-n3 mb-0">
            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">Father Name:</label>
              <input
                type="text"
                name="fatherName"
                className="form-control"
                placeholder="Enter father name"
                value={formData.fatherName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-4  px-4">
              <label className="emp-radd-label">Mother Name:</label>
              <input
                type="text"
                name="motherName"
                className="form-control"
                placeholder="Enter mother name"
                value={formData.motherName}
                onChange={handleChange}
              />
            </div>

            <div className=" form-group col-md-4 px-4 ">
              <label className="emp-radd-label">Submit:</label>
              <input
                type="submit"
                className="form-control btn-save-record"
                value="Save Record"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
