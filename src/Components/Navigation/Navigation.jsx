import React from 'react';
import Logo from '../../images/logo.svg';

export default function Navigation() {
  return (
    <div className="navigation">
      <img src={Logo} alt="логотип" className="navigation__logo" />
    </div>
  );
}
