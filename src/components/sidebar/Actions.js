import React from 'react';

function Actions() {
  return (
    <>
      <div className="sidebar-heading">Acciones</div>
      
      <li className="nav-item">
      <a className="nav-link" href="/">
          <i className="fas fa-fw fa-chart-pie" />
          <span>Totales</span></a>
      </li>

      <li className="nav-item">
      <a className="nav-link" href="/">
          <i className="fas fa-fw fa-layer-group" />
          <span>Categorías</span></a>
      </li>

      <li className="nav-item">
      <a className="nav-link collapsed" href="/">
          <i className="fas fa-fw fa-clipboard-list"/>
          <span>Último producto</span>
      </a>
      </li>
      
      <li className="nav-item">
      <a className="nav-link" href="/">
          <i className="fas fa-fw fa-table" />
          <span>Tabla de productos</span></a>
      </li>
      
      <hr className="sidebar-divider d-none d-md-block" />
    </>
  );
}

export default Actions;