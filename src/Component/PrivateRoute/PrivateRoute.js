import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Routes, useLocation  } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,loding}=useAuth()
      let location = useLocation();
      if(loding){
          return <Spinner animation="border" variant="danger" />
      }
      if (user.email) {
          return children;
      }
      return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoute;