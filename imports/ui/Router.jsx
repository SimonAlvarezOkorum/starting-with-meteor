import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { NotFound } from './components/NotFound';
import { Access } from './Access';
import { RoutePaths } from './components/RoutePaths';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';
import { LoggedUserOnly } from './LoggedUserOnly';
import { AnonymousOnly } from './AnonymousOnly';
import { RemoveTransaction } from './RemoveTransaction';
import { AdminOnly } from './AdminOnly';

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <LoggedUserOnly>
          <Home />
        </LoggedUserOnly>
      }
    />
    <Route 
      path={RoutePaths.ACCESS}
      element={
        <AnonymousOnly>
          <Access />
        </AnonymousOnly>
      } 
    />
    <Route 
      path={RoutePaths.FORGOT_PASSWORD}
      element={
        <AnonymousOnly>
          <ForgotPassword />
        </AnonymousOnly>
      } 
    />
    <Route 
      path={`${RoutePaths.RESET_PASSWORD}/:token`}
      element={
        <AnonymousOnly>
          <ResetPassword />
        </AnonymousOnly>
      } 
    />
    <Route 
      path={RoutePaths.REMOVE_TRANSACTION}
      element={
        <AdminOnly>
          <RemoveTransaction />
        </AdminOnly>
      } 
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
