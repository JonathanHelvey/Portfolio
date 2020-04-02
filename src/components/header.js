import { Link } from 'gatsby';
import React, { useState } from 'react';

import useDocumentScrollThrottled from '../components/Hooks/useScroll';

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';
  return (
    <header className={`navbar ${shadowStyle} ${hiddenStyle}`}>
      <div>
        <ul className="ul-list">
          <li className="links">
            <Link className="links" to="/">
              <button type="button" className="button-links-nav">HOME</button>
            </Link>
          </li>
          <li className="links">
            <Link className="links" to="/#projects">
              <button type="button" className="button-links-nav"> PROJECTS</button>
            </Link>
          </li>
          <li className="links">
            <Link className="links" to="/#tech">
              <button type="button" className="button-links-nav">ABOUT</button>
            </Link>
          </li>
          <li className="links">
            <Link className="links" to="/contact/">
              <button type="button" className="button-links-nav">CONTACT</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
