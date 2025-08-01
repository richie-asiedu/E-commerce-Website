import React, { useState } from "react";
import "./Profile.css";


const Profile: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [signup, setSignup] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setTimeout(() => {
      if (login.email === "example@gmail.com" && login.password === "example123$%") {
        setSuccess("Welcome back! 🎉");
      } else {
        setError("Invalid credentials. Try example@gmail.com / example123$%");
      }
      setLoading(false);
    }, 700);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setTimeout(() => {
      if (!signup.username || !signup.email || !signup.password) {
        setError("All fields required.");
      } else {
        setSuccess("Account created! Flip to login.");
        setFlipped(false);
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="profile-flip-bg">
      <div className={`profile-flip-card${flipped ? " flipped" : ""}`}> 
        <div className="profile-flip-card-inner">
          <div className="profile-flip-card-face profile-flip-card-front">
            <form className="profile-flip-form" onSubmit={handleLogin} autoComplete="off">
              <h2>Sign In</h2>
              <input
                type="email"
                placeholder="Email"
                value={login.email}
                onChange={e => setLogin({ ...login, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={login.password}
                onChange={e => setLogin({ ...login, password: e.target.value })}
                required
              />
              {error && <div className="profile-flip-error">{error}</div>}
              {success && <div className="profile-flip-success">{success}</div>}
              <button type="submit" className="profile-flip-btn" disabled={loading}>
                {loading ? <span className="profile-flip-loader"></span> : "Login"}
              </button>
              <div className="profile-flip-switch">
                <span>New here?</span>
                <button type="button" onClick={() => { setFlipped(true); setError(""); setSuccess(""); }}>
                  Create Account
                </button>
              </div>
            </form>
          </div>
          <div className="profile-flip-card-face profile-flip-card-back">
            <form className="profile-flip-form" onSubmit={handleSignup} autoComplete="off">
              <h2>Sign Up</h2>
              <input
                type="text"
                placeholder="Username"
                value={signup.username}
                onChange={e => setSignup({ ...signup, username: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={signup.email}
                onChange={e => setSignup({ ...signup, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={signup.password}
                onChange={e => setSignup({ ...signup, password: e.target.value })}
                required
              />
              {error && <div className="profile-flip-error">{error}</div>}
              {success && <div className="profile-flip-success">{success}</div>}
              <button type="submit" className="profile-flip-btn" disabled={loading}>
                {loading ? <span className="profile-flip-loader"></span> : "Signup"}
              </button>
              <div className="profile-flip-switch">
                <span>Already have an account?</span>
                <button type="button" onClick={() => { setFlipped(false); setError(""); setSuccess(""); }}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
