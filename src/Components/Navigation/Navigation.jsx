import React from 'react';
import Logo from '../../images/logo.svg';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={Logo} alt="логотип" />
        <p className="navigation__text">tmc</p>
      </div>
      <div className="nav__top">
        <ul className="navigation__elements">
          <li className="navigation__element">
            <button className="navigation__button navigation__button_active">
              <i className="ri-calendar-check-line ri-xl"></i>
            </button>
          </li>
          <li className="navigation__element">
            <button className="navigation__button">
              <i className="ri-booklet-line ri-xl"></i>
            </button>
          </li>
          <li className="navigation__element">
            <button className="navigation__button">
              <i className="ri-truck-line ri-xl"></i>
            </button>
          </li>
          <li className="navigation__element">
            <button className="navigation__button ">
              <i className="ri-admin-line ri-xl"></i>
            </button>
          </li>
          <li className="navigation__element">
            <button className="navigation__button">
              <i className="ri-briefcase-line ri-xl"></i>
            </button>
          </li>
          <li className="navigation__element">
            <button className="navigation__button">
              <i className="ri-wechat-line ri-xl"></i>
            </button>
          </li>
          <li className="navigation__element">
            <button className="navigation__button">
              <i className="ri-alert-line ri-xl"></i>
            </button>
          </li>
        </ul>
      </div>
      <div className="nav__bot">
        <button className="navigation__button">
          <i className="ri-arrow-right-circle-line ri-xl"></i>
        </button>
      </div>
    </nav>
  );
}
