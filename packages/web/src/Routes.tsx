import { Routes as Router, Route } from 'react-router-dom'
import { LoginRoutes } from './modules/pages/sign/LoginRoutes'
import { RequireAuthLayout } from './modules/auth/RequireAuthLayout'
import Home from './modules/pages/Home'
import Profile from './modules/pages/profile/index'
import React from 'react'

export const Routes = () => (
  <Router>
    <Route path='/*' element={<LoginRoutes />} />
    <Route element={<RequireAuthLayout />}>
      <Route path='/feed' element={<Home />} />
    </Route>
    <Route path='/profile' element={<Profile />} />
  </Router>
)
