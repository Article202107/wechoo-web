import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsApp, BsSearch } from 'react-icons/bs';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import './Header.css';

export default function Header() {
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in',
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y;

      const shouldBeStyle = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        transform: isVisible ? 'none' : 'translate(0, -100%)',
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle],
  );

  return (
    <header className="header" id="navbar-header" style={{ ...headerStyle }}>
      <div className="header__logo">
        <div className="logo">
          <BsApp />
        </div>
        <div className="logoName">
          <Link to="/">Wechoo</Link>
        </div>
      </div>

      <div className="header__icons">
        <a href="#">
          <BsSearch />
        </a>
      </div>
    </header>
  );
}
