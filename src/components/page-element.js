import React from 'react';

import Header from './header';
import Footer from './footer';

const PageElement = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-darker-800 to-darker-900">
      <Header />
      <main className="mx-auto pt-24 max-w-5xl min-h-[calc(100vh-56px)] p-6">{children}</main>
      <Footer />
    </div>
  );
};

export default PageElement;
