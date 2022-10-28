import React from 'react';

import { AppContext } from '../context/app-context';

const Header = () => {
  return (
    <AppContext.Consumer>
      {({ isNavOpen, handleNav }) => {
        return null;
      }}
    </AppContext.Consumer>
  );
};
