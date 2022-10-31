import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { AppContext } from '../context/app-context';

const Header = () => {
  const {
    allSitePage: { nodes: pages }
  } = useStaticQuery(graphql`
    {
      allSitePage(filter: { path: { nin: ["/", "/404/", "/404.html", "/dev-404-page/"] } }) {
        nodes {
          path
        }
      }
    }
  `);

  return (
    <header className="fixed w-full h-14 flex items-center shadow-lg backdrop-blur bg-neutral-900 sm:bg-neutral-900/80 border-b border-b-black z-10">
      <nav className="mx-auto w-full max-w-5xl px-6 py-3 flex items-center justify-between">
        <div className="flex gap-x-4 items-center">
          <Link to="/" className="z-10 duration-200 transition-transform hover:scale-110 hover:stroke-purple-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" className="[--start-color:theme(colors.purple.500)]" stopColor="var(--start-color)" />
                  <stop offset="100%" className="[--end-color:theme(colors.pink.500)]" stopColor="var(--end-color)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#logo-gradient)"
                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
              />
            </svg>
          </Link>

          <AppContext.Consumer>
            {({ isNavOpen, handleNav }) => {
              const styles = isNavOpen ? 'top-14 sm:top-0 opacity-100' : '-top-32 sm:top-0 opacity-0 sm:opacity-100';
              return (
                <ul
                  className={`absolute left-0 flex-col bg-black/90 border-b border-b-neutral-700 w-full gap-y-4 p-4 flex m-0 list-none items-center sm:flex-row sm:relative sm:bg-transparent sm:border-b-transparent sm:w-auto sm:p-0 ${styles}`}
                >
                  {pages.map((page, index) => {
                    const { path } = page;
                    return (
                      <li key={index} className="text-center sm:text-left m-0 p-0 w-full">
                        <Link
                          to={path}
                          onClick={handleNav}
                          className="capitalize no-underline flex rounded text-neutral-400 sm:text-neutral-400 hover:text-neutral-200 sm:hover:bg-neutral-900/80 p-2 sm:px-4 sm:py-2 sm:inline"
                        >
                          {path.replace(/\//g, '')}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            }}
          </AppContext.Consumer>
        </div>
        <AppContext.Consumer>
          {({ isNavOpen, handleNav }) => {
            return (
              <button className="block text-neutral-400 z-10 sm:hidden hover:text-purple-500" onClick={handleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={`${
                      isNavOpen
                        ? 'M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                        : 'M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                    }`}
                  />
                </svg>
              </button>
            );
          }}
        </AppContext.Consumer>
      </nav>
    </header>
  );
};

export default Header;
