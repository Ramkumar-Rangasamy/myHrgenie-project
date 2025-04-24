import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import "../Dash_Stylecss/Dash_Header.css";

import { RiSearchLine } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoIosCheckbox } from "react-icons/io";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiInboxArchiveFill } from "react-icons/ri";
import { BiSolidRightArrowSquare } from "react-icons/bi";

const Dash_Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Map routes to header titles
  const routeTitles = {
    "/hrms/dashboard/main-dashboard-page": "Dashboard",
    "/hrms/dashboard/change-password": "Change Password",
    "/hrms/dashboard/myprofile": "My profile",
    "/hrms/dashboard/secure-inbox": "Secure Inbox",
    "/hrms/dashboard/employee-record-add":"Employee On-Boarding",
    "/hrms/dashboard/employee-record-modify":"Employee On-Boarding",
  };

  // Get the title dynamically based on the current route
  const currentTitle = routeTitles[location.pathname] || "Dashboard";

  const handleNavigation = (path) => {
    setIsDropdownOpen(false);
    setTimeout(() => navigate(path), 150);
  };

  // Close dropdown when clicking outside screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [notifications, setNotifications] = useState([
    "New message from Admin",
    "System update scheduled",
    "Reminder: Meeting at 3 PM",
  ]);

  return (
    <div className="hrms-dashboard-header-container">
      <div className="hrms-dhc-lr-control">
        {/* Left Section */}
        <div className="hrms-dhc-header-left">
          <p className="hrms-dhc-header-left-content">{currentTitle}</p>{" "}
          {/* Dynamic title */}
        </div>

        {/* Right Section */}
        <div className="hrms-dhc-header-right">
          <div className="search-container">
            <input
              type="text"
              className="hrms-dhc-search-box"
              placeholder="Search by anything"
            />
            <button className="search-btn">
              <RiSearchLine size="1.5rem" />
            </button>
          </div>

          {/* Icons Section */}
          <div className="nfn-qun-profile-iocns-container">
            {/* Notifications Icon */}
            <div
              className="notification-icon-container"
              onClick={() => setIsPopupOpen(true)}
            >
              <SiGooglemessages size="2rem" className="hrms-dhc-header-icon" />
              {notifications.length > 0 && (
                <span className="notification-count">
                  {notifications.length}
                </span>
              )}
            </div>

            {/* Notification Popup */}
            {isPopupOpen && (
              <div className="notification-popup">
                <div className="popup-header">
                  <h5>Notifications</h5>
                  <IoClose
                    size="1.5rem"
                    className="close-btn"
                    onClick={() => setIsPopupOpen(false)}
                  />
                </div>
                <div className="popup-content">
                  {notifications.length > 0 ? (
                    notifications.map((note, index) => (
                      <div key={index} className="notification-item">
                        {note}
                      </div>
                    ))
                  ) : (
                    <div className="notification-empty">No notifications</div>
                  )}
                </div>
              </div>
            )}

            {/* Overlay when popup is open */}
            {isPopupOpen && (
              <div
                className="popup-overlay"
                onClick={() => setIsPopupOpen(false)}
              />
            )}

            <BsFillQuestionCircleFill
              size="2rem"
              className="hrms-dhc-header-icon"
            />

            <div className="profile-dropdown-container" ref={dropdownRef}>
              <FaUserCircle
                size="2rem"
                className="hrms-dhc-header-profile-icons"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />

              {isDropdownOpen && (
                <div className="profile-dropdown">
                  <p className="dropdown-header">Director Name (SRAYS01)</p>
                  <ul>
                    <li>
                      <IoMdSettings size="1rem" /> Settings
                    </li>

                    <li
                      onClick={() =>
                        handleNavigation("/hrms/dashboard/change-password")
                      }
                    >
                      <IoIosCheckbox size="1rem" /> Change Password
                    </li>

                    <li 
                      onClick={() =>
                        handleNavigation("/hrms/dashboard/myprofile")
                      }
                    >
                      <BiSolidUserCircle size="1rem" /> My Profile
                    </li>

                    <li
                      onClick={() =>
                        handleNavigation("/hrms/dashboard/secure-inbox")
                      }
                    >
                      <RiInboxArchiveFill size="1rem" /> Secure Inbox
                    </li>
                    
                    <li>
                      <BiSolidRightArrowSquare size="1.2rem" /> Sign out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash_Header;
