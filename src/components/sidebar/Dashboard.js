import React from 'react';

function Dashboard() {
  return (
    <>
      <li className="nav-item active">
      <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>WS Dashboard</span></a>
      </li>

      <hr className="sidebar-divider" />
    </>
  );
}

export default Dashboard;