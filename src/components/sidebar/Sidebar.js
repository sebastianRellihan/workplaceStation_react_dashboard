import React from 'react';
import Logo from './Logo';
import Dashboard from './Dashboard';
import Actions from './Actions';

function Sidebar() {
  return (
    <>
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Logo />
            
            <Dashboard />

            <Actions />
        </ul>
        {/* End of Sidebar */}
    </>
  );
}

export default Sidebar;