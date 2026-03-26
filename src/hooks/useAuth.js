import { useMemo, useState } from 'react'
import { api } from '../services/api'

const SESSION_KEY = 'recourling_session'

export function useAuth() {
  const [session, setSession] = useState(() => {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  })

  const isAuthenticated = useMemo(() => Boolean(session?.token), [session])

  async function login(payload) {
    const result = await api.auth.login(payload)
    localStorage.setItem(SESSION_KEY, JSON.stringify(result))
    setSession(result)
    return result
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setSession(null)
  }

  return {
    session,
    isAuthenticated,
    login,
    logout,
  }
}
