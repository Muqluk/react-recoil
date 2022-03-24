import React from 'react';
import { Navigate, Outlet } from 'react-router';
import toast from 'react-hot-toast';


const useUser = () => ({ userId: 1, roles: ['admin'] }); // this is a mock. 
const isInRole = (user, roles) => {  // this is a mock also.
  console.log(user, roles);
  return true;
};

export default ({ roles, children }) => {
  const user = useUser();

  if (!user) {
    // user null or logged out, reload captures the location and starts signin
    // user undefined indicates useUser returned 401, handler is redirecting.

    if (user === null) {
      window.location.reload();
      return null;
    }

    if (roles && !isInRole(user, roles)) {
      setTimeout(() => toast.error('Insufficient Permission'), 0);
      return <Navigate to="/" replace />
    }
  }

  return children ? children : <Outlet />;
};
