import React from 'react';

export default function Header() {
  return (
    <nav
      className="navbar navbar-dark px-4 d-flex justify-content-between"
      style={{ backgroundColor: '#2d3350' }}
    >
      <div className="d-flex align-items-center">
        <div className="logo-shape d-flex justify-content-center align-items-center me-2">
          <span className="text-white fw-bold">S</span>
        </div>
        <span className="text-white fw-bold">WIFT</span>
      </div>

      <div className="d-flex align-items-center">
        <div
          className="rounded-circle bg-light text-dark d-flex justify-content-center align-items-center"
          style={{
            width: '40px',
            height: '40px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          EH
        </div>
        <span className="text-white ms-2">Ervin Howell</span>
      </div>
    </nav>
  );
}
