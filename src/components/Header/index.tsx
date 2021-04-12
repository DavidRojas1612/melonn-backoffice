import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Button from '../Button';

function Header() {
  const location = useLocation();
  const history = useHistory();

  return (
    <nav className="w-full h-60 bg-primary shadow mb-8">
      <div className="w-4/5 h-full  relative mx-auto grid grid-cols-1">
        <h1 className="font-poppins text-6xl text-white capitalize flex items-center	justify-center tracking-wide">
          melonn backoffice
        </h1>
        {location.pathname !== '/' && (
          <div className="w-full flex absolute top-1/2 transform -translate-y-1/2 justify-end">
            <Button variant="secondary" onClick={() => history.push('/')}>
              Home
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
