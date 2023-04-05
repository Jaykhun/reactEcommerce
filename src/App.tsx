import { Admin } from '@/pages/Admin'
import { Products } from '@/pages/Admin/Products'
import { Users, UsersDetails } from '@/pages/Admin/Users'
import Dashboard from '@/routes/Dashboard'
import '@/styles/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='admin' element={<Dashboard />}>
            <Route index element={<Admin />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:id' element={<UsersDetails />} />

            <Route path='products' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App