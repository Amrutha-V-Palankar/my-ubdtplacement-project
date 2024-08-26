// src/app/login/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    paddingTop: '60px', // Space for the fixed header
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  };

  const linkStyle = {
    display: 'block',
    textAlign: 'center' as 'center',
    color: 'blue',
    textDecoration: 'none',
    marginTop: '10px',
  };

  const headerStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '15px 0',
    textAlign: 'center' as 'center',
    fontSize: '24px',
    fontWeight: 'bold' as 'bold',
    position: 'fixed' as 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '1000',
  };

  const backLinkStyle = {
    display: 'block',
    textAlign: 'center' as 'center',
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const handleLogin = () => {
    // Perform validation here if needed
    router.push('/portal'); // Redirect to the portal page after login
  };

  return (
    <div>
      <div style={headerStyle}>
        TPO, UBDTCE
      </div>
      <div style={containerStyle}>
        <div 
          style={backLinkStyle} 
          onClick={() => router.push('/')}
        >
          Click Here to navigate back to homepage
        </div>
        <div style={formStyle}>
          <h2>Sign in to start your session</h2>
          <input type="text" placeholder="Register No" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button style={buttonStyle} onClick={handleLogin}>Login</button>
          <a href="/forgot-password" style={linkStyle}>I forgot my password</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
