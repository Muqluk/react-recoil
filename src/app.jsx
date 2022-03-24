import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import { Helmet } from 'react-helmet-async';

import ProtectedRoute from 'src/components/shared/protected-route';

import Layout from 'src/components/layout';
import { ErrorBoundary, Loading, PageNotFound, SiteToast } from 'src/components/shared';

const Hei = React.lazy(() => import('src/components/domain-pages/hei/hei'));

import 'src/styles/main.scss';

const EmptyDashboard = () => (<div className="App wrapper">Welcome.  This is empty on purpose.</div>);

const App = () => (
  <ErrorBoundary>
    <SiteToast />
    <Helmet defaultTitle="intro to react-recoil" titleTemplate="%s | react-recoil" />
    <Suspense fallback={<Loading logo />}>
      <Routes>
        <Route path="/" element={ /* protects all child-routes  (Must be logged in) */
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>

          <Route index element={<EmptyDashboard />} />
          <Route path="hei/*" element={<Hei />} />

          <Route path="*" element={<PageNotFound />} /> {/* route of last-resort. */}
        </Route>
        <Route path="logout" element={<>Logging Out Here</>} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);

export default App;
