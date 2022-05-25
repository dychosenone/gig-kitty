import './login.css'

export default function Login() {
  return (
    <div className="login-container">
        <div className="login-wrapper">
            <div className="login-wrapper-design">
                <img src="" alt="login" id="login-image"/>
            </div>
            <div className="login-input-container">
                <div className="login-input-wrapper">
                    <h2 className="login-header">Sign In</h2>
                    <input placeholder="Email" className="login-input" />
                    <input placeholder="Password" className="login-input" />
                    <div className="button-container">
                        <button className="login-register-button">
                        Sign Up Here
                        </button>
                        <button className="login-button">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
