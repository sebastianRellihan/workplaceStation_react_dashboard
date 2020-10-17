import React from 'react';

function Actions() {
  return (
    <>
        {/* Heading */}
        <div className="sidebar-heading">Actions</div>
        {/* Nav Item - Pages */}
        <li className="nav-item">
        <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
        </a>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span></a>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span></a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
    </>
  );
}

export default Actions;