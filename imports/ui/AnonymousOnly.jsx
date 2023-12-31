import React from "react";

import { useLoggedUser } from 'meteor/quave:logged-user-react';
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "./components/Loading";
import { RoutePaths } from "./components/RoutePaths";

export const AnonymousOnly = ({children}) => {

  const { loggedUser, isLoadingLoggedUser } = useLoggedUser();
  const location = useLocation();

  if(isLoadingLoggedUser) {
    return <Loading/>;
  }
  if(loggedUser){
    return (
      <Navigate to={RoutePaths.HOME} state={{from: location}} replace />
    );
  }
  return children;
}