import React, { useEffect, useState } from "react";

import { useLoggedUser } from 'meteor/quave:logged-user-react';
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "./components/Loading";
import { RoutePaths } from "./components/RoutePaths";

export const AdminOnly = ({children}) => {

  const [isAdmin, setIsAdmin] = useState();
  const location = useLocation();
  useEffect( () => {
    Meteor.call('roles.isAdmin', (error, isAdminReturn) => {
      if(error) {
        setIsAdmin(false);
        return;
      }
      setIsAdmin(isAdminReturn);
    })
  }, [])

  if(isAdmin == null) {
    return <Loading/>;
  }
  if(!isAdmin){
    return (
      <Navigate to={RoutePaths.HOME} state={{from: location}} replace />
    );
  }
  return children;
}