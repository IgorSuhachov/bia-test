import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <p className="header__title">График смен</p>
      <div className="header__menu">
        <button className="header__notify">
          <i className="ri-notification-3-line ri-xl"></i>
        </button>
        <div className="header__user">
          <button className="header__avatar">КК</button>
          <i className="ri-arrow-drop-down-line ri-xl"></i>
        </div>
      </div>
    </header>
  );
}
