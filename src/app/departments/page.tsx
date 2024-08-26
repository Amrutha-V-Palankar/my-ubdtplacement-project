// src/app/department/page.tsx
'use client';
import React, { useState } from 'react';

const DepartmentPage = () => {
  const [showBranches, setShowBranches] = useState(false);

  const containerStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    fontSize: '16px',
    lineHeight: '1.6',
  };

  const headerStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '20px',
    textAlign: 'center' as 'center',
    
  };

  const departmentsStyle = {
    cursor: 'pointer' as 'pointer',
    position: 'relative' as 'relative',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const branchesStyle = {
    display: showBranches ? 'block' : 'none',
    position: 'absolute' as 'absolute',
    backgroundColor: '#f1f1f1',
    border: '1px solid #ddd',
    padding: '10px',
    top: '100%',
    left: '0',
    width: '300px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>

<header style={headerStyle}>
        <h1>University BDT College of Engineering Departments</h1>
      </header>
      <h1>Departments</h1>
      <div
        style={departmentsStyle}
        onMouseEnter={() => setShowBranches(true)}
        onMouseLeave={() => setShowBranches(false)}
      >
       Hover over it for Departments
        <div style={branchesStyle}>
          <h2>UG Courses</h2>
          <p>Electronics and Communication</p>
          <p>Electrical and Electronics</p>
          <p>Mechanical</p>
          <p>Computer Science</p>
          <p>Information Science</p>
          <p>Civil Engineering</p>

          <h2>PG Courses</h2>
          <p>MCA</p>
          <p>MBA</p>
          <p>Mtech</p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
