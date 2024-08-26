// // // src/app/visit_portal/page.tsx

// // import React from 'react';

// // const VisitPortalPage = () => {
// //   const headerStyle = {
// //     backgroundColor: 'grey',
// //     color: 'white',
// //     padding: '20px',
// //     textAlign: 'center' as 'center',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   };

// //   const headingStyle = {
// //     fontSize: '24px',
// //     fontWeight: 'bold' as 'bold',
// //   };

// //   const navStyle = {
// //     display: 'flex',
// //     gap: '15px',
// //   };

// //   const linkStyle = {
// //     color: 'white',
// //     textDecoration: 'none',
// //     fontSize: '16px',
// //   };

// //   const containerStyle = {
// //     backgroundColor: 'purple',
// //     color: 'white',
// //     padding: '20px',
// //     borderRadius: '10px',
// //     textAlign: 'center' as 'center',
// //     margin: '50px auto',
// //     maxWidth: '600px',
// //   };

// //   const logoStyle = {
// //     marginBottom: '20px',
// //   };

// //   const headlineStyle = {
// //     fontSize: '28px',
// //     fontWeight: 'bold' as 'bold',
// //     marginBottom: '10px',
// //   };

// //   const subTextStyle = {
// //     fontSize: '14px',
// //   };

// //   return (
// //     <div>
// //       <header style={headerStyle}>
// //         <div style={headingStyle}>TPO UBDTCE</div>
// //         <nav style={navStyle}>
// //           <a href="/" style={linkStyle}>Home</a>
// //           <a href="/contact" style={linkStyle}>Contact</a>
// //           <a href="/nirf" style={linkStyle}>NIRF</a>
// //         </nav>
// //       </header>

// //       <div style={containerStyle}>
// //         <div style={logoStyle}>
// //           <img 
// //             src="https://pxl-duracuk.terminalfour.net/fit-in/768x432/filters:format(webp)/prod01/prodbucket01/media/durham-university/departments-/education/Teacher-training-partnerships.png" 
// //             alt="TPO Logo" 
// //             style={{ width: '200px', height: 'auto' }} 
// //           />
// //         </div>
// //         <div style={headlineStyle}>Know More about TPO</div>
// //         <div style={subTextStyle}>Dedicated portal for the students</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VisitPortalPage;


// // src/app/visit_portal/page.tsx

// import React from 'react';

// const VisitPortalPage = () => {
//   const headerStyle = {
//     backgroundColor: 'grey',
//     color: 'white',
//     padding: '20px',
//     textAlign: 'center' as 'center',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   };

//   const headingStyle = {
//     fontSize: '24px',
//     fontWeight: 'bold' as 'bold',
//   };

//   const navStyle = {
//     display: 'flex',
//     gap: '15px',
//   };

//   const linkStyle = {
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '16px',
//   };

//   const containerStyle = {
//     backgroundColor: 'purple',
//     color: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     textAlign: 'center' as 'center',
//     margin: '50px auto',
//     maxWidth: '600px',
//   };

//   const logoStyle = {
//     marginBottom: '20px',
//   };

//   const headlineStyle = {
//     fontSize: '28px',
//     fontWeight: 'bold' as 'bold',
//     marginBottom: '10px',
//   };

//   const subTextStyle = {
//     fontSize: '14px',
//     marginBottom: '20px',
//   };

//   const buttonStyle = {
//     backgroundColor: 'white',
//     color: 'lightblue',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '16px',
//     fontWeight: 'bold' as 'bold',
//     marginTop: '10px',
//   };

//   return (
//     <div>
//       <header style={headerStyle}>
//         <div style={headingStyle}>TPO UBDTCE</div>
//         <nav style={navStyle}>
//           <a href="/" style={linkStyle}>Home</a>
//           <a href="/contact" style={linkStyle}>Contact</a>
//           <a href="/nirf" style={linkStyle}>NIRF</a>
//         </nav>
//       </header>

//       <div style={containerStyle}>
//         <div style={logoStyle}>
//           <img 
//             src="https://pxl-duracuk.terminalfour.net/fit-in/768x432/filters:format(webp)/prod01/prodbucket01/media/durham-university/departments-/education/Teacher-training-partnerships.png" 
//             alt="TPO Logo" 
//             style={{ width: '200px', height: 'auto' }} 
//           />
//         </div>
//         <div style={headlineStyle}>Know More about TPO</div>
//         <div style={subTextStyle}>Dedicated portal for the students</div>
//         <button style={buttonStyle}>LOGIN</button>
//       </div>
//     </div>
//   );
// };

// export default VisitPortalPage;


// src/app/visit_portal/page.tsx

// src/app/visit_portal/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const VisitPortalPage = () => {
  const router = useRouter();

  const headerStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '20px',
    textAlign: 'center' as 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold' as 'bold',
  };

  const navStyle = {
    display: 'flex',
    gap: '15px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  };

  const containerStyle = {
    backgroundColor: 'purple',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center' as 'center',
    margin: '50px auto',
    maxWidth: '600px',
  };

  const logoStyle = {
    marginBottom: '20px',
  };

  const headlineStyle = {
    fontSize: '28px',
    fontWeight: 'bold' as 'bold',
    marginBottom: '10px',
  };

  const subTextStyle = {
    fontSize: '14px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'lightblue',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold' as 'bold',
    marginTop: '10px',
  };

  return (
    <div>
      <header style={headerStyle}>
        <div style={headingStyle}>TPO UBDTCE</div>
        <nav style={navStyle}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/nirf" style={linkStyle}>NIRF</a>
        </nav>
      </header>

      <div style={containerStyle}>
        <div style={logoStyle}>
          <img 
            src="https://pxl-duracuk.terminalfour.net/fit-in/768x432/filters:format(webp)/prod01/prodbucket01/media/durham-university/departments-/education/Teacher-training-partnerships.png" 
            alt="TPO Logo" 
            style={{ width: '200px', height: 'auto' }} 
          />
        </div>
        <div style={headlineStyle}>Know More about TPO</div>
        <div style={subTextStyle}>Dedicated portal for the students</div>
        <button style={buttonStyle} onClick={() => router.push('/login')}>LOGIN</button>
      </div>
    </div>
  );
};

export default VisitPortalPage;
