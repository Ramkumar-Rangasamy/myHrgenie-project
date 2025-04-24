import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Dash_Stylecss/Dash_Sidebar.css';
import brandLogo from "../../../Assets/brandlogo.png";

// Sidebar icons
import { FaHome, FaBars, FaUsersCog, FaUsers } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { PiIdentificationCardFill } from "react-icons/pi";
import { RiTimeZoneFill, RiExchangeBoxFill } from "react-icons/ri";
import { BsStopwatchFill } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dash_Sidebar = ({ setHeaderTitle }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(localStorage.getItem('lastActiveItem') || '/main-dashboard-page');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      title: "Dashboard",
      path: "/hrms/dashboard/main-dashboard-page",
      icon: <FaHome />,
    },
    {
      title: "Employee On-Boarding",
      icon: <FaUsersCog />,
      submenu: [
        { title: "Employee Record - Add", path: "/hrms/dashboard/employee-record-add" },
        { title: "Employee Record - Modify", path: "/hrms/dashboard/employee-record-modify" },
        { title: "Employee On-boarding", path: "/employee/onboarding" },
        { title: "PF Account", path: "/employee/pf" },
        { title: "ESI Account", path: "/employee/pf" },
        { title: "Reporting Change Request", path: "/employee/change-request" },
        { title: "Reporting Change Approval", path: "/employee/change-request" },
        { title: "Reporting Change Cancel", path: "/employee/change-request" },
      ],
    },
    {
      title: "Off Time - Setup",
      icon: <RiTimeZoneFill />,
      submenu: [
        { title: "Leave Monthly ", path: "/offtime/leave-application" },
        { title: "Cancel Time Off - Approval ", path: "/offtime/leave-approval" },
        { title: "Attendance Entry ", path: "/offtime/holiday-list" },
        { title: "Attendance Report  ", path: "/offtime/holiday-list" },
      ],
    },
    {
      title: "Off Time",
      icon: <BsStopwatchFill />,
      submenu: [
        { title: "Apply Time Off ", path: "/offtime/sick-leave" },
        { title: " Approve Time Off ", path: "/offtime/casual-leave" },
        { title: "Cancel Time Off ", path: "/offtime/work-from-home" },
      ],
    },
    {
      title: "Team",
      icon: <FaUsers />,
      submenu: [
        { title: "Attendance Report", path: "/team/members" },
      ],
    },
    {
      title: "HR Team",
      icon: <BsPersonFillGear />,
      submenu: [
        { title: "Profile Report", path: "/hr-team/policies" },
      ],
    },
    {
      title: "Onboard Pay Setup",
      icon: <PiIdentificationCardFill />,
      submenu: [
        { title: "Employee Pay Structure ", path: "/hrms/dashboard/salary-structure" },
        { title: "Compensation Request  ", path: "/hrms/dashboard/bonuses" },
        { title: "Compensation Approval  ", path: "/hrms/dashboard/deductions" },
        { title: "Employee Flexi Pay ", path: "/hrms/dashboard/deductions" },
        { title: "Employee Pay - View   ", path: "/hrms/dashboard/EmployeePay/View" },
      ],
    },
    {
      title: "Pay Process",
      icon: <RiExchangeBoxFill />,
      submenu: [
        { title: "Pay Month ", path: "/hrms/dashboard/PayMonth" },
        { title: "Employee Pay - View ", path: "/hrms/dashboard/EmployeePay/View" },
        { title: "Pay Process ", path: "/hrms/dashboard/PayProcess" },
        { title: "Pay Slip  ", path: "/hrms/dashboard/PaySlip" },
        { title: "Pay Report ", path: "/hrms/dashboard/PayReport" },
      ],
    },
  ];
  



  // Update active item when location changes
  useEffect(() => {
    setActiveItem(location.pathname);
    localStorage.setItem('lastActiveItem', location.pathname);
    
    // Check if the active route belongs to any submenu and keep the parent menu open
    menuItems.forEach(item => {
      if (item.submenu?.some(sub => sub.path === location.pathname)) {
        setActiveMenu(item.title);
      }
    });
  }, [location.pathname]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleMenuClick = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <div className={`dash-hrms-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="dash-hrms-logo-container">
        {isSidebarOpen ? (
          <>
            <img src={brandLogo} alt="Logo" className="logo" />
            <button className="toggle-button" onClick={toggleSidebar}>
              <IoClose size="1.8rem" />
            </button>
          </>
        ) : (
          <button className="toggle-button toggle-button-bar" onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}
      </div>

      {/* Sidebar Menu */}
      <ul className="sidebar-menu-admin">
        {menuItems.map((item, index) => {
          const isParentActive = item.submenu?.some(sub => sub.path === activeItem);

          return (
            <li key={index} className={`menu-item ${activeItem === item.path || isParentActive ? 'active' : ''}`}>
              {item.path ? (
                <Link to={item.path} className="menu-link" onClick={() => setHeaderTitle(item.title)}>
                  <div className="hrms-dash-sidebar-menu-icon-sub-contain">
                    <span className="sidebar-icon">{item.icon}</span>
                    <span className="span-title">{item.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="menu-link" onClick={() => handleMenuClick(item.title)}>
                  <div className="hrms-dash-sidebar-menu-icon-sub-contain">
                    <span className="sidebar-icon">{item.icon}</span>
                    <span className="span-title">{item.title}</span>
                  </div>

                  {/* Submenu Arrow Icon */}
                  {item.submenu && (
                    <span className="hrms-dash-sidebar-menu-arrow">
                      {activeMenu === item.title ? <MdOutlineKeyboardArrowUp size="1.5rem" /> : <MdOutlineKeyboardArrowDown size="1.5rem" />}
                    </span>
                  )}
                </div>
              )}

              {/* Submenu Items */}
              {item.submenu && activeMenu === item.title && (
                <ul className="hrms-dash-sidebar-submenu-list">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className={`hrms-dash-sidebar-submenu-item ${activeItem === subItem.path ? 'active' : ''}`}>
                      <Link to={subItem.path} className="hrms-dash-sidebar-submenu-menu-link" onClick={() => setHeaderTitle(subItem.title)}>
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dash_Sidebar;
