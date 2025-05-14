import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Inventory from './pages/Inventory'
import Orders from './pages/Orders'
import Reports from './pages/Reports'
import ManageStore from './pages/ManageStore'
import Suppliers from './pages/Suppliers'
import Settings from './pages/Settings'
import Logout from './pages/Logout'

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='reports' element={<Reports />} />
          <Route path='suppliers' element={<Suppliers />} />
          <Route path='orders'  element={<Orders />} />  
          <Route path='store' element={<ManageStore />} />
          <Route path='settings' element={<Settings />} />
          <Route path='logout' element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Main />
  </StrictMode>
)