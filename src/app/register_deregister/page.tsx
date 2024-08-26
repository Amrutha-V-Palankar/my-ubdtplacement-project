import React from 'react';

const RegisterDeregisterPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <header style={{ width: '100%', padding: '10px 20px', backgroundColor: 'grey', color: 'white', textAlign: 'center' }}>
        <h1>TPO, UBDTCE</h1>
      </header>

      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <h2 style={{ color: '#000', marginBottom: '20px' }}>Manage Registrations to Companies</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Register Container */}
        <div style={{ width: '45%', backgroundColor: '#d3d3d3', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: '#000', marginBottom: '10px' }}>Register to Attend</h3>
          <label htmlFor="register-company" style={{ color: '#000', marginBottom: '10px', display: 'block' }}>Select Company</label>
          <select id="register-company" style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
            <option>No Companies</option>
          </select>
          <button style={{ width: '100%', padding: '10px', backgroundColor: 'lightblue', color: 'white', border: 'none', borderRadius: '5px' }}>Register</button>
        </div>

        {/* De-Register Container */}
        <div style={{ width: '45%', backgroundColor: '#d3d3d3', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: '#000', marginBottom: '10px' }}>De-Register</h3>
          <label htmlFor="deregister-company" style={{ color: '#000', marginBottom: '10px', display: 'block' }}>Select Company</label>
          <select id="deregister-company" style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
            <option>No Companies</option>
          </select>
          <button style={{ width: '100%', padding: '10px', backgroundColor: 'lightblue', color: 'white', border: 'none', borderRadius: '5px' }}>De-Register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterDeregisterPage;
