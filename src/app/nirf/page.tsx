// src/app/nirf/index.tsx

import React from 'react';

const NirfPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <h1>NIRF Submission</h1>
      <p>
        Click the link below to view the NIRF submission document for UBDT College of Engineering, Davanagere.
      </p>
      <a 
        href="/https://www.ubdtce.org/Documents/news/NIRF%20-Submitted%20-UBDT%20College%20of%20Engineering,%20Davanagere--20240131-.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#0070f3', textDecoration: 'underline' }}
      >
        View NIRF Submission PDF
      </a>
    </div>
  );
};

export default NirfPage;
