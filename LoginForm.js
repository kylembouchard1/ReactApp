import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <h3 className="login-header">Log In</h3>
      <form className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;