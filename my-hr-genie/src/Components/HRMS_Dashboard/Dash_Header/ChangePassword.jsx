import React, { useState } from 'react';

const ChangePassword = () => {

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add password validation and API call here
    alert('Password changed successfully!');
  };

  return (
    <div>
      <div className="hrms-dash-emp-All-components-titles-same-card-header">
       <h4>Employee Portal</h4>
      </div>
      <div className="container mt-4 p-5">
        <div className="card  shadow p-2">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <small className="text-muted fs-5">
                Please choose a strong password and don’t reuse it for other accounts.
              </small>

              <div className="mt-3 mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg w-80"
                  placeholder="Old Password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="New Password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm New Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center mb-2">
                <button type="submit" className="btn-save-button-all"> Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>  
   
  )
}

export default ChangePassword