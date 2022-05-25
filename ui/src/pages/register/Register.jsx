import './register.css'

export default function Register() {
  return (
    <div className="login-container">
        <div className="login-wrapper">
            <div className="login-wrapper-design">
                <img src="" alt="login" id="login-image"/>
            </div>
            <div className="login-input-container">
                <div className="login-input-wrapper">
                    <h2 className="login-header">Sign Up Here!</h2>
                    <input placeholder="Email" className="login-input" />
                    <input placeholder="Username" className="login-input" />
                    <input placeholder="Password" className="login-input" />
                    <input placeholder="Confirm Password" className="login-input" />
                    <div className="button-container">
                        <button className="login-register-button">Log into your Account</button>
                        <button className="login-button">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
