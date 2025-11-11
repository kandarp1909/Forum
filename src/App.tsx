import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Feed from './components/Feed'
import Header from './components/Header'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import { isAuthenticated, signOut, getUser } from './lib/auth'

export default function App(){
  const [auth, setAuth] = useState(!!isAuthenticated())
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    setAuth(false)
    alert('Signed out')
    navigate('/')
  }

  return (
    <div className="container">
      <Header
        authed={auth}
        onSignOut={handleSignOut}
        userEmail={getUser()?.email}
      />
      <main className="mt-6 content ">
        <Routes>
          <Route path="/" element={<Feed isAuthed={auth} onAuthChange={() => setAuth(!!isAuthenticated())} />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  )
}
