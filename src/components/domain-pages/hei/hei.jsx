import React from 'react';
import { Route, Routes } from 'react-router';

const HeiInstitutions = React.lazy(() => import('./hei-institutions'));
const HeiUsers = React.lazy(() => import('./users/hei-users'));

const Hei = () => (
  <Routes>
    <Route index element={<HeiInstitutions />} />
    <Route path=":institutionId/users/*" element={<HeiUsers />} />
  </Routes>
);

export default Hei;
