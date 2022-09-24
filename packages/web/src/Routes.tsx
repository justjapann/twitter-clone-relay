import { Routes as Router, Route } from 'react-router-dom'
import { LoginRoutes } from './modules/pages/sidebar/LoginRoutes'
import { RequireAuthLayout } from './modules/auth/RequireAuthLayout'
import Home from './modules/pages/Home'
import React from 'react'

export const Routes = () => (
  <Router>
    <Route path='/*' element={<LoginRoutes />} />
    <Route element={<RequireAuthLayout />}>
      <Route path='/feed' element={<Home />} />
    </Route>
  </Router>
)
