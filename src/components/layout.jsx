/* eslint-disable */
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import { ErrorBoundary, Loading } from 'src/components/shared';


const Layout = () => {
  // useLoginRedirect(); 
  return (
    <div className="App wrapper overflow-hidden">
      <div className="flex-header">
        Header
      </div>
      <div className="flex-content overflow-auto bg-red">
        <div className="flex-row">
          <div className="menu">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/hei">HEI</NavLink></li>
              {/* <li>1234</li> */}
            </ul>
          </div>
          <div className="flex-column">
            <div className="flex-content">
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Outlet />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
