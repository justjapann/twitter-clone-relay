import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoginLayout } from './LoginLayout'

import ModalLogin from './ModalLogin'
import ModalRegister from './ModalRegister'

export const LoginRoutes = () => (
  <Routes>
    <Route path='/' element={<LoginLayout />}>
      <Route index element={<ModalLogin />} />
      <Route path='signup' element={<ModalRegister />} />
    </Route>
  </Routes>
)
