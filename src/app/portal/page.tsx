// import React from 'react';

// const PortalPage = () => {
//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'row' as 'row',
//     alignItems: 'flex-start' as 'flex-start',
//     justifyContent: 'flex-start' as 'flex-start',
//     minHeight: '100vh',
//     backgroundColor: '#f0f0f0',
//   };

//   const sidebarStyle = {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     width: '250px',
//     marginRight: '20px',
//     marginLeft: '20px',
//   };

//   const headerStyle = {
//     backgroundColor: 'grey',
//     color: 'white',
//     padding: '15px 0',
//     textAlign: 'center' as 'center',
//     fontSize: '24px',
//     fontWeight: 'bold' as 'bold',
//     position: 'fixed' as 'fixed',
//     top: '0',
//     left: '0',
//     width: '100%',
//     zIndex: '1000',
//   };

//   const navItemStyle = {
//     margin: '10px 0',
//     color: 'black',
//     textDecoration: 'none',
//     cursor: 'pointer',
//   };

//   return (
//     <div>
//       <div style={headerStyle}>
//         TPO, UBDTCE
//       </div>
//       <div style={{ ...containerStyle, paddingTop: '60px' }}>
//         <div style={sidebarStyle}>
//           <h3>Main Navigation</h3>
//           <nav>
//             <a href="#" style={navItemStyle}>Dashboard</a><br />
//             <a href="#" style={navItemStyle}>Register / De-Register</a><br />
//             <a href="#" style={navItemStyle}>Raise Ticket</a><br />
//             <a href="#" style={navItemStyle}>Registered Companies</a><br />
//             <a href="#" style={navItemStyle}>All Companies</a><br />
//             <a href="#" style={navItemStyle}>Profile</a><br />
//             <a href="#" style={navItemStyle}>Resume</a><br />
//             <a href="#" style={navItemStyle}>Contribute to Blog</a><br />
//             <a href="#" style={navItemStyle}>Change Password</a><br />
//             <a href="#" style={navItemStyle}>Blog</a><br />
//             <a href="#" style={navItemStyle}>Stats 2024</a><br />
//             <a href="#" style={navItemStyle}>Logout</a>
//           </nav>
//         </div>
//         <div>
//           {/* The main content of the portal can be added here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortalPage;


import React from 'react';
import { FaTachometerAlt, FaUserEdit, FaTicketAlt, FaBuilding, FaUsers, FaUserCircle, FaFileAlt, FaPenNib, FaLock, FaBlog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const PortalPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      {/* Header */}
      <header style={{ width: '100%', padding: '10px 20px', backgroundColor: 'grey', color: 'white', textAlign: 'center' }}>
        <h1>TPO, UBDTCE</h1>
      </header>

      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        {/* Sidebar Navigation */}
        <div style={{ width: '250px', backgroundColor: '#333', padding: '20px', color: '#fff', flexShrink: 0 }}>
          <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>MAIN NAVIGATION</h3>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaTachometerAlt style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>DASHBOARD</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaUserEdit style={{ marginRight: '10px' }} />
            <a href="register_deregister" style={{ color: '#fff', textDecoration: 'none' }}>REGISTER / DE-REGISTER</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaTicketAlt style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>RAISE TICKET</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaBuilding style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>REGISTERED COMPANIES</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaUsers style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>ALL COMPANIES</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaUserCircle style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>PROFILE</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaFileAlt style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>RESUME</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaPenNib style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>CONTRIBUTE TO BLOG</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaLock style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>CHANGE PASSWORD</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaBlog style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>BLOG</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaChartBar style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>STATS 2024</a>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <FaSignOutAlt style={{ marginRight: '10px' }} />
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>LOGOUT</a>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, backgroundColor: '#d3d3d3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ color: '#000', textAlign: 'center' }}>
            <h2>Welcome to your Dashboard</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalPage;
