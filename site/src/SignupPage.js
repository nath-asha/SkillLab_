import React from 'react';

const SignupPage = () => {
  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      {/* Add your signup form here */}
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

export default SignupPage;
