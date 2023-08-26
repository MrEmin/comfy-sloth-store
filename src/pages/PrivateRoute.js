import React from 'react'
import { Navigate } from 'react-router-dom'

// kullanıcı login olduktan sonra url'den checkout sayfasına gidemediği için user verisini useAuth0 kancasından alıyoruz ve App.js'i AuthWrapper ile sarıyoruz.
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0()
  if (!user) {
    return <Navigate to='/' />
  }
  return children
}
export default PrivateRoute
