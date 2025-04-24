import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

//Imported Components
import Dash_Layouts from '../Dash_Layouts/Dash_Layouts';

//Dashboard main page
import Dash_Main from '../Dash_Pages/Dash_Main/Dash_Main';

//Header
import ChangePassword from '../Dash_Header/ChangePassword';
import Myprofile from '../Dash_Header/Myprofile';
import Secure_Inbox from '../Dash_Header/Secure_Inbox';

//Sidebar items
import EmployeeRecordAdd from '../Dash_Pages/EmployeeOnBoarding/EmployeeRecordAdd/EmployeeRecordAdd';
import EmployeeRecordModify from '../Dash_Pages/EmployeeOnBoarding/EmployeeRecordModify/EmployeeRecordModify';



const Dash_ConntectRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dash_Layouts />}>
          <Route index element={<Navigate to="main-dashboard-page" />} />
          <Route path="change-password" element={<ChangePassword/>} />
          <Route path="myprofile" element={<Myprofile/>}/>
          <Route path="secure-inbox" element={<Secure_Inbox/>}/>
          <Route path="main-dashboard-page" element={<Dash_Main />} />
          
          <Route path="employee-record-add" element={<EmployeeRecordAdd/>} />
          <Route path="employee-record-modify" element={<EmployeeRecordModify/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Dash_ConntectRoutes;
