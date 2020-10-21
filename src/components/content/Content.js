import React from 'react';
import Navbar from './navbar/Navbar'
import Main from './main/Main'
import Footer from './footer/Footer'

function Content(props) {
  return (
    <>
        
      <div id="content-wrapper" className="d-flex flex-column">
          
        <div id="content">
            
          <Navbar />
            
          <Main 
          
            products={props.products}

            users={props.users}

          />

        </div>

        <Footer />

      </div>

    </>
  );
}

export default Content;