import React, { useState } from 'react'
import './LoginV1Page.css'

export default function LoginV1Page() {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className="login-page">
			<nav className="login-nav">
				<div className="nav-brand">Linguist Pro</div>
				<div className="nav-actions">
					<button className="help-btn" type="button" aria-label="Help">
						<span className="material-symbols-outlined">help_outline</span>
					</button>
				</div>
			</nav>

			<main className="login-main">
				<div className="bg-element bg-element-1" />
				<div className="bg-element bg-element-2" />

				<div className="login-container">
					<div className="login-card">
						<div className="login-brand">
							<div className="brand-icon">
								<span className="material-symbols-outlined">translate</span>
							</div>
							<h1>Linguist Pro</h1>
							<p>Hanh trinh ngon ngu bat dau tai day.</p>
						</div>

						<form className="login-form">
							<div className="form-group">
								<label htmlFor="username">Ten dang nhap</label>
								<div className="input-wrapper">
									<span className="material-symbols-outlined input-icon">person</span>
									<input id="username" placeholder="Email hoac so dien thoai" type="text" />
								</div>
							</div>

							<div className="form-group">
								<div className="label-row">
									<label htmlFor="password">Mat khau</label>
									<button className="forgot-password" type="button">Quen mat khau?</button>
								</div>
								<div className="input-wrapper">
									<span className="material-symbols-outlined input-icon">lock</span>
									<input id="password" placeholder="Nhap mat khau" type={showPassword ? 'text' : 'password'} />
									<button className="toggle-password" type="button" onClick={() => setShowPassword((v) => !v)}>
										<span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
									</button>
								</div>
							</div>

							<button className="login-btn" type="button">Dang nhap</button>
						</form>

						<div className="separator">
							<span>HOAC</span>
						</div>

						<div className="social-login">
							<button className="social-btn" type="button"><span>Google</span></button>
							<button className="social-btn" type="button"><span>Facebook</span></button>
						</div>

						<p className="signin-link">
							Chua co tai khoan? <a href="/register">Dang ky ngay</a>
						</p>
					</div>
				</div>
			</main>
		</div>
	)
}
