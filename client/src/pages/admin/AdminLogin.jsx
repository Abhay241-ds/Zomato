import React, { useState } from 'react'
import adminLogin from '../api/adminLoginApi';

const AdminLogin = () => {

  //here we are using setState() hooks.
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    const response = adminLogin(email, pass)
    if (response.httpcode === 200 ) {
      // move to homepage
    }
    else if (response === "Login ID or password does not match.") {
      // show error page
    } else if (response  === "The user is banned") {
      //show banned error
    } else if (response.httpcode === 404) {
      //show no account exist error
    }
  }
  return (
    <div>
      <h1>Admin Login Form</h1>
      <form onSubmit={handleLogin}>
        <input type="email"
          name="adminEmail"
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
          name="adminPass"
          id=""
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login Now</button>
      </form>
    </div>
  )
}

export default AdminLogin