import { save, load, remove } from './storage'

export type User = { email: string; name?: string }

const TEST_USERS: Record<string, string> = {
  'demo@example.com': 'password123',
  'test@user.com': 'testpass'
}

export const isAuthenticated = () => !!load('auth_user')
export const getUser = (): User | null => load('auth_user')

export const signIn = async (email: string, password: string) => {
  await new Promise(r=>setTimeout(r,300))
  const expected = TEST_USERS[email]
  if (expected && expected === password){
    const user = { email, name: email.split('@')[0] }
    save('auth_user', user)
    return { ok:true, user }
  }
  return { ok:false, message:'Invalid credentials' }
}

export const signUp = async (email: string, password: string) => {
  await new Promise(r=>setTimeout(r,400))
  TEST_USERS[email] = password
  const user = { email, name: email.split('@')[0] }
  save('auth_user', user)
  return { ok:true, user }
}

export const signOut = () => remove('auth_user')
