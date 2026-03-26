import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.email || !form.password) return
    navigate('/discover-vi')
  }

  return (
    <section className="page-card login">
      <h1 className="page-title">Dang nhap</h1>
      <p className="page-subtitle">Dang nhap de tiep tuc lo trinh luyen tap.</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />

        <label htmlFor="password">Mat khau</label>
        <input id="password" name="password" type="password" value={form.password} onChange={handleChange} />

        <Button type="submit">Dang nhap</Button>
      </form>

      <p className="login-note">API login co san trong services/api.js thong qua api.auth.login.</p>
    </section>
  )
}

export default Login
