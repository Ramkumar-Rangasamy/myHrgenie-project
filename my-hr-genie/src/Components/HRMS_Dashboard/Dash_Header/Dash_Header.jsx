import React, { useState } from "react";
import "./Dash_Header.css";
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
  const [notifications, setNotifications] = useState([
    "New message from Admin",
    "System update scheduled",
    "Reminder: Meeting at 3 PM",
  ]);
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hrms-dashboard-header-container">
      <div className="hrms-dhc-lr-control">
        {/* Left Section */}
        <div className="hrms-dhc-header-left">
          <p className="hrms-dhc-header-left-content">Dashboard</p>
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
            <div className="notification-icon-container" onClick={() => setIsPopupOpen(true)}>
              <SiGooglemessages size="2rem" className="hrms-dhc-header-icon" />
              {notifications.length > 0 && (
                <span className="notification-count">{notifications.length}</span>
              )}
            </div>

            {/* Notification Popup */}
            {isPopupOpen && (
              <div className="notification-popup">
                <div className="popup-header">
                  <h5>Notifications</h5>
                  <IoClose size="1.5rem" className="close-btn" onClick={() => setIsPopupOpen(false)} />
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
            {isPopupOpen && <div className="popup-overlay" onClick={() => setIsPopupOpen(false)} />}

            {/* Other Icons */}
            <BsFillQuestionCircleFill size="2rem" className="hrms-dhc-header-icon" />

            {/* User Profile Icon */}
            <div className="profile-dropdown-container">
              <FaUserCircle
                size="2rem"
                className="hrms-dhc-header-profile-icons "
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="profile-dropdown">
                  <p className="dropdown-header">Director Name (SRAYS01)</p>
                  <ul>
                    <li><IoMdSettings size="1rem"/>Settings</li>
                    <li><IoIosCheckbox size="1rem"/>Change Password</li>
                    <li><BiSolidUserCircle  size="1rem"/> My Profile</li>
                    <li><RiInboxArchiveFill  size="1rem"/> Secure Inbox</li>
                    <li><BiSolidRightArrowSquare size="1.2rem"/> Sign out</li>
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
