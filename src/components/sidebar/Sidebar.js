import React from 'react';
import Logo from './Logo';
import Dashboard from './Dashboard';
import Actions from './Actions';
import BackToWS from './BackToWS';

function Sidebar() {
  return (
    <>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <Logo />
          
          <Dashboard />

          <Actions />

          <BackToWS />
      </ul>
    </>
  );
}

export default Sidebar;