import React from 'react';

const LoginPage = () => {
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {/* Add your login form here */}
    </div>
  );
}
<form>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>

export default LoginPage;
