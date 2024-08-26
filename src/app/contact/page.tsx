// src/app/contact/page.tsx

import React from 'react';

const ContactPage = () => {
  const headerStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '20px',
    textAlign: 'center' as 'center',
    fontSize: '24px',
    fontWeight: 'bold' as 'bold',
  };

  const containerStyle = {
    backgroundColor: '#f2f2f2', // Light grey color
    padding: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as 'center',
    margin: '20px auto',
    maxWidth: '600px',
    position: 'relative' as 'relative',
  };

  const headingStyle = {
    margin: '10px 0',
  };

  const paragraphStyle = {
    margin: '5px 0',
  };

  return (
    <div>
      <header style={headerStyle}>
        Contact Info of UBDTCE Placement Office
      </header>
      <div style={containerStyle}>
        <h3 style={headingStyle}>Placement Officer</h3>
        <p style={paragraphStyle}>Dr. Ravindra P.Rajput</p>
        <h3 style={headingStyle}>Office Phone</h3>
        <p style={paragraphStyle}>+ 08192 - 223683</p>
        <h3 style={headingStyle}>Mobile Phone</h3>
        <p style={paragraphStyle}>+91 9886083949</p>
        <h3 style={headingStyle}>Official Mail ID</h3>
        <p style={paragraphStyle}>placement@udtce.org , ubdtplacement@gmail.com , ubdtplacement@yahoo.com</p>
      </div>
    </div>
  );
};

export default ContactPage;
