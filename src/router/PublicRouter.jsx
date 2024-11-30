import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const PublicRouter = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
      return;
    }
    if (user && user?.email) {
      return children;
    }
    return <Navigate state={location.pathname} to={`/`}></Navigate>;
};

export default PublicRouter;