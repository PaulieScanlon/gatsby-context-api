import React from 'react';

import { AppProvider } from '../context/app-context';

const RootElement = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default RootElement;
