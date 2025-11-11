import React from 'react'
import AuthForm from '../components/AuthForm'
import { useNavigate } from 'react-router-dom'

export default function SignInPage() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="card p-6 w-[400px] rounded-xl2">
        <AuthForm
          mode="signin"
          onSuccess={() => navigate('/')}
        />
      </div>
    </div>
  )
}
