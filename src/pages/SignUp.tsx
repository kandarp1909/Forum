import React from 'react'
import AuthForm from '../components/AuthForm'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-[80vh] animate-slideUp">
      <div className="card p-6 w-[400px]  rounded-lg">
        <AuthForm
          mode="signup"
          onSuccess={() => navigate('/')}
        />
      </div>
    </div>
  )
}
