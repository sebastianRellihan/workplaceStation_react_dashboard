import React from 'react';

function Logo() {
  return (
    <>
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
            <i className="fas fa-chart-line" />
        </div>
        <div className="sidebar-brand-text mx-3">Admin</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
    </>
  );
}

export default Logo;