import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const provider = `
// src/context/app-context.js

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <AppContext.Provider value={{ isNavOpen, handleNav }}>
      {children}
    </AppContext.Provider>
  );
}
`;

const consumer = `
// src/components/header.js

import React from 'react';
import { AppContext } from '../context/app-context';

const Header = () => {
  return (
    <AppContext.Consumer>
      {({ isNavOpen, handleNav }) => {
        return ...
      }}
    </AppContext.Consumer>
  );
};
`;

const rootElement = `
// src/components/root-element.js

import React from 'react';

import { AppProvider } from '../context/app-context';

const RootElement = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default RootElement;
`;

const wrapRootElement = `
// ./gatsby-browser & gatsby-ssr.js

import React from 'react';
import RootElement from './src/components/root-element';

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};
`;

const Page = () => {
  return (
    <div className="flex flex-col gap-24 items-cetner justify-center">
      <div className="pt-16">
        <h1 className="text-center">React Context API</h1>
        <p className="text-center m-0">Use React's built in Context API to manage "mobile" navigation state</p>
        <div className="flex justify-center p-8">
          <a
            target="_blank"
            href="https://reactjs.org/docs/context.html"
            rel="noreferrer"
            className="text-center font-bold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-4 py-2 duration-200 transition-all hover:scale-110 hover:text-purple-100"
          >
            Documentation
          </a>
        </div>
      </div>
      <div className="py-6">
        <h2 className="text-center mb-2">AppProvider</h2>
        <p className="text-center mt-0">Create Context and Context Provider.</p>
        <CopyBlock text={provider} language="jsx" showLineNumbers={false} theme={dracula} wrapLines={true} codeBlock />
      </div>
      <div className="py-6">
        <h2 className="text-center mb-2">AppContext.Consumer</h2>
        <p className="text-center mt-0">Access state values from anywhere.</p>
        <CopyBlock text={consumer} language="jsx" showLineNumbers={false} theme={dracula} wrapLines={true} codeBlock />
      </div>
      <div className="py-6">
        <h2 className="text-center mb-2">RootElement</h2>
        <p className="text-center mt-0">Create a RootElement Component.</p>
        <CopyBlock text={rootElement} language="jsx" showLineNumbers={false} theme={dracula} wrapLines={true} codeBlock />
      </div>
      <div className="py-6">
        <h2 className="text-center mb-2">wrapRootElement</h2>
        <p className="text-center mt-0">Return the RootElement from wrapRootElement.</p>
        <CopyBlock text={wrapRootElement} language="jsx" showLineNumbers={false} theme={dracula} wrapLines={true} codeBlock />
      </div>
    </div>
  );
};

export default Page;
