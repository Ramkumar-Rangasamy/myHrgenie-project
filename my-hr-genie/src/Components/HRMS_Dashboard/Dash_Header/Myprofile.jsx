import React, { useState } from 'react';

const employeeData = {
  personalInfo: {
    'Employee Code': 'SRAYS01',
    'Aadhaar Card No': '000000000000',
    'Display Name': 'Director Name',
    'PAN': 'PANNOTAVAI',
    'First Name': 'Director F.Name',
    'PF Universal Account Number': '000000000000',
    'Last Name': 'Director L.Name',
    'Other ID Proof Number': '000000000000',
    'Father Name': 'Director Father',
    'Gender': 'Male',
    'Mother Name': 'Director Mother',
    'Country': 'India',
    'Date of Birth': '1985-01-01' 
  },

  bankAccount: {
    'Bank Name': '',
    'Account Type': '',
    'Branch Name': '',
    'Account Number': '',
  },

  email: 'director@example.com'
};

const labelStyle = {
  width: '170px',
  fontSize: '14px',
  fontWeight: '500',
  color: '#000099'
};

const Myprofile = () => {
  const [bankAccount, setBankAccount] = useState({
    bankName: employeeData.bankAccount['Bank Name'],
    accountType: employeeData.bankAccount['Account Type'],
    branchName: employeeData.bankAccount['Branch Name'],
    accountNumber: employeeData.bankAccount['Account Number']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankAccount(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddBankAccount = (e) => {
    e.preventDefault();
    console.log('Bank Account Submitted:', bankAccount);
    alert('Bank account information added successfully!');
  };

  return (
    <div>
      <div className="hrms-dash-emp-All-components-titles-same-card-header">
        <h4>Employee Record Search</h4>
      </div>

      <div className="container accordion p-4" id="employeeAccordion">
        {/* Personal Info */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPersonalInfo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePersonalInfo"
              aria-expanded="true"
              aria-controls="collapsePersonalInfo"
            >
              Personal Information
            </button>
          </h2>
          <div
            id="collapsePersonalInfo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingPersonalInfo"
            data-bs-parent="#employeeAccordion"
          >
            <div className="accordion-body">
              <div className="row">
                {Object.entries(employeeData.personalInfo).map(([label, value], idx) => (
                  <div className="col-md-6 mb-3" key={idx}>
                    <div className="d-flex">
                      <div style={labelStyle}>{label}:</div>
                      <div className="text-black">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bank Account Section */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingBank">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBank"
              aria-expanded="false"
              aria-controls="collapseBank"
            >
              Personal Bank Account
            </button>
          </h2>
          <div
            id="collapseBank"
            className="accordion-collapse collapse"
            aria-labelledby="headingBank"
            data-bs-parent="#employeeAccordion"
          >
            <div className="accordion-body">
              <form onSubmit={handleAddBankAccount}>
                {/* Bank Name */}
                <div className="row align-items-center mb-4">
                  <label className="col-sm-3" style={labelStyle}>Bank Name</label>
                  <div className="col-sm-9">
                    <select
                      className="form-select"
                      name="bankName"
                      value={bankAccount.bankName}
                      onChange={handleChange}
                    >
                      <option value="">Choose...</option>
                      <option value="Bank of React">Bank of React</option>
                      <option value="JS Bank">JS Bank</option>
                      <option value="Node Bank">Node Bank</option>
                    </select>
                  </div>
                </div>

                {/* Account Type */}
                <div className="row align-items-center mb-4">
                  <label className="col-sm-3" style={labelStyle}>Account Type</label>
                  <div className="col-sm-9">
                    <select
                      className="form-select"
                      name="accountType"
                      value={bankAccount.accountType}
                      onChange={handleChange}
                    >
                      <option value="">Choose...</option>
                      <option value="Savings">Savings</option>
                      <option value="Current">Current</option>
                    </select>
                  </div>
                </div>

                {/* Branch Name */}
                <div className="row align-items-center mb-4">
                  <label className="col-sm-3" style={labelStyle}>Branch Name</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="branchName"
                      value={bankAccount.branchName}
                      onChange={handleChange}
                      placeholder="Enter Branch Name"
                    />
                  </div>
                </div>

                {/* Account Number */}
                <div className="row align-items-center mb-4">
                  <label className="col-sm-3" style={labelStyle}>Account Number</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="accountNumber"
                      value={bankAccount.accountNumber}
                      onChange={handleChange}
                      placeholder="Enter Account Number"
                    />
                  </div>
                </div>

                {/*AddBankAccount */}
                <div className="col-sm-9 pt-3 pb-2">
                    <button type="submit" className="btn-save-button-all" onClick={handleAddBankAccount}>Add Bank Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEmail">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEmail"
              aria-expanded="false"
              aria-controls="collapseEmail"
            >
              Email
            </button>
          </h2>
          <div
            id="collapseEmail"
            className="accordion-collapse collapse"
            aria-labelledby="headingEmail"
            data-bs-parent="#employeeAccordion"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-12">
                  <strong style={labelStyle}>Email:</strong> {employeeData.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
