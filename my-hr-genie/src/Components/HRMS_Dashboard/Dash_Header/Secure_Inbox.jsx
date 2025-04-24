import React, { useState } from 'react';

//using Popup modal css imported
import '../Dash_Stylecss/Modal_Layer.css';

const Secure_Inbox = () => {
  const allData = [
    {
      employeeCode: 'HR001',
      employeeName: 'Alice Johnson',
      jobFamily: 'Human Resources',
      title: 'HR Manager',
      subject: 'Login Details for HR Portal',
    },
    {
      employeeCode: 'FIN002',
      employeeName: 'Robert Smith',
      jobFamily: 'Finance',
      title: 'Accountant',
      subject: 'Your Secure Finance Login Token',
    },
    {
      employeeCode: 'IT003',
      employeeName: 'Emily Davis',
      jobFamily: 'IT Services',
      title: 'System Analyst',
      subject: 'System Update Credentials',
    },
    {
      employeeCode: 'MKT004',
      employeeName: 'Michael Brown',
      jobFamily: 'Marketing',
      title: 'Marketing Executive',
      subject: 'Campaign Access Code',
    },
    {
      employeeCode: 'OPS005',
      employeeName: 'Jessica Wilson',
      jobFamily: 'Operations',
      title: 'Operations Lead',
      subject: 'Login Secret for Ops Dashboard',
    },
    {
      employeeCode: 'QA006',
      employeeName: 'David Martinez',
      jobFamily: 'Quality Assurance',
      title: 'QA Engineer',
      subject: 'Testing Platform Credentials',
    },
    {
      employeeCode: 'SA007',
      employeeName: 'Sarah Lee',
      jobFamily: 'Sales',
      title: 'Sales Manager',
      subject: 'Sales System Authentication Key',
    },
    {
      employeeCode: 'CS008',
      employeeName: 'Daniel Kim',
      jobFamily: 'Customer Support',
      title: 'Support Specialist',
      subject: 'Secure Message - Support Login',
    },
    {
      employeeCode: 'RD009',
      employeeName: 'Laura Garcia',
      jobFamily: 'R&D',
      title: 'Research Scientist',
      subject: 'Confidential Research Access Info',
    },
    {
      employeeCode: 'ENG010',
      employeeName: 'James Taylor',
      jobFamily: 'Engineering',
      title: 'Software Engineer',
      subject: 'Engineering Git Access Token',
    },
    {
      employeeCode: 'ADM011',
      employeeName: 'Linda Harris',
      jobFamily: 'Administration',
      title: 'Admin Executive',
      subject: 'Secure Admin Message',
    },
    {
      employeeCode: 'PR012',
      employeeName: 'Chris Clark',
      jobFamily: 'Public Relations',
      title: 'PR Officer',
      subject: 'Media Login Token - Confidential',
    },
    {
      employeeCode: 'TR013',
      employeeName: 'Patricia Lewis',
      jobFamily: 'Training',
      title: 'Training Coordinator',
      subject: 'Trainee Portal Credentials',
    },
    {
      employeeCode: 'SEC014',
      employeeName: 'Steven Walker',
      jobFamily: 'Security',
      title: 'Security Supervisor',
      subject: 'Access Code for Secure Premises',
    },
    {
      employeeCode: 'LAW015',
      employeeName: 'Barbara Hall',
      jobFamily: 'Legal',
      title: 'Legal Advisor',
      subject: 'Confidential Legal Login Details',
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(allData.length / itemsPerPage);

  const getVisiblePages = () => {
    const gap = 2;
    let start = Math.max(currentPage - gap, 1);
    let end = Math.min(start + 4, totalPages);
    if (end - start < 4) start = Math.max(end - 4, 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handleChangePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const currentItems = allData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const viewbuttonstyle = (index) => ({
    border: '1.5px solid #2A2A74',
    background: hoveredIndex === index ? '#2A2A74' : 'transparent',
    color: hoveredIndex === index ? '#fff' : '#2A2A74',
    outline: 'none',
    borderRadius: '4px',
    padding: '3px 20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="hrms-dash-emp-All-components-titles-same-card-header">
        <h4>Employee Record Search</h4>
        <p className="text-red-600 text-danger font-semibold mt-2 mb-0">
          ONCE VIEWED, THE MESSAGE WILL BE DELETED
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-b px-5 pt-3">
        <table className="w-100 table-fixed border">
          <thead className="bg-white border-b border-gray-400">
            <tr className="text-black font-bold">
              <th className="px-3 py-2 border border-gray-300">Employee Code</th>
              <th className="px-3 py-2 border border-gray-300">Employee Name</th>
              <th className="px-3 py-2 border border-gray-300">Job Family</th>
              <th className="px-3 py-2 border border-gray-300">Title</th>
              <th className="px-3 py-2 border border-gray-300">Subject</th>
              <th className="px-3 py-2 border border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
          {currentItems.map((item, index) => (
              <tr key={index} className="border-t 0 text-xs">
                <td className="px-3 py-2 whitespace-nowrap border">{item.employeeCode}</td>
                <td className="px-3 py-2 whitespace-nowrap border">{item.employeeName}</td>
                <td className="px-3 py-2 whitespace-nowrap border">{item.jobFamily}</td>
                <td className="px-3 py-2 whitespace-nowrap border">{item.title}</td>
                <td className="px-3 py-2 whitespace-nowrap border text-left">
                  <span className="truncate inline-block w-40">{item.subject}</span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap border text-center">
                  <button
                     className="text-blue-500 text-xs"
                     style={viewbuttonstyle(index)}
                     onMouseEnter={() => setHoveredIndex(index)}
                     onMouseLeave={() => setHoveredIndex(null)}
                     onClick={() => handleViewClick(item)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h2 className="modal-heading">Secure Inbox View</h2>
            <div className="modal-grid">
              <div><strong>Employee Code:</strong> {selectedItem.employeeCode}</div>
              <div><strong>Employee Name:</strong> {selectedItem.employeeName}</div>
              <div><strong>Job Family:</strong> {selectedItem.jobFamily}</div>
              <div><strong>Title:</strong> {selectedItem.title}</div>
              <div className="full-width"><strong>Subject:</strong> {selectedItem.subject}</div>
              <div className="full-width"><strong>Secure Message:</strong> Secret Key X8!puN7W — Once read, this message will be deleted.</div>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="d-flex justify-center items-center mx-5 my-4 gap-1">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border disabled:opacity-50"
        >
          Previous
        </button>

        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => handleChangePage(page)}
            className={`px-3 py-1 border ${page === currentPage ? 'bg-blue-600 text-white' : ''}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Secure_Inbox;
