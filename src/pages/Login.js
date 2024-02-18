import { useLocalStorage } from '@uidotdev/usehooks'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
  const [users, setUsers] = useLocalStorage('users');
  const [loggedin, setLoggedIn] = useLocalStorage('loggedin');
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isloggedin", false);

  const handleLogin = e => {
    e.preventDefault()

    const form = e.target.elements
    const email = form['email'].value
    const password = form['password'].value

    const ls_users = users.filter(user => (user.email == email && user.password == password))

    if(ls_users.length) {
      setLoggedIn(ls_users[0])
      setIsLoggedIn(true);
      window.location.href = 'http://localhost:3000/myjobs'
    } else {
      alert('Invalid credentials or/and user does not exist')
    }
  }

  return (
    <Container className='my-5 container-fluid primaForm'>
      <div className="card p-4 mx-auto">
        <h4 className='mb-4 fw-bold'>Login</h4>
        <form method="POST" onSubmit={handleLogin}>
          <input type='email' name='email' className='form-control mb-3' placeholder='Email' required />
          <input type='password' name='password' className='form-control mb-3' placeholder='Password' required minLength={8} />
          <button type="submit" className='btn btn-outline-primary'>Login</button>
          <Link to="/signup" className='ms-2 btn btn-outline-secondary'>Register</Link>
        </form>
      </div>
    </Container>
  )
}

export default Login