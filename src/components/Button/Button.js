import './Button.css'

function Button({ variant = 'primary', className = '', ...props }) {
  return <button className={`btn ${variant} ${className}`.trim()} {...props} />
}

export default Button
