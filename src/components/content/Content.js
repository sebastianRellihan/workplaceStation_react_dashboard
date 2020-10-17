import React from 'react';
import Navbar from './navbar/Navbar'
import Main from './main/Main'
import Footer from './footer/Footer'

function Content() {
  return (
    <>
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                
              <Navbar />
                
              <Main />

            </div>
            {/* End of Main Content */}
                <Footer />
        </div>
        {/* End of Content Wrapper */}
    </>
  );
}

export default Content;