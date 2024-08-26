// // src/app/about/page.tsx

// import React from 'react';


// const AboutPage = () => {
//   return (
//     <div>
       
//       <h1>About Us</h1>
//       <p>Welcome to the About page!</p>
//     </div>
//   );
// };

// export default AboutPage;

// src/app/about/page.tsx

import React from 'react';

const AboutPage = () => {
  const headerStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '20px',
    textAlign: 'center' as 'center',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    fontSize: '16px',
    lineHeight: '1.6',
  };

  return (
    <div>
      {/* Header with inline styling */}
      <header style={headerStyle}>
        <h1>University BDT College of Engineering</h1>
      </header>
      
      {/* Main content container with inline styling */}
      <div style={containerStyle}>
        <h2>About UBDTCE</h2>
        <p>
    University B.D.T. College of Engineering (UBDTCE), located in Davangere, Karnataka, was established in 1951. The college was named after Brahmappa Devendrappa Tavanappanavar (BDT), in honor of his contributions and the donation of 1.5 lakhs rupees by B.T. Chandranna for constructing the building in memory of his uncle and father. The foundation stone was laid by the then-Maharaja of Mysore, Sri Jayachamarajendra Wodeyar Bahadur, on August 7, 1951, and the building was inaugurated on September 24, 1956.
</p>

<p>
    Initially, UBDTCE offered only a civil engineering branch. Over the years, the college expanded its offerings to include Mechanical Engineering and Electrical & Electronics Engineering in 1957, Electronics & Communication Engineering in 1972, Computer Science and Instrumentation Technology in 1984, and Industrial & Production Engineering in 1996. The undergraduate intake across these branches now stands at 390. A postgraduate course in Production Engineering Systems Technology was introduced in 1987.
</p>

<p>
    On June 1, 1992, the college became a constituent engineering college of Kuvempu University and was subsequently renamed University B.D.T. College of Engineering. In 2003, seven additional postgraduate courses were introduced, increasing the total postgraduate intake to 175. The college has awarded around 40 Ph.Ds, with many research scholars currently pursuing their doctoral degrees in various engineering and technology fields. As of now, the college has approximately 2,000 students.
</p>

<p>
    Following the formation of Davangere University, UBDTCE became a constituent college of the university on August 18, 2009. Later, on February 24, 2011, the college was transferred to Visvesvaraya Technological University (VTU), Belgaum, as a constituent engineering college. VTU plans to introduce MBA and MCA courses in the near future.
</p>

<p>
    UBDTCE is involved in consultancy work across various engineering fields including civil, electrical, and electronics. The college was one of fourteen institutions in Karnataka to receive World Bank-aided TEQIP Project Phase-I, utilizing a grant of nine crores for infrastructure development and quality enhancement. The institution anticipates further support through World Bank-aided TEQIP Project Phase-II to bolster its research and development activities.
</p>

<p>
    Accredited by AICTE, the college’s undergraduate courses received NBA accreditation in 2001, with Computer Science and Engineering, Electronics, and Communication Engineering departments being reaccredited in 2009. Accreditation for other departments is underway.
</p>

<p>
    The college library, enriched with both rare old collections and new volumes, was significantly upgraded during TEQIP Phase-I. Students are actively engaged in co-curricular and extracurricular activities, with the annual cultural festival "Chaitra" providing a platform to showcase their talents.
</p>

<p>
    UBDTCE is a member of the Red Cross Society and features several facilities including the Science and Technology Entrepreneurs' Park (STEP), Industry Institute Partnership Cell (IIPC), ISTE Staff and Students Chapters, and a Co-operative Society. The college provides hostel accommodations for both boys and girls.
</p>

<p>
    The Placement & Training Center plays a vital role in securing employment for students, with regular visits from reputed companies such as TCS, Mindtree, Infosys, HCL, SLK Software, Siemens, Nokia, and Zindal. Celebrating its 60th anniversary in 2011, the college is planning to mark its diamond jubilee.
</p>

<p>
    Additionally, UBDTCE hosts a National Cadet Corps (NCC) Unit, which has been active in various NCC activities. In 2017, the college appointed a permanent NCC Officer, the first in nearly 3.5 decades.
</p>

      </div>
    </div>
  );
};

export default AboutPage;

