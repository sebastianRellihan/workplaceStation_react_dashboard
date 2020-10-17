import React from 'react';

function Dashboard() {
  return (
    <>
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span></a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
    </>
  );
}

export default Dashboard;